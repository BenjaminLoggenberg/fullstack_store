import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';


const Profile = () => {

    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    // Fetch user data on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('user_id');
            if (!userId) {
                setMessage('User not logged in');
                return;
            }
            try {
                const response = await fetch(`http://localhost:8888/user_data.php?user_id=${userId}`)

                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username);
                } else {
                    setMessage('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setMessage('An error occurred. Please try again.');
            }
        };

        fetchUserData();
    }, []);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8888/reset_password.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'username':username, 'current_password':currentPassword, 'new_password':newPassword }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
            } else {
                setMessage('Failed to change password.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Profile
            </Typography>
            {username ? (
                <>
                    <Typography variant="h6" gutterBottom>
                        Username: {username}
                    </Typography>
                    <Box component="form" onSubmit={handleChangePassword} sx={{ mt: 3 }}>
                        <TextField
                            label="Current Password"
                            type="password"
                            fullWidth
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="New Password"
                            type="password"
                            fullWidth
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                            Change Password
                        </Button>
                    </Box>
                    {message && (
                        <Typography variant="body1" color="error" sx={{ mt: 2 }}>
                            {message}
                        </Typography>
                    )}
                </>
            ) : (
                <Typography variant="body1" color="error" sx={{ mt: 2 }}>
                    {message || 'Loading...'}
                </Typography>
            )}
        </Container>
    );
};

export default Profile;


