// src/pages/DashboardPage.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardPage: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom>
                Welcome to the Dashboard!
            </Typography>
            <Typography variant="body1">
                You are logged in.
            </Typography>
        </Box>
    );
};

export default DashboardPage;
