import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import '../about.css';


const teamMembers = [
    {
<<<<<<< Updated upstream
        name: 'Alice Johnson',
        role: 'CEO',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Alice Johnson',
    },
    {
        name: 'Bob Smith',
        role: 'CTO',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Bob Smith',
    },
    {
        name: 'Carol Lee',
        role: 'Designer',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Carol Lee',
=======
        name: 'John Wonders',
        role: 'CEO',
        imageUrl: '/images/images.jpeg',
        alt: 'John Wonders',
    },
    {
        name: 'Kim Wonders',
        role: 'CTO',
        imageUrl: '/images/Profile-Pic-square.png',
        alt: 'Kim Wonders',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
  <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
              
            </Typography>
            <Typography variant="body1" style={{ padding: '2rem' }}>
                At Online Fanatics, we specialize in offering a wide range of exquisite items, catering to the finest tastes. Our mission is to provide unique, items that reflect individuality and elegance.
            </Typography>

>>>>>>> Stashed changes
            </Grid>
        </Container>
    );
};

export default About;
