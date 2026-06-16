from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q
from .models import Trend
from .serializers import TrendSerializer

class TrendListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        trends = Trend.objects.filter(Q(user__isnull=True) | Q(user=request.user))
        serializer = TrendSerializer(trends, many=True)
        return Response(serializer.data)
    
