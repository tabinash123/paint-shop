import React from 'react';
import { Container, Typography, Grid, useMediaQuery } from '@mui/material';
import { Timeline as AntTimeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';

// Define a modern color palette and typography
const colors = {
  primary: '#0D3B66',
  secondary: '#FAA916',
  background: '#F0F4F8',
  text: '#000000',
};

const fonts = {
  primary: `'Poppins', sans-serif`,
};

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled-components for various sections and elements
const HistorySection = styled.section`
  padding: 64px 0;
  background-color: ${colors.background};
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
  font-family: ${fonts.primary};
`;

const ContainerWrapper = styled(Container)`
  & > .MuiGrid-container {
    display: flex;
    align-items: center;
  }
`;

const TimelineItem = styled(AntTimeline.Item)`
  .ant-timeline-item-content {
    font-family: ${fonts.primary};
    font-size: 1rem;
    text-align: left;
    padding: 16px;
    border-radius: 8px;
    background-color: ${colors.background};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.primary};
      color: #fff;
    }
  }

  .ant-timeline-item-tail {
    background-color: ${colors.primary};
  }

  .ant-timeline-item-head {
    color: ${colors.secondary};
    border-color: ${colors.secondary};
  }
`;

const ImageWrapper = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const History = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <HistorySection>
      <ContainerWrapper>
        <Typography variant="h2" gutterBottom style={{ color: colors.primary }}>
          Our History
        </Typography>
        <Grid container spacing={4} direction={isSmallScreen ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={6}>
            <AntTimeline mode={isSmallScreen ? 'left' : 'alternate'}>
              <TimelineItem
                label="2004 - Founding OurPaintShop"
                dot={<ClockCircleOutlined />}
              >
                <Typography variant="body1" paragraph style={{ color: colors.text }}>
                  OurPaintShop was founded by John Smith and Jane Doe, with a vision to revolutionize the way people discover and select paint colors for their homes.
                </Typography>
              </TimelineItem>
              <TimelineItem
                label="2006 - Launching Innovative Color Selection Platform"
                dot={<ClockCircleOutlined />}
              >
                <Typography variant="body1" paragraph style={{ color: colors.text }}>
                  OurPaintShop launched its innovative online platform, allowing users to explore a wide range of paint colors, visualize them in their spaces, and make confident decisions.
                </Typography>
              </TimelineItem>
              <TimelineItem
                label="2010 - Expanding Product Range"
                dot={<ClockCircleOutlined />}
              >
                <Typography variant="body1" paragraph style={{ color: colors.text }}>
                  OurPaintShop expanded its product range to include a variety of finishes and specialty paints, catering to the diverse needs and preferences of customers.
                </Typography>
              </TimelineItem>
              <TimelineItem
                label="2015 - Introduction of Virtual Reality Experience"
                dot={<ClockCircleOutlined />}
              >
                <Typography variant="body1" paragraph style={{ color: colors.text }}>
                  OurPaintShop introduced a cutting-edge virtual reality experience, allowing users to virtually paint their walls and preview different color combinations in real-time.
                </Typography>
              </TimelineItem>
            </AntTimeline>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageWrapper src="path/to/your/image.jpg" alt="Our History" />
          </Grid>
        </Grid>
      </ContainerWrapper>
    </HistorySection>
  );
};

export default History;
