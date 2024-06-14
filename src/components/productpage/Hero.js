import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/hero2.PNG';

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // Add other styling properties as needed
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 100%; // Ensure the image does not exceed its container
  height: auto; // Maintain the aspect ratio
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage src={hero} alt="Hero" />
    </HeroSection>
  );
};

export default Hero;
