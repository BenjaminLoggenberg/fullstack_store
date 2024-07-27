import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Badge } from '@mui/material';
import { ShoppingCart, Logout } from '@mui/icons-material';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const Topbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const [cartCount, setCartCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(cart.length);
        setTotalAmount(cart.reduce((total, item) => total + item.price, 0));
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartCount(cart.length);
            setTotalAmount(cart.reduce((total, item) => total + item.price, 0));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <AppBar position="static">
            <Toolbar>
                <div/>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                    App Name
                </Typography>
                {isAuthenticated && (
                    <>
                        <IconButton
                            component={Link}
                            to="/cart"
                            color="inherit"
                        >
                            <Badge badgeContent={cartCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        <Typography variant="body1" style={{ marginRight: 20 }}>
                            ${totalAmount.toFixed(2)}
                        </Typography>
                        <Button color="inherit" onClick={logout}>
                            <Logout />
                            Logout
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;


