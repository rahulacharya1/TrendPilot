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

        # Monthly generations over the last 6 calendar months
        import calendar
        from django.utils import timezone
        
        now = timezone.now()
        chart_data = []
        
        for i in range(5, -1, -1):
            year_offset = (now.month - 1 - i) // 12
            month_idx = (now.month - 1 - i) % 12 + 1
            year_num = now.year + year_offset
            month_name = calendar.month_abbr[month_idx]
            
            h_count = Hook.objects.filter(user=request.user, created_at__month=month_idx, created_at__year=year_num).count()
            s_count = Script.objects.filter(user=request.user, created_at__month=month_idx, created_at__year=year_num).count()
            total_val = h_count + s_count
            
            chart_data.append({
                "label": month_name,
                "val": total_val
            })

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
            },
            "chart_data": chart_data
        })
