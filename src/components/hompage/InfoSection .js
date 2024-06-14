// src/components/ShopInfoBanner.js
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Banner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(4, 0),
}));

const InfoSection = styled(Box)(({ theme }) => ({
  textAlign: 'left',
}));

const ContactSection = styled(Box)(({ theme }) => ({
  textAlign: 'left',
}));

const ShopInfoBanner = () => {
  return (
    <Banner>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <InfoSection>
            <InfoIcon sx={{ fontSize: 50, mb: 2 }} />
            <Typography variant="h4" component="h2" gutterBottom>
              About Our Shop
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              Welcome to our paint shop! We offer a wide variety of house painting colors that
              will transform your home. Whether you are looking for vibrant colors or subtle shades,
              we have it all. Our experts are here to help you choose the perfect paint for your needs.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Shop Now
            </Button>
          </InfoSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactSection>
            <Typography variant="h5" component="h3" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" component="p" display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1 }} />
              WhatsApp: +1234567890
            </Typography>
            <Typography variant="body1" component="p" display="flex" alignItems="center" mt={2}>
              <LocationOnIcon sx={{ mr: 1 }} />
              Location: 123 Paint St, Colorville
            </Typography>
          </ContactSection>
        </Grid>
      </Grid>
    </Banner>
  );
};

export default ShopInfoBanner;
