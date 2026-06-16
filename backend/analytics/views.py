from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q
from trends.models import Trend
from hooks.models import Hook
from scripts.models import Script
from competitors.models import CompetitorAnalysis

class DashboardStatsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        trends_count = Trend.objects.filter(Q(user__isnull=True) | Q(user=request.user)).count()
        hooks_count = Hook.objects.filter(user=request.user).count()
        scripts_count = Script.objects.filter(user=request.user).count()
        competitors_count = CompetitorAnalysis.objects.filter(user=request.user).count()

        return Response({
            "trends": {
                "count": trends_count,
                "growth": "+12%"
            },
            "hooks": {
                "count": hooks_count,
                "growth": "+22%"
            },
            "scripts": {
                "count": scripts_count,
                "growth": "+8%"
            },
            "competitors": {
                "count": competitors_count,
                "growth": "+5%"
            }
        })
