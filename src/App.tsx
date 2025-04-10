import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import MainLayout from "./layouts/MainLayout";
import RecipePage from "./pages/RecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import UnderDevelopmentPage from "./pages/underDevelopment";
import AddIngredientPage from "./pages/AddIngredientPage";
import AddRecipePage from "./pages/AddRecipePage";
import MainLayoutWithAddButton from "./layouts/MainLayoutWithAddButton";

const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><LoginPage /></MainLayout>} />
                <Route path="/dashboard" element={<MainLayoutWithAddButton><DashboardPage /></MainLayoutWithAddButton>} />

                <Route path="/recipes" element={<MainLayoutWithAddButton><RecipePage /></MainLayoutWithAddButton>} />
                <Route path="/recipe/:id" element={<MainLayout><RecipeDetailPage /></MainLayout>} />

                <Route path="/addIngredient" element={<MainLayout><AddIngredientPage /></MainLayout>} />
                <Route path="/addRecipe" element={<MainLayout><AddRecipePage /></MainLayout>} />

                <Route path="/login" element={<MainLayout><LoginPage /> </MainLayout>} />
                <Route path="/forgot-password" element={<MainLayout><UnderDevelopmentPage /> </MainLayout> } />
                <Route path="/signup" element={<MainLayout><UnderDevelopmentPage /> </MainLayout>} />
            </Routes>
        </Router>
    );
}



export default App;
