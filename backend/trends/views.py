from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.db.models import Q
from .models import Trend
from .serializers import TrendSerializer

class TrendListView(APIView):
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAuthenticated(), IsAdminUser()]
        return [IsAuthenticated()]

    def get(self, request):
        trends = Trend.objects.filter(Q(user__isnull=True) | Q(user=request.user))
        serializer = TrendSerializer(trends, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TrendSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminTrendDetailView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get_object(self, pk):
        try:
            return Trend.objects.get(pk=pk)
        except Trend.DoesNotExist:
            return None

    def put(self, request, pk):
        trend = self.get_object(pk)
        if not trend:
            return Response({'error': 'Trend not found.'}, status=status.HTTP_404_NOT_FOUND)
        serializer = TrendSerializer(trend, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        trend = self.get_object(pk)
        if not trend:
            return Response({'error': 'Trend not found.'}, status=status.HTTP_404_NOT_FOUND)
        trend.delete()
        return Response({'success': True})
    
