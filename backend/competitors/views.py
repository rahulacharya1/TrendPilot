from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from utils.competitor_analysis import analyze_competitor
from .models import CompetitorAnalysis
from .serializers import CompetitorAnalysisSerializer
import logging

logger = logging.getLogger(__name__)

class CompetitorGapView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        creator = request.data.get('creator')

        if not creator or not creator.strip():
            return Response({'error': 'Creator name is required.'}, status=400)

        creator = creator.strip()
        if len(creator) > 100:
            return Response({'error': 'Creator name must be 100 characters or less.'}, status=400)

        niche = request.user.niche or "general content creation"

        try:
            analysis_data = analyze_competitor(creator, niche)
            if not isinstance(analysis_data, dict):
                raise ValueError("Competitor analysis did not return a valid dictionary")
        except Exception as e:
            logger.error(f"Error analyzing competitor '{creator}': {e}", exc_info=True)
            return Response({
                'error': 'Failed to analyze competitor. The AI service may be temporarily unavailable.'
            }, status=500)

        # Create and save CompetitorAnalysis
        analysis_obj = CompetitorAnalysis.objects.create(
            user=request.user,
            creator_name=creator,
            platform="General",
            content_angle=analysis_data.get('content_angle', ''),
            gap_found=analysis_data.get('gap_found', ''),
            competitor_trends=analysis_data.get('competitor_trends', '')
        )

        serializer = CompetitorAnalysisSerializer(analysis_obj)
        return Response({
            'success': True,
            'analysis': serializer.data
        })
        
