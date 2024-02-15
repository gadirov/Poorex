import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import Footer from './Footer';
import FourthSection from './FourthSection';



function App() {
  return (
   <Box>
    <Header />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <Footer />
   </Box>
  );
}

export default App;
