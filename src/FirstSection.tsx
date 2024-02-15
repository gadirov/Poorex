import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Image, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const images = [
  { imgFirst: "../assests/FirstSection/slider-bg-1.png" },
  { imgFirst: "../assests/FirstSection/slider-bg-2.png" },
  { imgFirst: "../assests/FirstSection/slider-bg-3.png" }
]

const FirstSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <CCarousel controls>
      {images.map((item, index) => {
        const { imgFirst } = item;
        return (
          <CCarouselItem style={{ position: "relative" }} key={index}>
            <CImage
              className="d-block w-100"
              src={imgFirst}
              alt={`slide ${index + 1}`}
              data-aos="fade-right"
            />
            <Text position="absolute" top="200px" left="400px" fontSize="16px" color="#ffd" bg="rgba(255, 255, 255, 0.059)" p="12px 40px" data-aos="fade-up">We are here to support you every step</Text>
            <Text position="absolute" top="230px" left="400px" fontSize="90px" fontWeight="750" color="#ffd" letterSpacing="1px" data-aos="fade-down">Giving Help</Text>
            <Text position="absolute" top="330px" left="400px" fontSize="90px" fontWeight="750" color="#ffd" letterSpacing="1px" data-aos="fade-down">To Those Who</Text>
            <Text position="absolute" top="430px" left="400px" fontSize="90px" fontWeight="750" color="#ffd" letterSpacing="1px" data-aos="fade-down">Need it</Text>
            <Image src="../assests/FirstSection/slider-shape-1.png" top="520px" left="730px" position="absolute" data-aos="fade-down"/>
            <Button zIndex="99999" bg="#fe7f4c" p="27px 45px" color="#fff" position="absolute" top="580px" left="405px" borderRadius="none" cursor="pointer" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }} data-aos="fade-down">Discover More</Button>
            <Image src="../assests/FirstSection/slider-shape-3.png" bottom="100px" right="0" position="absolute" zIndex="1" data-aos="fade-down"/>
            <Image src="../assests/FirstSection/slider-shape-4.png" bottom="-100px" right="0" position="absolute" data-aos="fade-down"/>
          </CCarouselItem>
        )
      })}
    </CCarousel>
  );
};

export default FirstSection;
