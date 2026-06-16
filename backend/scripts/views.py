from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from utils.script_generator import generate_script
from trends.models import Trend
from .models import Script
from .serializers import ScriptSerializer
import logging

logger = logging.getLogger(__name__)

class GenerateScriptView(APIView):
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

        # Generate script from AI (returns dict) with try/except error handling
        try:
            ai_data = generate_script(topic)
            if not isinstance(ai_data, dict):
                raise ValueError("AI generation did not return a valid script dictionary")
        except Exception as e:
            logger.error(f"Error generating script for topic '{topic}': {e}", exc_info=True)
            return Response({
                'error': 'Failed to generate script. The AI service may be temporarily unavailable.'
            }, status=500)

        script_obj = Script.objects.create(
            user=request.user,
            trend=trend,
            script=ai_data.get('script', ''),
            caption=ai_data.get('caption', ''),
            hashtags=ai_data.get('hashtags', ''),
            cta=ai_data.get('cta', '')
        )

        serializer = ScriptSerializer(script_obj)
        return Response({
            'success': True,
            'script': serializer.data
        })

class ScriptListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        scripts = Script.objects.filter(user=request.user).order_by('-created_at')
        serializer = ScriptSerializer(scripts, many=True)
        return Response(serializer.data)
