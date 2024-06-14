// FAQ.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const { Panel } = Collapse;

const FAQSection = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #800000; /* Rich burgundy color */
  font-family: 'Playfair Display', serif;
`;

const StyledCollapse = styled(Collapse)`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  border: none;

  .ant-collapse-item {
    border-bottom: 1px solid #eee;
  }

  .ant-collapse-header {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    color: #333;
  }

  .ant-collapse-content {
    background-color: #f9f9f9;
  }

  .ant-collapse-content p {
    font-size: 0.9rem;
    color: #555;
  }

  .ant-collapse-arrow {
    color: #800000; /* Rich burgundy color */
  }
`;

const faqData = [
  {
    question: 'What types of paint do you offer?',
    answer: 'We offer a wide range of paints including interior wall paints, exterior wall paints, metal & wood finishes, and waterproofing solutions.'
  },
  {
    question: 'Can I get a custom color mixed?',
    answer: 'Yes, we offer custom color mixing services to ensure you get the perfect shade for your project.'
  },
  {
    question: 'Do you provide home delivery?',
    answer: 'Yes, we provide home delivery services for your convenience. Delivery charges may apply based on your location.'
  },
  {
    question: 'What is the return policy for paint products?',
    answer: 'You can return unopened paint products within 30 days of purchase. Please refer to our return policy page for more details.'
  },
  {
    question: 'How can I choose the right paint for my home?',
    answer: 'Our expert staff can help you choose the right paint based on your needs and preferences. You can also use our online resources and tools for guidance.'
  }
];

const FAQ = () => {
  const [activeKey, setActiveKey] = useState([]);

  const handleCollapseChange = (key) => {
    setActiveKey(key);
  };

  return (
    <FAQSection>
      <Title>Frequently Asked Questions</Title>
      <StyledCollapse
        accordion
        expandIconPosition="right"
        expandIcon={({ isActive }) => isActive ? <FaChevronUp /> : <FaChevronDown />}
        activeKey={activeKey}
        onChange={handleCollapseChange}
      >
        {faqData.map((item, index) => (
          <Panel header={item.question} key={index}>
            <p>{item.answer}</p>
          </Panel>
        ))}
      </StyledCollapse>
    </FAQSection>
  );
};

export default FAQ;
