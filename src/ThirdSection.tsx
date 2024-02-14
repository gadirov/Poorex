import { Box, Button, Divider, HStack, Image, Progress, Text, VStack } from '@chakra-ui/react';
import { CheckIcon} from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const ThirdSection = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic"
        });

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
              const newProgress = prevProgress + 1;
              if (newProgress === 82) {
                clearInterval(interval);
              }
              return newProgress;
            });
          }, 10);
          return () => clearInterval(interval);
      }, []);

  return (
    <HStack m="0 300px" p="150px 0" gap="100px" data-aos="fade-up">
        <VStack w="55%">
            <HStack alignItems="center" w="100%">
                <Text color="#fe7f4c" fontSize="18px" fontWeight="700" m="0">ABOUT OUR POOREX</Text>
                <HStack gap="0">
                <Divider w="20px"  borderColor="#07847f"  borderWidth="1.8px" borderRadius="10px"/>
                <Divider w="10px" borderColor="#fe7f4c" borderWidth="1.8px" borderRadius="10px"/>
                </HStack>        
            </HStack>
            <Text w="100%" color="#1e3737" fontSize="50px" fontWeight="700" lineHeight="60px">Contribute for the Poor Differently Abled</Text>
            <Text w="100%" color="#6e7a7a">Charity is the act of extending love and kindness to others unconditional which is a conscious act but the decision is made by the heart, without expecting a reward. When Charity is carried out selflessly</Text>
           <HStack w="100%" gap="50px">
                <HStack w="270px" alignItems="flex-start" gap="10px">
                    <CheckIcon color="#fe7f4c"   w="6" h="6"/> 
                    <VStack gap="10px">
                        <Text m="0" fontSize="18px" fontWeight="700" color="#1e3737" w="100%">Quick Fundraising</Text>
                        <Text color="#6e7a7a">Charity Navigator's Giving you support multiple</Text>
                    </VStack>
                </HStack>
                <HStack w="270px" alignItems="flex-start" gap="10px">
                    <CheckIcon color="#fe7f4c"  w="6" h="6"/> 
                    <VStack gap="10px">
                        <Text m="0" fontSize="18px" fontWeight="700" color="#1e3737" w="100%">Join Our Team</Text>
                        <Text color="#6e7a7a">Charity Navigator's Giving you support multiple</Text>
                    </VStack>
                </HStack>


           </HStack>
           <Box w="100%" >
                <HStack justifyContent="space-between" w="80%">
                    <Text mb="5px" fontSize="18px" fontWeight="700" color="#1e3737">Donation</Text>
                    <Text mb="5px" fontSize="16px" fontWeight="700" color="#1e3737">82%</Text>
                </HStack>
                <Progress  colorScheme="green" size="sm" value={progress}  w="80%"/>
           </Box>
           <HStack w="100%" p="30px 0" justifyContent="flex-start" gap="40px">
                <Button bg="#fe7f4c" p="27px 45px" color="#fff" borderRadius="none" cursor="pointer" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }}>Discover More</Button>
                <HStack gap="20px" alignItems="center">
                    <Image src="../assests/ThirdSection/author-1.png"/>
                    <Box>
                        <Text m="0" fontSize="18px" fontWeight="700" color="#1e3737">Charlotte Ava</Text>
                        <Text  m="0" color="#6e7a7a">Customer</Text>
                    </Box>
                </HStack>
           </HStack>
        </VStack>


        <Box  w="40%" position="relative">
            <HStack w="100%" justifyContent="flex-end" >
                <Image src="../assests/ThirdSection/right-1.png"/>
            </HStack>
            <Image src="../assests/ThirdSection/right-2.png" position="absolute" top="320px"/>
            <Image src="../assests/ThirdSection/play.svg" position="absolute" top="80px" w="200px" h="200px"/>
        </Box>
    </HStack>
  )
}

export default ThirdSection;
