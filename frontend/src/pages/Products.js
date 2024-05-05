import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
];

const Products = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <>
        <h1>Products Page</h1>
        <Grid container spacing={3} style={{ padding: 20 }}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            height="140"
                            image={product.imageUrl}
                            />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ${product.price.toFixed(2)}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleAddToCart(product)}
                                style={{ marginTop: 10 }}
                                >
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
    );
};

export default Products;
