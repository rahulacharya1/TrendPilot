# ✈️ TrendPilot AI — AI-Powered Content & Trend Co-Pilot

TrendPilot AI is an all-in-one AI platform designed for digital content creators, marketers, and businesses to stay ahead of the curve. It uses advanced trend analysis and AI-driven workflows to turn audience insights into viral hooks, digital video scripts, and competitor-gap intelligence.

---

## 🚀 Key Features

*   **📈 Real-time Trend Discovery**: Track market trends, score growth potential, and analyze consumer patterns.
*   **🪝 Hook Generator**: Design high-converting, attention-grabbing opening hooks tailored to specific social niches (YouTube, Instagram Reels) with immediate history prepending.
*   **🎬 AI Scriptwriter**: Generate comprehensive production-ready scripts with visual cues, captions, and tags.
*   **🔍 Competitor Gap Analysis**: Inspect competitor channels to extract metadata, content styles, and audience demands.
*   **🌓 Smooth Theme Switching**: Supports site-wide Dark and Light mode themes with HSL colors and animated togglers.
*   **📱 Mobile Responsive**: Collapsible side drawer with dim overlays for optimized mobile and tablet displays.
*   **⚡ API Versioning & Rate Throttling**: Safe, version-namespaces (`/api/v1/`) with secure User (1000/day) and Anon (100/day) limits.

---

## 🛠️ Tech Stack

### Frontend
*   **Core**: React 19 + Vite
*   **State Management**: Zustand
*   **Styling**: Tailwind CSS + CSS variables + Lucide Icons
*   **HTTP Client**: Axios (with automatic token rotation & refresh interceptors)

### Backend
*   **Core**: Django 6.0 + Django REST Framework (DRF)
*   **Authentication**: JSON Web Token (SimpleJWT)
*   **AI Engine**: Google Gemini API (using `gemini-flash-latest`)
*   **Database**: SQLite (default), PostgreSQL / Neon Database (ready)

---

## 📂 Project Directory Structure

```text
TrendPilot/
├── backend/               # Django REST API Backend
│   ├── accounts/          # JWT User authentication & registration app
│   ├── analytics/         # Usage and content statistics tracking
│   ├── competitors/       # Scraping and competitor analysis app
│   ├── config/            # Project settings, WSGI/ASGI configurations, URLs
│   ├── hooks/             # AI hook generation app
│   ├── scripts/           # AI script generation app
│   ├── subscriptions/     # Payment subscription management
│   ├── trends/            # Social media trend scoring and retrieval
│   └── utils/             # Gemini API clients, web scrapers, helper scripts
├── frontend/              # React + Vite Frontend
│   ├── src/
│   │   ├── api/           # Axios HTTP client configuration
│   │   ├── components/    # Reusable & custom React components (ThemeToggle, Sidebar)
│   │   ├── hooks/         # Custom React hooks (auth, theme, trends)
│   │   ├── layouts/       # MainLayout responsive frames
│   │   ├── pages/         # Page views (Dashboard, Trends, Login, Register)
│   │   └── store/         # Zustand global state management
└── .gitignore             # Consolidated monorepo gitignore file
```

---

## ⚙️ Getting Started & Setup

### Prerequisites
*   [Python 3.12+](https://www.python.org/)
*   [Node.js 20+](https://nodejs.org/)

---

### 🐍 1. Backend Setup (Django)

1.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment**:
    ```bash
    # Windows
    python -m venv server
    server\Scripts\activate

    # macOS/Linux
    python3 -m venv server
    source server/bin/activate
    ```

3.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4.  **Create your local environment file (`.env`)**:
    Create a `.env` file in the `backend/` directory:
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    DJANGO_SECRET_KEY=your_django_secret_key_here
    DJANGO_DEBUG=True
    DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
    ```

5.  **Neon / PostgreSQL Configuration (Optional)**:
    If you wish to use PostgreSQL (such as Neon DB), simply add these environment variables to `backend/.env`:
    ```env
    DB_NAME=your_neon_db_name
    DB_USER=your_neon_db_user
    DB_PASSWORD=your_neon_db_password
    DB_HOST=your_neon_db_hostname.neon.tech
    DB_PORT=5432
    ```
    If these variables are omitted, the app will automatically fall back to the SQLite local database file.

6.  **Run Database Migrations**:
    ```bash
    python manage.py migrate
    ```

7.  **Start the development server**:
    ```bash
    python manage.py runserver
    ```
    The backend API will be available at `http://127.0.0.1:8000/api/v1/`.

---

### ⚛️ 2. Frontend Setup (React)

1.  **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure environment variables**:
    Verify that `frontend/.env` exists and contains:
    ```env
    VITE_API_URL=http://127.0.0.1:8000/api/v1
    VITE_APP_NAME=TrendPilot AI
    ```

4.  **Start the React development server**:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173`.
