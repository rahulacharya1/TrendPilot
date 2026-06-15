# ✈️ TrendPilot AI — AI-Powered Content & Trend Co-Pilot

TrendPilot AI is an all-in-one AI platform designed for digital content creators, marketers, and businesses to stay ahead of the curve. It uses advanced trend analysis and AI-driven workflows to turn audience insights into viral hooks, digital video scripts, and competitor-gap intelligence.

---

## 🚀 Key Features

*   **📈 Real-time Trend Discovery**: Track market trends, score growth potential, and analyze consumer patterns.
*   **🪝 Hook Generator**: Design high-converting, attention-grabbing opening hooks tailored to specific social niches (TikTok, YouTube, Reels).
*   **🎬 AI Scriptwriter**: Generate comprehensive production-ready scripts for videos and ads from any trend or topic.
*   **🔍 Competitor Gap Analysis**: Scrape competitor content and identify opportunities, underserved topics, and audience demands.
*   **📊 Performance & Analytics Dashboard**: Get unified performance charts of past content generations and historical trends.

---

## 🛠️ Tech Stack

### Frontend
*   **Core**: React 19 + Vite
*   **State Management**: Zustand
*   **Styling**: Tailwind CSS + CSS variables
*   **Components**: Radix UI + shadcn/ui components
*   **HTTP Client**: Axios (configured with token-interceptor capability)

### Backend
*   **Core**: Django 6.0 + Django REST Framework (DRF)
*   **Authentication**: JSON Web Token (JWT) via `django-rest-framework-simplejwt`
*   **AI Engine**: Google Gemini API (leveraging Gemini 1.5 Flash)
*   **Database**: SQLite (for development), migration-ready for PostgreSQL
*   **Background Tasks**: Celery & Redis (ready for scraping and async processing)

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
│   ├── public/            # Static assets (favicons, previews)
│   ├── src/
│   │   ├── api/           # Axios HTTP client configuration
│   │   ├── assets/        # Media assets (logos, generated images)
│   │   ├── components/    # Reusable shadcn/ui & custom React components
│   │   ├── hooks/         # Custom React hooks (auth, theme, trends)
│   │   ├── layouts/       # Dashboard & Auth route layout frames
│   │   ├── pages/         # Page views (Dashboard, Trends, Login, Register)
│   │   ├── routes/        # App routing system & ProtectedRoute guard
│   │   ├── services/      # Backend API communication wrappers
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

5.  **Run Database Migrations**:
    ```bash
    python manage.py migrate
    ```

6.  **Start the development server**:
    ```bash
    python manage.py runserver
    ```
    The backend API will be available at `http://127.0.0.1:8000/api/`.

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
    The frontend reads backend URLs from `frontend/.env`. Verify that it exists and points to your API:
    ```env
    VITE_API_URL=http://127.0.0.1:8000/api
    VITE_APP_NAME=TrendPilot AI
    ```

4.  **Start the React development server**:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173`.

---

## 🔒 Security & Safety Note
Never commit the `backend/.env` or `frontend/.env` variables. All temporary files, local SQLite databases (`db.sqlite3`), and local virtualenvs (`server/`) are ignored by the consolidated root `.gitignore` file.
