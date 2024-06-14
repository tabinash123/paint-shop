// File: src/components/CategorySection.jsx

import React from 'react';
import styled from 'styled-components';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import demoCategories from '../../assets/demoCategories';

const SectionContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 15px;
  margin: 10px auto;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardContent = styled(CardContent)`
  background-color: #f5f5f5;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 5px;
`;

const StyledCardMedia = styled(CardMedia)`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 150px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 15px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategorySection = () => {
  return (
    <SectionContainer>
      <Typography style={{ marginTop: '20px', marginBottom: '30px' }} variant="h5" component="h1" gutterBottom>
        SHOP BY <strong>CATEGORY</strong>
      </Typography>

      <GridContainer>
        {demoCategories.map((category) => (
          <Link key={category.id} to="./product" style={{ textDecoration: 'none' }}>
            <StyledCard>
              <StyledCardMedia component="img" image={category.imageUrl} alt={category.title} />
              <StyledCardContent>
                <Typography variant="body2" component="p">
                  {category.title}
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Link>
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default CategorySection;
