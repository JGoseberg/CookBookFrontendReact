// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate(); // To redirect after successful login

    const handleLogin = () => {
        if (!email || !password) {
            setError('Both fields are required');
            return;
        }

        // Simulate login logic (replace with real authentication logic)
        console.log('Logging in with', email, password);
        setError(null);

        // Simulate successful login (redirect to dashboard)
        navigate('/dashboard');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                bgcolor: 'background.paper',
            }}
            >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                width: '50ch',
                bgcolor: 'background.paper',
                padding: 2,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>

            {error && (
                <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
                    {error}
                </Typography>
            )}

            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleLogin} fullWidth sx={{ marginBottom: 2 }}>
                Login
            </Button>

            <Box display="flex" justifyContent="space-between" width="100%">
                <Link href="/forgot-password" variant="body2">
                    Forgot Password?
                </Link>
                <Link href="/signup" variant="body2">
                    Don't have an account? Sign Up
                </Link>
            </Box>
        </Box>
        </Box>
    );
};

export default LoginPage;
