import React from 'react'
import Footer from '../Footer'
import CategorySection from './CategorySection'
import ProductHighlights from './ProductHighlights'
import FAQ from './FAQ'
import InfoSection from './InfoSection '
import Header from '../Header'
import Banner2 from './Banner2'
import Hero from './Hero'
import WhyChooseUsSection from './WhyToChooseUs'
import Testimonial from './Testimonial'
import ProductPage from '../productpage/ProductDisplay'
import Banner from '../Banner'
import banner2 from '../../assets/Banner2.jpg'
 

const Homepage = () => {
  return (
    <div style={{backgroundColor:"#fff"}} >
      <Hero  />
      <ProductHighlights />
      <CategorySection />
      <Banner imageSrc={banner2} altText={"banner-image"} />
      <Testimonial />
      <WhyChooseUsSection />
      <FAQ />
    </div>
  )
}

export default Homepage