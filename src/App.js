import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/hompage/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/About us/About';
import ProductPage from './components/productpage/ProductPage';
import GlobalStyles from './components/GlobalStyle';
import ContactUs from './components/contact-us/ContactUs';
import Blog from './components/Blog/Blog';
import ArticlePage from './components/Blog/ArticlePage';


const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticlePage />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
