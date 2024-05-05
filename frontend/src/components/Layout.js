// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import { useAuth } from './AuthContext';
import BackToTop from './BackToTop';

const Layout = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
        <h1>Eccomerce Store</h1>
        <Box sx={{ display: 'flex' }}>
            {isAuthenticated && <Sidebar />}
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
        <BackToTop /> 
        </>
    );
};

export default Layout;
