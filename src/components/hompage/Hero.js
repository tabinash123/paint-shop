import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hero1 from '../../assets/hompage hero crasoul/hero1-1.PNG';
import hero2 from '../../assets/hompage hero crasoul/hero1-2.PNG';
import hero3 from '../../assets/hompage hero crasoul/hero1-3.PNG';
import hero4 from '../../assets/hompage hero crasoul/hero1-4.PNG';

const HeroSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  margin-top:-5px;

  .carousel .control-dots {
    position: absolute;
    bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .carousel .control-dots .dot {
    background: #f5f5f5;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    opacity: 0.6;
    transition: opacity 0.25s ease-in-out, background 0.25s ease-in-out, transform 0.25s ease-in-out;
  }

  .carousel .control-dots .dot.selected {
  width: 15px;
    height: 6px;
    border-radius: 5px;

    opacity: 1;
    background: #000;
    transform: scale(1.2);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const Hero = () => {
  const images = [
    { src: hero1, alt: "Hero 1" },
    { src: hero2, alt: "Hero 2" },
    { src: hero3, alt: "Hero 3" },
    { src: hero4, alt: "Hero 4" },
  ];

  return (
    <HeroSection>
      <Carousel autoPlay infiniteLoop>
        {images.map((image, index) => (
          <div key={index}>
            <HeroImage src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </HeroSection>
  );
};

export default Hero;
