from django.core.management.base import BaseCommand
from trends.models import Trend
from hooks.models import Hook
from scripts.models import Script
from competitors.models import CompetitorAnalysis

class Command(BaseCommand):
    help = 'Seeds the database with realistic Trend, Hook, and Script data'

    def handle(self, *args, **options):
        # Clear existing data to ensure clean seeding
        self.stdout.write('Clearing existing database records...')
        Trend.objects.all().delete()
        Hook.objects.all().delete()
        Script.objects.all().delete()
        CompetitorAnalysis.objects.all().delete()

        # Define high-quality real-world trends
        seed_trends = [
            {
                "title": "Vite 6 + Rolldown Compiler Rollout",
                "platform": "YouTube",
                "category": "Tech & Web Development",
                "score": 98,
                "freshness": "Breakout"
            },
            {
                "title": "AI Agent Workflows in Python & LangChain",
                "platform": "YouTube",
                "category": "Artificial Intelligence",
                "score": 95,
                "freshness": "High"
            },
            {
                "title": "Solo Developer SaaS Micro-Monetization Models",
                "platform": "TikTok",
                "category": "SaaS & Business",
                "score": 89,
                "freshness": "Medium"
            },
            {
                "title": "Short-Form Video Viewer Retention Frameworks",
                "platform": "Instagram Reels",
                "category": "Creator Economy",
                "score": 92,
                "freshness": "High"
            },
            {
                "title": "Why PostgreSQL is Replacing MongoDB for Early Startups",
                "platform": "YouTube",
                "category": "Tech & Database",
                "score": 87,
                "freshness": "Medium"
            },
            {
                "title": "The Rise of HSL & OKLCH Color Systems in CSS4",
                "platform": "TikTok",
                "category": "UI/UX Design",
                "score": 79,
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

        # Create some real hooks for these trends to populate the DB
        # Trend 1: Vite 6
        Hook.objects.create(
            trend=created_trends[0],
            hook_type="Curiosity",
            content="This new Vite 6 compiler will compile your project in 0.2 seconds..."
        )
        Hook.objects.create(
            trend=created_trends[0],
            hook_type="Authority",
            content="Top frontend architects are moving away from Webpack entirely for this new tool."
        )

        # Trend 2: AI Agents
        Hook.objects.create(
            trend=created_trends[1],
            hook_type="Storytelling",
            content="I automated my entire daily scheduling routine using a local Python script in 30 lines..."
        )
        Hook.objects.create(
            trend=created_trends[1],
            hook_type="Curiosity",
            content="The secret model setup that developers are using to build multi-agent applications."
        )

        # Trend 3: Solo Dev SaaS
        Hook.objects.create(
            trend=created_trends[2],
            hook_type="Authority",
            content="Why building a SaaS with a single stripe payment link is the fastest path to $5k MRR."
        )

        # Create scripts
        Script.objects.create(
            trend=created_trends[0],
            script="[VISUAL: Screen recording showing terminal compiling Vite 6. Fast logs. AUDIO: Speak fast and enthusiastic.] Hey developers, stop waiting for your bundler to finish. Today, Vite 6 dropped with Rolldown, and it compiles 10x faster. Let's look at the benchmarks...",
            caption="Vite 6 is finally here with Rolldown support! Here is how it changes frontend development speed.",
            hashtags="#webdevelopment #vitejs #javascript #codingtips",
            cta="Subscribe to TrendPilot for more frontend updates."
        )

        # Create competitor analysis records
        CompetitorAnalysis.objects.create(
            creator_name="TechWithTim",
            platform="YouTube",
            content_angle="Python tutorials and software engineering guides.",
            gap_found="Lack of modern AI integration coding tutorials.",
            competitor_trends="AI agents, FastAPI, Next.js"
        )
        CompetitorAnalysis.objects.create(
            creator_name="Alex Hormozi",
            platform="Instagram Reels",
            content_angle="High energy business advice and lifestyle framing.",
            gap_found="Very generic SaaS advice, no technical execution steps.",
            competitor_trends="Solopreneurship, micro-consulting"
        )
        CompetitorAnalysis.objects.create(
            creator_name="DesignCourse",
            platform="YouTube",
            content_angle="CSS layouts, UI design theory, and color design walkthroughs.",
            gap_found="Minimal coverage of interactive CSS4 OKLCH gradient setups.",
            competitor_trends="OKLCH colors, Figma to Code"
        )

        self.stdout.write(self.style.SUCCESS('Successfully seeded TrendPilot database with real-world creator data.'))
