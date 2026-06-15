from rest_framework.views import APIView
from rest_framework.response import Response

class CompetitorGapView(APIView):

    def post(self, request):
        creator = request.data.get('creator')

        return Response({
            'creator': creator,
            'gap': 'Nobody is covering beginner AI creator workflow.'
        })
        
