import React from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerContainer = styled.div`
  width: 80%;
  height: auto; /* Adjust height as needed */
  display: flex;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
`;


const Banner = ({ imageSrc, altText,  }) => {
  return (
    <BannerContainer>
      <BannerImage src={imageSrc} alt={altText} />
    </BannerContainer>
  );
};



export default Banner;
