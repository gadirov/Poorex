import React, { useEffect, useState } from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, HStack, Heading, Image, Progress, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { FourthSectionDatas } from './FourthSectionArray'
import AOS from "aos";
import "aos/dist/aos.css";


export default function FourthSection() {
 const  [activeStartIndex, setActiveStartIndex] = React.useState(0);
 const  [activeEndIndex, setActiveEndIndex] = React.useState(3);
 useEffect(() => {
    AOS.init({
        duration: 700,
        easing: "ease-out-cubic"
    });
}, []);

return (
    <Box w="100%" p="100px 0" position="relative" >
        <HStack alignItems="center" w="100%" p="0 300px" data-aos="fade-up">
                <Text color="#fe7f4c" fontSize="18px" fontWeight="700" m="0">HELP THE PEOPLE</Text>
                <HStack gap="0">
                <Divider w="20px"  borderColor="#07847f"  borderWidth="1.8px" borderRadius="10px"/>
                <Divider w="10px" borderColor="#fe7f4c" borderWidth="1.8px" borderRadius="10px"/>
                </HStack>        
        </HStack>
        <HStack w="100%" alignItems="center" justifyContent="space-between" p="0 300px"  data-aos="fade-up">
            <Text color="#1e3737" fontSize="48px" fontWeight="700" m="0">Our Popular Causes</Text>
            <HStack gap="20px">
                <Box bg="#fff" cursor="pointer" borderRadius="50%" p="10px" onClick={() => setActiveEndIndex((prev) => prev -1 )} _hover={{backgroundColor: "#fe7f4c",transition: ".5s",}}><ArrowBackIcon boxSize={6} color="#07847f"/></Box>
                <Box bg="#fff" cursor="pointer" borderRadius="50%" p="10px" onClick={() => setActiveEndIndex((prev) => prev +1 )} _hover={{backgroundColor: "#fe7f4c",transition: ".5s",}}><ArrowForwardIcon boxSize={6} color="#07847f"/></Box>
            </HStack>
        </HStack>
        <SimpleGrid columns={3} row={1} spacingX='40px' spacingY='20px' w="100%" p="50px 300px"  data-aos="fade-up"> 
            {
            FourthSectionDatas.slice(activeStartIndex, activeEndIndex).map((data: any) =>  <FourthSectionCard   {...data} key={data.id} /> )
            }
        </SimpleGrid>
        <Box w="100%" bg="#f2f7f7" h="500px" position="absolute" top="1" display="flex" justifyContent="space-between" zIndex="-1">
            <Box>
            <Image src="../assests/FourthSection/bg-1-21.png" position="absolute" top="0" filter="brightness(10%)"/>
            <Image src="../assests/FourthSection/bg-1-31.png"  position="absolute" top="0"  filter="brightness(10%)" />
            </Box>
            <Image src="../assests/FourthSection/bg-1-1.png"  />
        </Box>
    </Box>
)
}

const FourthSectionCard: React.FC<any> = ({image, imageText, heading, text, percentage, raised, goal}) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 1;
                if (newProgress === Number(percentage)) {
                clearInterval(interval);
                }
                return newProgress;
            });
            }, 10);
            return () => clearInterval(interval);
        }, []);
    return (
        <Box boxShadow="1px 1.464px 20px 0px rgba(14, 5, 1, 0.04)"  position="relative">
            <Image src={image} w="100%" h="248"/>
            <Image src="../assests/FourthSection/donate-shape-1.png" position="absolute" top="200" right="195" zIndex="1" w="177" h="46"/>
            <Text position="absolute" top="210" right="250" zIndex="1" w="177" h="46" color="#fff" fontWeight="600">{imageText}</Text>
            <Box p="30px">
                <Heading fontSize="27px" color="#1e3737">{heading}</Heading>
                <Text color="#6e7a7a" lineHeight="30px" m="0">{text}</Text>
                <HStack justifyContent="flex-end">
                    <Text fontWeight="700" color="#1e3737">{`${percentage}%`}</Text>
                </HStack>
                <Progress  colorScheme="green" size="sm" value={progress} />
                <HStack justifyContent="space-between" mt="15px">
                    <HStack>
                        <Text color="#6e7a7a">Raised</Text>
                        <Text fontWeight="700">{raised}</Text>
                    </HStack>
                    <HStack>
                        <Text color="#6e7a7a">Goal</Text>
                        <Text fontWeight="700">{goal}</Text>
                    </HStack>
                </HStack>
                <Button bg="#f2f7f7" p="24px 45px" color="#07847c" mt="20px" borderRadius="none" cursor="pointer" _hover={{ backgroundColor: "#1e3737", cursor: "pointer", transition: ".5s" }}>Donate Now</Button>
            </Box>
        </Box>
    )
}
