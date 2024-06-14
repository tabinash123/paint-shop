import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaPalette, FaHeadset, FaDollarSign, FaTruck, FaLeaf } from 'react-icons/fa';

const Section = styled.section`
  padding: 40px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
  text-align: center;
  max-width: 600px;
`;

const KeyPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;

const KeyPoint = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5em;
  color: #007bff;
  margin-bottom: 15px;
`;

const Header = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <Title>Why Choose Us</Title>
      <Subtitle>Discover the reasons why we are the best choice for all your painting needs.</Subtitle>
      <KeyPoints>
        <KeyPoint>
          <IconWrapper><FaShieldAlt /></IconWrapper>
          <Header>High-Quality Products</Header>
          <Description>We offer premium quality paints that ensure durability and vibrant colors for every project.</Description>
        </KeyPoint>
        <KeyPoint>
          <IconWrapper><FaPalette /></IconWrapper>
          <Header>Wide Variety</Header>
          <Description>Our extensive selection includes various colors, finishes, and types to meet all your painting needs.</Description>
        </KeyPoint>
        <KeyPoint>
          <IconWrapper><FaHeadset /></IconWrapper>
          <Header>Exceptional Customer Service</Header>
          <Description>Our dedicated team is here to provide expert advice and support to help you find the perfect paint.</Description>
        </KeyPoint>
        <KeyPoint>
          <IconWrapper><FaDollarSign /></IconWrapper>
          <Header>Competitive Pricing</Header>
          <Description>Get the best value for your money with our affordable pricing and special discounts.</Description>
        </KeyPoint>
        <KeyPoint>
          <IconWrapper><FaTruck /></IconWrapper>
          <Header>Fast and Reliable Shipping</Header>
          <Description>Enjoy quick and dependable delivery right to your door.</Description>
        </KeyPoint>
        <KeyPoint>
          <IconWrapper><FaLeaf /></IconWrapper>
          <Header>Eco-Friendly Options</Header>
          <Description>We prioritize environmentally friendly products that are safe for you and the planet.</Description>
        </KeyPoint>
      </KeyPoints>
    </Section>
  );
};

export default WhyChooseUs;
