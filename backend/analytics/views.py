from rest_framework.views import APIView
from rest_framework.response import Response
from trends.models import Trend
from hooks.models import Hook
from scripts.models import Script
from competitors.models import CompetitorAnalysis

class DashboardStatsView(APIView):

    def get(self, request):
        trends_count = Trend.objects.count()
        hooks_count = Hook.objects.count()
        scripts_count = Script.objects.count()
        competitors_count = CompetitorAnalysis.objects.count()

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
