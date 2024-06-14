import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import logo from '../assets/logo.PNG';


const StyledAppBar = styled(AppBar)`
  background: linear-gradient(to right, #2c3e50, #4ca1af); /* Luxurious gradient */
  box-shadow: none;
  padding: 10px 20px;
  border-bottom: 1px solid #34495e;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 150px;
  margin-right: 10px;
`;

const Title = styled(Typography)`
  color: #ff0049;
  font-family: 'Pacifico', cursive; /* Custom font */
  font-size: 28px;
`;

const NavLinks = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(RouterNavLink)`
  margin-left: 30px;
  text-decoration: none;
  color: #ecf0f1;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #ff5252;
  }

  &.active {
    color: #ff5252;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #ff5252;
    transition: width 0.3s;
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }
`;

const MobileMenuIcon = styled(IconButton)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: white;
  }
`;

const SearchIconButton = styled(IconButton)`
  color: white;
  margin-left: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2); /* Interactivity enhancement */
  }
`;

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'PAINTS & PRODUCTS', to: '/product' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <LogoContainer to="/">
          <Logo style={{width:80}} src={logo} alt="Logo" />
          <Title variant="h7">SnS Paint</Title>
        </LogoContainer>
        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.to} exact activeClassName="active">
              {item.label}
            </NavLink>
          ))}
          <SearchIconButton>
            <SearchIcon />
          </SearchIconButton>
        </NavLinks>
        <MobileMenuIcon edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </MobileMenuIcon>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {navItems.map((item, index) => (
                <ListItem button key={index} component={RouterNavLink} to={item.to} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem >
                <ListItemText primary="Search" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
