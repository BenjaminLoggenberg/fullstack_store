// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import { useAuth } from './AuthContext';
import BackToTop from './BackToTop';
import TopBar from './Topbar';

const Layout = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
        <TopBar />
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
