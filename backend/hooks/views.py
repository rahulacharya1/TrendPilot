from rest_framework.views import APIView
from rest_framework.response import Response
from utils.ai import generate_hooks
from trends.models import Trend
from .models import Hook
from .serializers import HookSerializer

class GenerateHooksView(APIView):

    def post(self, request):
        topic = request.data.get('topic')
        trend_id = request.data.get('trend_id')

        if not topic:
            return Response({'error': 'Topic is required.'}, status=400)

        # Find or create a trend associated with this topic
        trend = None
        if trend_id:
            trend = Trend.objects.filter(id=trend_id).first()
        if not trend:
            trend = Trend.objects.filter(title__iexact=topic).first()
        if not trend:
            trend = Trend.objects.create(
                title=topic[:255],
                platform='General',
                category='AI Generated',
                score=75,
                freshness='New'
            )

        # Generate hooks from AI (returns array of objects)
        ai_hooks = generate_hooks(topic)

        saved_hooks = []
        for h_data in ai_hooks:
            hook_obj = Hook.objects.create(
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

    def get(self, request):
        hooks = Hook.objects.all().order_by('-created_at')
        serializer = HookSerializer(hooks, many=True)
        return Response(serializer.data)
