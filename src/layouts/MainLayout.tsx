// src/components/Layout.tsx
import React from 'react';
import { Box } from '@mui/material';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box sx={{ flex: 1 }}>{children}</Box> {/* Main content goes here */}
            <Footer />
        </Box>
    );
};

export default Layout;
