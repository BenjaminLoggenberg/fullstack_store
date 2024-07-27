import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const teamMembers = [
    {
        name: 'Benjamin Loggenberg',
        role: 'CEO',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Benjamin Loggenberg',
    },
    {
        name: 'Chére Loggenberg',
        role: 'CTO',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Chére Loggenberg',
    },
   
];

const About = () => {
    return (
        <Container maxWidth="lg" style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>Meet Our Team</Typography>
            <Grid container spacing={4}>
                {teamMembers.map((member) => (
                    <Grid item xs={12} sm={6} md={4} key={member.name}>
                        <Card>
                            <CardMedia
                                component="picture"
                                sx={{
                                    height: 300,
                                    objectFit: 'cover',
                                    backgroundColor: '#f0f0f0',
                                }}
                            >
                                <source
                                    srcSet={member.imageUrl}
                                    media="(min-width: 600px)"
                                />
                                <img
                                    src={member.imageUrl}
                                    alt={member.alt}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography variant="h6">{member.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {member.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
  <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
                About Buy Diamonds
            </Typography>
            <Typography variant="body1">
                At Buy Diamonds, we specialize in offering a wide range of exquisite natural and lab-grown diamonds, catering to the finest tastes. Our mission is to provide unique, custom fine jewelry that reflects individuality and elegance. With over 100,000 diamonds in our collection, we are dedicated to delivering unparalleled quality and personalized service. Discover the perfect piece that celebrates your style and moments with us.
            </Typography>

            </Grid>
        </Container>
    );
};

export default About;
