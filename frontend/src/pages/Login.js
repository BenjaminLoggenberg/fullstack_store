// Login.js
import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

//logic and rendering of the login page

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8888/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (response.ok) {
                // Assuming the response contains a token or similar
                // Save token to local storage or context
                const data = await response.json(); // Assuming the response contains the user_id 
                login(data.user_id);
                navigate('/products');
            }
          else {
            setResponseMessage('Login failed.');
        }
    } catch (error) {
        console.error('Error:', error);
        setResponseMessage('An error occurred.');
    };
}

    return (
        <Container maxWidth="xs">
            <Typography variant="h5">Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
                <Button
                component="a"
                href="/register"
                variant="outlined" 
                color="primary"
                style={{textDecoration: 'none', marginLeft: 16}}  >  
                    Register instead
                </Button>
            </form>
            <p>{responseMessage}</p>
        </Container>
    );
}


export default Login
