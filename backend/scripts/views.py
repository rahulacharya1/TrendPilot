from rest_framework.views import APIView
from rest_framework.response import Response
from utils.script_generator import generate_script
from trends.models import Trend
from .models import Script
from .serializers import ScriptSerializer

class GenerateScriptView(APIView):

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

        # Generate script from AI (returns dict)
        ai_data = generate_script(topic)

        script_obj = Script.objects.create(
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

    def get(self, request):
        scripts = Script.objects.all().order_by('-created_at')
        serializer = ScriptSerializer(scripts, many=True)
        return Response(serializer.data)
