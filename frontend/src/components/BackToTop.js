import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

const ScrollToTopButton = styled('button')(({ theme }) => ({
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    transition: 'opacity 0.3s ease',
    opacity: 0,
    '&:hover': {
        backgroundColor: '#0056b3',
    },
    zIndex: 1000,
}));

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollTop = () => {
        if (!isVisible && window.pageYOffset > 300) {
            setIsVisible(true);
        } else if (isVisible && window.pageYOffset <= 300) {
            setIsVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [isVisible]);

    return (
        <ScrollToTopButton
            style={{ opacity: isVisible ? 1 : 0 }}
            onClick={scrollTop}
        >
            &uarr;
        </ScrollToTopButton>
    );
};

export default BackToTop;
