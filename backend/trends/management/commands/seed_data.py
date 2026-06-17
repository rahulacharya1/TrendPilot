from django.core.management.base import BaseCommand
from trends.models import Trend
from hooks.models import Hook
from scripts.models import Script
from competitors.models import CompetitorAnalysis

class Command(BaseCommand):
    help = 'Seeds the database with realistic cross-niche Trend, Hook, and Script data'

    def handle(self, *args, **options):
        # Clear existing data to ensure clean seeding
        self.stdout.write('Clearing existing database records...')
        Trend.objects.all().delete()
        Hook.objects.all().delete()
        Script.objects.all().delete()
        CompetitorAnalysis.objects.all().delete()

        # Define high-quality real-world trends across diverse niches
        seed_trends = [
            {
                "title": "Google Gemini AI Extensions for Daily Productivity",
                "platform": "YouTube",
                "category": "Technology & AI",
                "score": 98,
                "freshness": "Breakout"
            },
            {
                "title": "The Rise of Micro-Investing Apps for Gen-Z",
                "platform": "Instagram Reels",
                "category": "Finance & Investing",
                "score": 94,
                "freshness": "High"
            },
            {
                "title": "Cold Plunge and Ice Bath Recovery Protocols",
                "platform": "Instagram Reels",
                "category": "Health & Fitness",
                "score": 91,
                "freshness": "Breakout"
            },
            {
                "title": "Faceless YouTube Channels Using AI Voiceovers",
                "platform": "YouTube",
                "category": "Digital Marketing",
                "score": 89,
                "freshness": "Medium"
            },
            {
                "title": "Digital Nomad Visas for European Countries in 2026",
                "platform": "YouTube",
                "category": "Lifestyle & Travel",
                "score": 87,
                "freshness": "Medium"
            },
            {
                "title": "High-Protein Low-Calorie Meal Prep Hacks",
                "platform": "Instagram Reels",
                "category": "Food & Wellness",
                "score": 95,
                "freshness": "Breakout"
            }
        ]

        created_trends = []
        for t_data in seed_trends:
            trend = Trend.objects.create(
                title=t_data["title"],
                platform=t_data["platform"],
                category=t_data["category"],
                score=t_data["score"],
                freshness=t_data["freshness"]
            )
            created_trends.append(trend)
            self.stdout.write(self.style.SUCCESS(f'Created Trend: {trend.title}'))

        # Create hooks for these trends to populate the DB
        # Trend 1: Gemini AI Productivity
        Hook.objects.create(
            trend=created_trends[0],
            hook_type="Curiosity",
            content="I automated my entire daily scheduling routine using a simple Gemini AI Extension in 2 clicks..."
        )
        Hook.objects.create(
            trend=created_trends[0],
            hook_type="Authority",
            content="Why productivity experts are swapping standard calendar apps for local AI agents."
        )

        # Trend 2: Micro-Investing
        Hook.objects.create(
            trend=created_trends[1],
            hook_type="Storytelling",
            content="How I grew my spare change into a ₹15,000 portfolio using automatic rounding apps..."
        )
        Hook.objects.create(
            trend=created_trends[1],
            hook_type="Curiosity",
            content="The hidden micro-investing settings that average creators are using to beat inflation."
        )

        # Trend 3: Cold Plunge
        Hook.objects.create(
            trend=created_trends[2],
            hook_type="Authority",
            content="Why elite athletes are swapping standard steam rooms for 3-minute ice plunges."
        )

        # Create scripts
        Script.objects.create(
            trend=created_trends[0],
            script="[VISUAL: Screen recording of a Google Calendar page. An AI assistant window opens and schedules 5 meetings instantly. AUDIO: Clear, fast-paced and encouraging voiceover.] Stop manually entering meetings and scheduling calendar tasks. This new Gemini extension automates all of it in 2 clicks. Watch how I set up my entire weekly pipeline in 5 seconds...",
            caption="Unlocking 10x speed in daily scheduling using Google Gemini AI Extensions.",
            hashtags="#productivity #ai #tools #workflow",
            cta="Subscribe to TrendPilot for more AI workflow secrets."
        )

        # Create competitor analysis records
        CompetitorAnalysis.objects.create(
            creator_name="AliAbdaal",
            platform="YouTube",
            content_angle="Productivity, study guides, and workspace setups.",
            gap_found="Lack of deep, hands-on tutorials for Gemini integration workflows.",
            competitor_trends="Gemini extensions, time blocking"
        )
        CompetitorAnalysis.objects.create(
            creator_name="Ranveer Allahbadia",
            platform="Instagram Reels",
            content_angle="Self-improvement, spirituality, and fitness talks.",
            gap_found="No direct coverage of cold therapy science breakdowns.",
            competitor_trends="Cold plunge, dopamine detox"
        )
        CompetitorAnalysis.objects.create(
            creator_name="Ankur Warikoo",
            platform="YouTube",
            content_angle="Personal finance tips, micro-investing platforms, and career guides.",
            gap_found="Minimal comparison review of automatic investing apps for beginners.",
            competitor_trends="Micro-investing, Index funds"
        )

        self.stdout.write(self.style.SUCCESS('Successfully seeded TrendPilot database with cross-niche creator data.'))
