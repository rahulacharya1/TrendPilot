from rest_framework.views import APIView
from rest_framework.response import Response
from utils.script_generator import generate_script

class GenerateScriptView(APIView):

    def post(self, request):
        topic = request.data.get('topic')

        script = generate_script(topic)

        return Response({
            'success': True,
            'script': script
        })
        
