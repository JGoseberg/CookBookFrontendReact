import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import MainLayout from "./layouts/MainLayout";
import RecipePage from "./pages/RecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><LoginPage /></MainLayout>} />
                <Route path="/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
                <Route path="/recipes" element={<MainLayout><RecipePage /></MainLayout>} />
                <Route path="/recipe/:id" element={<MainLayout><RecipeDetailPage /></MainLayout>} />
            </Routes>
        </Router>
    );
}



export default App;
