import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on component mount
    useEffect(() => {
        const loadCart = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(cart);
        };

        loadCart();
    }, []);

    const handleRemoveFromCart = (productToRemove) => {
        // Retrieve existing cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Filter out the product to remove
        const updatedCart = cart.filter(product => product.id !== productToRemove.id);
        // Update localStorage with the new cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        // Update state
        setCartItems(updatedCart);
       
    };

    return (
        <>
            <h1>Cart Page</h1>
            <Grid container spacing={3} style={{ padding: 20 }}>
                {cartItems.map((product) => (
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
                                    color="secondary"
                                    onClick={() => handleRemoveFromCart(product)}
                                    style={{ marginTop: 10 }}
                                >
                                    Remove from Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Cart;


