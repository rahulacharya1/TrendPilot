from rest_framework.views import APIView
from rest_framework.response import Response
from utils.ai import generate_hooks

class GenerateHooksView(APIView):

    def post(self, request):
        topic = request.data.get('topic')

        hooks = generate_hooks(topic)

        return Response({
            'success': True,
            'hooks': hooks
        })
        
