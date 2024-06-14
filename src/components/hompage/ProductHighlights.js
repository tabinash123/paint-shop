import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, CardMedia, Button, IconButton, Popover } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled from 'styled-components';

const ProductContainer = styled(Box)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 600px) and (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const ProductItem = styled(Card)`
    box-shadow: none;
    
`;

const StyledButton = styled(Button)`
    font-size: 0.8rem;
    padding: 4px 8px;
`;

const StyledTypography = styled(Typography)`
    font-size: 0.9rem;
    margin-top: 2px;
`;

const dummyProducts = [
    {
        id: 1,
        name: 'APCOLITE PREMIUM GLOSS ENAMEL',
        image: 'https://images.unsplash.com/photo-1557683304-673a23048d34',
    },
    {
        id: 2,
        name: 'Apcolite Premium Emulsion',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    },
    {
        id: 3,
        name: 'ROYALE MATT LUXURY EMULSION',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    },
    {
        id: 4,
        name: 'Tractor Emulsion',
        image: 'https://images.unsplash.com/photo-1529688530640-2d95c7f19dfb',
    },
    {
        id: 5,
        name: 'Another Product',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 6,
        name: 'Yet Another Product',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 7,
        name: 'More Products',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 8,
        name: 'Last Product',
        image: 'https://via.placeholder.com/150',
    },
];

const ProductHighlights = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box bgcolor={"#f5f5f5"}>
            <Typography mt={2} mb={5} variant="h4" component="h2" gutterBottom align="center">
                Best Seller Products
            </Typography>
            <ProductContainer>
                {dummyProducts.map(product => (
                    <ProductItem key={product.id} onClick={handleClick}  style={{backgroundColor:"#f5f5f5",width:"250px",border:'1px solid #ddd',boxShadow:"none"}}>
                        <CardMedia
                            component="img"
                            height="150"
                            image={product.image}
                            alt={product.name}
                           
                        />
                        <CardContent>
                            <StyledTypography gutterBottom variant="body2" component="div">
                                {product.name}
                            </StyledTypography>
                            <StyledTypography variant="body2" color="text.secondary">
                                {product.price}
                            </StyledTypography>
                            <Box mt={2} display="flex" justifyContent="space-between">
                                <StyledButton variant="outlined" startIcon={<WhatsAppIcon />} aria-label={`Contact ${product.name}`}>
                                    Contact
                                </StyledButton>
                                <IconButton aria-label={`More info about ${product.name}`}>
                                </IconButton>
                            </Box>
                        </CardContent>
                    </ProductItem>
                ))}
            </ProductContainer>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>CAT</Typography>
            </Popover>
        </Box>
    );
};

export default ProductHighlights;
