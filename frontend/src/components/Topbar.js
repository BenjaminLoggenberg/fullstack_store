import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'; // Adjust if you're using a different routing library
import { useAuth } from './AuthContext'; // Adjust the path as needed


const TopBar = () => {
    const { logout } = useAuth(); // 
    const handleLogout = () => { logout(); 
        window.location.href = '/'; // Redirect to home page or login page 
        };
    return (

        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar>
                {/* App Logo */}
                <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
                    <img src="/path-to-logo.png" alt="App Logo" style={{ height: 40 }} />
                </IconButton>

                {/* App Name (Centered) */}
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h6">
                        App Name
                    </Typography>
                </Box>

                {/* Shopping Cart Icon */}
                <IconButton color="inherit" component={Link} to="/cart">
                    <ShoppingCartIcon />
                </IconButton>

                {/* Logout Button */}
                <Button color="inherit" startIcon={<LogoutIcon />} onClick={() => handleLogout()}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;

