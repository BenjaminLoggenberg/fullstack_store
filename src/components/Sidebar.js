// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: 250 }}>
            <List>
                <ListItem button component={Link} to="/products">
                    <ListItemText primary="Products" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/gallery">
                    <ListItemText primary="Gallery" />
                </ListItem>
                <ListItem button component={Link} to="/profile">
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
            <Divider />
            {/* You can add more items or sections here */}
        </div>
    );
};

export default Sidebar;
