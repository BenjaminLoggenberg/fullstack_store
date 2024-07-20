import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from API on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8888/products.php'); // Adjust the URL as needed
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array means this effect runs once on mount

    const handleAddToCart = (product) => {
        // Retrieve existing cart from localStorage or initialize an empty array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Add the new product to the cart
        cart.push(product);
        // Store the updated cart back in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    
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

