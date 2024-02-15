import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, HStack, Image, Text } from '@chakra-ui/react';

export default function SecondSection() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic"
        });
      }, []);

  return (
    <HStack bg="#edefef" h="472px" justifyContent="center" alignItems="center" gap="50px" w="100%">
        <Box w="405px" h="230px" bg="#fff" p="40px" data-aos="fade-up"  >
            <HStack justifyContent="space-between">
                <Text color="1e3737" fontSize="24px" fontWeight="600" lineHeight="1.4" w="200px">Medical & Treatment</Text>
                <HStack  bg="#1e3737" w="90px" h="90px" borderRadius="50%" justifyContent="center" alignItems="center" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }}><Image  src='../assests/SecondSection/stethoscope.png' w="50" h="50"/></HStack>
            </HStack>
            <Text color="#6e7a7a" w="230px" lineHeight="30px">Charity is the act of extending love and kindness others</Text>
        </Box>
        <Box w="405px" h="230px" bg="#fff" p="40px" data-aos="fade-up"  >
            <HStack justifyContent="space-between">
                <Text color="1e3737" fontSize="24px" fontWeight="600" lineHeight="1.4" w="200px">Education & Healthy Food</Text>
                <HStack  bg="#1e3737" w="90px" h="90px" borderRadius="50%" justifyContent="center" alignItems="center" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }}><Image  src='../assests/SecondSection/nutrition.png' w="50" h="50"/></HStack>
            </HStack>
            <Text color="#6e7a7a" w="230px" lineHeight="30px">Charity is the act of extending love and kindness others</Text>
        </Box>
        <Box w="405px" h="230px" bg="#fff" p="40px" data-aos="fade-up">
            <HStack justifyContent="space-between">
                <Text color="1e3737" fontSize="24px" fontWeight="600" lineHeight="1.4" w="200px">Bring People Together</Text>
                <HStack  bg="#1e3737" w="90px" h="90px" borderRadius="50%" justifyContent="center" alignItems="center" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }}><Image  src='../assests/SecondSection/hand-shake.png' w="50" h="50"/></HStack>
            </HStack>
            <Text color="#6e7a7a" w="230px" lineHeight="30px">Charity is the act of extending love and kindness others</Text>
        </Box>
    </HStack>
  )
}
