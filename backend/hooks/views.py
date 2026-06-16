from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from utils.ai import generate_hooks
from trends.models import Trend
from .models import Hook
from .serializers import HookSerializer
import logging

logger = logging.getLogger(__name__)

class GenerateHooksView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        topic = request.data.get('topic')
        trend_id = request.data.get('trend_id')

        # Input validation
        if not topic or not topic.strip():
            return Response({'error': 'Topic is required.'}, status=400)
        
        topic = topic.strip()
        if len(topic) > 100:
            return Response({'error': 'Topic must be 100 characters or less.'}, status=400)

        # Find or create a trend associated with this topic
        trend = None
        if trend_id:
            trend = Trend.objects.filter(id=trend_id).first()
        if not trend:
            # Check user-specific or public trend
            trend = Trend.objects.filter(title__iexact=topic).first()
        if not trend:
            trend = Trend.objects.create(
                user=request.user,
                title=topic[:255],
                platform='General',
                category='AI Generated',
                score=75,
                freshness='New'
            )

        # Generate hooks from AI (returns array of objects) with try/except error handling
        try:
            ai_hooks = generate_hooks(topic)
            if not isinstance(ai_hooks, list):
                raise ValueError("AI generation did not return a list of hooks")
        except Exception as e:
            logger.error(f"Error generating hooks for topic '{topic}': {e}", exc_info=True)
            return Response({
                'error': 'Failed to generate hooks. The AI service may be temporarily unavailable.'
            }, status=500)

        saved_hooks = []
        for h_data in ai_hooks:
            hook_obj = Hook.objects.create(
                user=request.user,
                trend=trend,
                hook_type=h_data.get('type', 'Curiosity'),
                content=h_data.get('content', '')
            )
            saved_hooks.append(hook_obj)

        serializer = HookSerializer(saved_hooks, many=True)
        return Response({
            'success': True,
            'hooks': serializer.data
        })

class HookListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        hooks = Hook.objects.filter(user=request.user).order_by('-created_at')
        serializer = HookSerializer(hooks, many=True)
        return Response(serializer.data)
