// src/components/Footer.js

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
  background-color: #1a1a1a; /* Dark Gray */
  color: #e0e0e0; /* Light Gray */
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-top: 50px;
`;

const FooterLinks = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;

  a {
    color: #e0e0e0; /* Light Gray */
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
      color: #ff5722; /* Vibrant Orange */
    }
  }
`;

const SocialMedia = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </FooterLinks>
      <Typography variant="body2" align="center" gutterBottom>
        &copy; {new Date().getFullYear()} Paint Shop. All rights reserved.
      </Typography>
      <SocialMedia>
        <IconButton aria-label="facebook" sx={{ color: '#4267B2' }}>
          <Facebook />
        </IconButton>
        <IconButton aria-label="twitter" sx={{ color: '#1DA1F2' }}>
          <Twitter />
        </IconButton>
        <IconButton aria-label="instagram" sx={{ color: '#E1306C' }}>
          <Instagram />
        </IconButton>
        <IconButton aria-label="linkedin" sx={{ color: '#0077B5' }}>
          <LinkedIn />
        </IconButton>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
