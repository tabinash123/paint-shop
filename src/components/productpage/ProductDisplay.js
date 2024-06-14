import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

import products from '../../assets/products'

// Global styles with the new color scheme and typography
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #800000;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    color: #2F4F4F;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Sidebar = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 20px;
  background: #fff;
  margin-right: 20px;
  margin-top: -130px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const SubcategoryList = styled(List)`
  margin-left: 20px;
`;

const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  width: 230px;
  height: 260px;
  text-align: center;
  background: #fff;


 
`;

const ProductImage = styled.img`
  width: 230px;
  height: 200px;
 
`;

const ProductName = styled.p`
  margin: 10px 0 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const ProductPage = () => {
  const initialSubcategory = products[0]?.subcategories[0]?.subcategory || '';
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const filteredProducts = () => {
    if (!selectedSubcategory) return [];
    for (let category of products) {
      for (let subcategory of category.subcategories) {
        if (subcategory.subcategory === selectedSubcategory) {
          return subcategory.products;
        }
      }
    }
    return [];
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Paint Products</h1>
          <p>Discover our range of luxurious paints and finishes</p>
        </Header>
        <Content>
          <Sidebar>
            <Typography  style={{fontSize:"28px",color:"black",fontWeight:"600"}} >Category</Typography>
            <RadioGroup value={selectedSubcategory} onChange={handleSubcategoryChange}>
              {products.map((category, index) => (
                <div key={index}>
                  <ListItem>
                    <ListItemText primary={category.category} style={{ color: '#800000' }} />
                  </ListItem>
                  <SubcategoryList component="div" disablePadding>
                    {category.subcategories.map((subcategory, subIndex) => (
                      <FormControlLabel
                        key={subIndex}
                        value={subcategory.subcategory}
                        control={<Radio />}
                        label={subcategory.subcategory}
                        style={{ marginLeft: '20px' }}
                      />
                    ))}
                  </SubcategoryList>
                </div>
              ))}
            </RadioGroup>
          </Sidebar>
          <Divider orientation="vertical" flexItem />
          <MainContent>
            {error && (
              <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
                {error}
              </div>
            )}
            {loading ? (
              <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
                <FaSpinner className="fa-spin" size={40} />
              </div>
            ) : (
              filteredProducts().map((product, index) => (
                <ProductCard key={index}>
                  <ProductImage src={product.imageUrl} alt={product.name} />
                  <ProductName>{product.name}</ProductName>
                </ProductCard>
              ))
            )}
          </MainContent>
        </Content>
      </Container>
    </>
  );
};

export default ProductPage;
