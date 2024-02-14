import { Box, Button, HStack, Image, Input, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Footer() {
  return (
    <VStack w="100%">
        <HStack bg="#1e3737fa" w="100%" p="50px 200px 100px 200px"  gap="100px">
            <VStack w="372px" alignItems="flex-start" gap='30px' >
                <Image src='../assests/Footer/footer-1.png' />
                <Text w="100%" color="#8b9e9e" m="0">Suspendisse posuere egeteldapibus. <br /> Aliquam cong egeteldapib Aliquam <br /> congue posuere</Text>
                <HStack alignItems="center"  w="100%"> 
                    <Image  src='../assests/header/email.png'w="16px" h="16px"/>
                    <Text m="0" color="#8b9e9e" fontSize="14px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>poorexcharity@gmail.com</Text>
                </HStack >
                <HStack   alignItems="center" w="100%"> 
                    <Image  src='../assests/header/phone.png'w="16px" h="16px"/>
                    <Text m="0" color="#8b9e9e" fontSize="14px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>poorexcharity@gmail.com</Text>
                </HStack >
            </VStack>
            <VStack w="372px" gap="30px">
                <Text fontSize="24px" color="#fff" fontWeight="700" w="100%" m="0">Navigation</Text>
                    <UnorderedList display="flex" flexDirection="column"  listStyleType="none"  gap="10px" fontSize="20px" p="0" m="0" w="100%">
                        <ListItem color="#8b9e9e"  fontSize="15px"   _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Recent Courses</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>About Us</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Donation</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Latest News</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Contact Us</ListItem>\
                    </UnorderedList>
            </VStack>
            <VStack w="372px" gap="30px">
                <Text fontSize="24px" color="#fff" fontWeight="700" w="100%" m="0">Campaigns</Text>
                    <UnorderedList display="flex" flexDirection="column"  listStyleType="none"  gap="10px" fontSize="20px" p="0" m="0" w="100%">
                        <ListItem color="#8b9e9e"  fontSize="15px"   _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Child Cancer</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Differently Abled</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Clean Water</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Start Fundraising</ListItem>
                        <ListItem color="#8b9e9e"  fontSize="15px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>Give Education</ListItem>\
                    </UnorderedList>
            </VStack>
            <VStack gap="20px" pt="15px">
                <Text m="0"  fontSize="24px" color="#fff" fontWeight="700" w="100%">Our Newsletter</Text>
                <Text w="100%" color="#8b9e9e"  fontSize="15px" m="0">Subscribe to our newsletter and get update in your inbox for future plan</Text>
                <Input  placeholder='Email Address'/>
                <Box w="100%">
                <Button bg="#fe7f4c" p="27px 45px" color="#fff" borderRadius="none" cursor="pointer" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }}>Subscribe<ArrowForwardIcon /></Button>  
                </Box>
            </VStack>
        </HStack>





        <Box></Box>
    </VStack>
  )
}
