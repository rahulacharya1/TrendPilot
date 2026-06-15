import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"

import Dashboard from "@/pages/Dashboard"
import Trends from "@/pages/Trends"
import Hooks from "@/pages/Hooks"
import Scripts from "@/pages/Scripts"
import Competitors from "@/pages/Competitors"
import Analytics from "@/pages/Analytics"

import NotFound from "@/pages/NotFound"

import ProtectedRoute from "./ProtectedRoute"

const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/services"
                    element={<Services />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* Protected Routes */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/trends"
                    element={
                        <ProtectedRoute>
                            <Trends />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/hooks"
                    element={
                        <ProtectedRoute>
                            <Hooks />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/scripts"
                    element={
                        <ProtectedRoute>
                            <Scripts />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/competitors"
                    element={
                        <ProtectedRoute>
                            <Competitors />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/analytics"
                    element={
                        <ProtectedRoute>
                            <Analytics />
                        </ProtectedRoute>
                    }
                />

                {/* 404 */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes
