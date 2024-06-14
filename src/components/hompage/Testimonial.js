import React from 'react';
import styled from 'styled-components';
import { Avatar, Card, Rate } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const TestimonialSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f7f3;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  color: #800000;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #2f4f4f;
  margin-bottom: 40px;
`;

const TestimonialsContainer = styled.div`

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const TestimonialCard = styled(Card)`
  width: 300px;
  border-radius: 10px;
  background: linear-gradient(to right, #2c3e50, #4ca1af); /* Luxurious gradient */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const MetaInfo = styled.div`
  margin-left: 10px;
  text-align: left;
`;

const Name = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

const Position = styled.p`
  margin: 0;
  color: white;
  font-size: 0.8rem;
`;

const testimonials = [
  {
    name: 'John Doe',
    position: 'Homeowner',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review: 'I recently bought paint from this shop and I am extremely satisfied with the quality and service. My house looks beautiful!',
  },
  {
    name: 'Jane Smith',
    position: 'Interior Designer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    review: 'The variety of colors available is amazing! The paint quality is top-notch and the customer service is very helpful.',
  },
  {
    name: 'Mike Johnson',
    position: 'Contractor',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    rating: 4.5,
    review: 'Great prices and excellent quality. The paint was easy to apply and the finish is fantastic. Highly recommend!',
  },
];

const Testimonial = () => (
  <TestimonialSection>
    <Title>Testimonials</Title>
    <Subtitle>Here's what our customers have to say</Subtitle>
    <TestimonialsContainer>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index}>
          <TestimonialMeta>
            <Avatar src={testimonial.avatar} size={50} />
            <MetaInfo>
              <Name>{testimonial.name}</Name>
              <Position>{testimonial.position}</Position>
            </MetaInfo>
          </TestimonialMeta>
          <Rate  disabled defaultValue={testimonial.rating} style={{ marginBottom: 10,color:"red" }} />
          <p style={{ fontSize: "0.9rem", color: "navajowhite" }}>
            <SmileOutlined style={{ marginRight: 5 }} />
            {testimonial.review}
          </p>
        </TestimonialCard>
      ))}
    </TestimonialsContainer>
  </TestimonialSection>
);

export default Testimonial;
