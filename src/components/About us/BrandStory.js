const StorySection = styled.div`
  padding: 50px;
  background-color: #fff;
`;

const StoryTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const StoryContent = styled.p`
  font-size: 16px;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
`;

const BrandStory = () => (
  <StorySection>
    <StoryTitle>Our Story</StoryTitle>
    <StoryContent>
      Our journey began in 2010 with a simple idea to revolutionize the paint industry. Through relentless innovation and dedication to quality, we have grown into a leading brand known for our exceptional products and commitment to customer satisfaction.
    </StoryContent>
  </StorySection>
);

export default BrandStory;
