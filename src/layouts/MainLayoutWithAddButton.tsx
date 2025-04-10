import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Handle opening and closing of dropdown menu
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/* Button directly above the content */}
            <Box sx={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                zIndex: 1300, // Ensure the button stays above other content
                display: 'flex', // Ensure the button is being displayed
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <IconButton onClick={handleClick} color="primary">
                    <AddIcon />
                    <MoreVertIcon />
                </IconButton>

                {/* Dropdown Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Option 1</MenuItem>
                    <MenuItem onClick={handleClose}>Option 2</MenuItem>
                    <MenuItem onClick={handleClose}>Option 3</MenuItem>
                </Menu>
            </Box>

            {/* Main content */}
            <Box sx={{ flex: 1, marginTop: '50px' }}> {/* Adjust margin to avoid content overlap */}
                {children}
            </Box>

            <Footer />
        </Box>
    );
};

export default Layout;
