import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                paddingY: 3,
                textAlign: 'center',
            }}
        >
            {/* First Row */}
            <Box display="flex" justifyContent="center" gap={4} mb={1}>
                <Link href="/about" color="inherit" underline="hover">
                    About
                </Link>
                <Link href="/terms" color="inherit" underline="hover">
                    Terms of Service
                </Link>
                <Typography variant="body2" component="span" color="inherit">
                    © {new Date().getFullYear()} myApp
                </Typography>
                <Link href="https://linkedin.com/in/jonas-goseberg" target="_blank" color="inherit" underline="hover">
                    LinkedIn
                </Link>
            </Box>

            {/* Second Row */}
            <Box display="flex" justifyContent="center" gap={4}>
                <Link href="/contact" color="inherit" underline="hover">
                    Contact
                </Link>
                <Link href="/privacy" color="inherit" underline="hover">
                    Privacy Policy
                </Link>

                <Link href="/faq" color="inherit" underline="hover">
                    FAQ
                </Link>
                <Link href="/accessibility" color="inherit" underline="hover">
                    Accessibility Statement
                </Link>
                <Link href="https://github.com/jgoseberg" target="_blank" color="inherit" underline="hover">
                    GitHub
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
