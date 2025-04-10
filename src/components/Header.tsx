import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Box, Link} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header: React.FC = () => {
    return (
        <AppBar position="sticky" sx={{ paddingX: 2 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Left Section: Logo and Text */}
                <Box display="flex" alignItems="center" gap={2}>
                    <Link href="/">
                        <img src="/logo.png" /*alt="Logo"*/ style={{height: '40px'}}/>
                        <Typography variant="h6" component="div">
                            myApp
                        </Typography>
                    </Link>
                    <Link href="/" variant="inherit" underline="hover" title={"myApp" +
                        "" +
                        "" +
                        "" +
                        ""}>
                        <Typography variant="h6" component="div">
                            myApp
                        </Typography>
                    </Link>
                </Box>



                {/* Right Section: User Icon */}
                <IconButton edge="end" color="inherit">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
