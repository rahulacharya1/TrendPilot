from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Trend
from .serializers import TrendSerializer

class TrendListView(APIView):

    def get(self, request):
        trends = Trend.objects.all()
        serializer = TrendSerializer(trends, many=True)
        return Response(serializer.data)
    
