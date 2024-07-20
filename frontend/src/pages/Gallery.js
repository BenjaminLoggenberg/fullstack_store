import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const images = [
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
];

const StyledCard = styled(Card)(({ theme }) => ({
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    cursor: 'pointer',
}));

const Gallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        document.getElementById('lightbox').style.display = 'flex';
    };

    const closeLightbox = () => {
        document.getElementById('lightbox').style.display = 'none';
    };

    const gotoPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const gotoNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Container maxWidth="lg" style={{ padding: '2rem' }}>
            <Grid container spacing={4}>
                {images.map((url, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StyledCard onClick={() => openLightbox(index)}>
                            <CardMedia
                                component="img"
                                image={url}
                                alt={`Gallery image ${index + 1}`}
                                sx={{
                                    height: 300,
                                    objectFit: 'cover',
                                }}
                            />
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>

            <dialog id="lightbox" style={lightboxStyles}>
                <button style={closeButtonStyles} onClick={closeLightbox}>×</button>
                <button style={prevButtonStyles} onClick={gotoPrevious}>&#9664;</button>
                <img
                    src={currentImageIndex !== null ? images[currentImageIndex] : ''}
                    alt="Lightbox"
                    style={imageStyles}
                />
                <button style={nextButtonStyles} onClick={gotoNext}>&#9654;</button>
            </dialog>
        </Container>
    );
};

// Styles for the lightbox
const lightboxStyles = {
    display: 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
    flexDirection: 'column', // Ensure vertical stacking of elements
};

const imageStyles = {
    maxWidth: '80%',
    maxHeight: '80%',
    margin: 'auto',
    display: 'block',
    position: 'relative',
};

const closeButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 1001, // Ensure button is above other elements
};

const prevButtonStyles = {
    position: 'absolute',
    top: '50%',
    left: '20px',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
    zIndex: 1001,
};

const nextButtonStyles = {
    position: 'absolute',
    top: '50%',
    right: '20px',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
    zIndex: 1001,
};

export default Gallery;
