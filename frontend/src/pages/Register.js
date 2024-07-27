
import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8888/register.php', {
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
                navigate('/');
            }
          else {
            setResponseMessage('Registration failed.');
        }
    } catch (error) {
        console.error('Error:', error);
        setResponseMessage('An error occurred.');
    };
}

    return (
        <Container maxWidth="xs">
            <Typography variant="h5">Create an account</Typography>
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
                    Register
                </Button>

                <Button
                component="a"
                href="/"
                variant="outlined" 
                color="primary"
                style={{textDecoration: 'none', marginLeft: 16}} >
                    Login instead
                </Button>
            </form>
            <p>{responseMessage}</p>
        </Container>
    );
}


export default Register
