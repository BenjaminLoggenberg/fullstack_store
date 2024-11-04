import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const iframeStyles = {
    width: '100%',
    height: '400px',
    border: '0',
};

const ContactForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
    maxWidth: '600px',
}));

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('http://localhost:8888/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            setSuccess('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="lg" style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.210384709067!2d18.816901196789555!3d-34.08975049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5c17c41b1c9%3A0x219a8c9cc1ddc1c0!2sDe%20Velde%20Lifestyle%20Estate!5e0!3m2!1sen!2sza!4v1721420303488!5m2!1sen!2sza"
                        style={iframeStyles}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                        {error && <Typography color="error">{error}</Typography>}
                        {success && <Typography color="success">{success}</Typography>}
                        <Box mt={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Box>
                    </ContactForm>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
