import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const teamMembers = [
    {
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
            </Grid>
        </Container>
    );
};

export default About;
