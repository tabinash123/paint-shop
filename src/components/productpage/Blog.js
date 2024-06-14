import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Sample blog data
const blogs = [
  {
    title: 'Choosing the Right Paint for Your Home',
    imageUrl: 'https://source.unsplash.com/400x300/?paint,home',
    description: 'Learn how to select the best paint for different areas of your home based on durability, finish, and color.',
  },
  {
    title: 'Step-by-Step Guide to Painting Your Living Room',
    imageUrl: 'https://source.unsplash.com/400x300/?painting,livingroom',
    description: 'Follow this comprehensive guide to paint your living room like a pro.',
  },
  {
    title: 'Understanding Paint Finishes and Their Uses',
    imageUrl: 'https://source.unsplash.com/400x300/?paint,finishes',
    description: 'Get to know different types of paint finishes and where to use them in your home.',
  },
  // Add more blog posts here...
];

const BlogSection = styled.section`
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const BlogHeader = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #800000;
  margin-bottom: 20px;
`;

const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BlogCard = styled(Link)`
  width: 300px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 10px;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const Blog = () => {
  return (
    <BlogSection>
      <BlogHeader>Painting Tips & Guides</BlogHeader>
      <BlogList>
        {blogs.map((blog, index) => (
          <BlogCard to="/journal" key={index}>
            <BlogImage src={blog.imageUrl} alt={blog.title} />
            <BlogContent>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDescription>{blog.description}</BlogDescription>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogList>
    </BlogSection>
  );
};

export default Blog;
