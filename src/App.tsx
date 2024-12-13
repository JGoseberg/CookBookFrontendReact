import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><LoginPage /></MainLayout>} />
                <Route path="/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
            </Routes>
        </Router>
    );
}



export default App;
