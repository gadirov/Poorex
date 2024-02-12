import { Box, Button, HStack, Image, Link, ListItem, Text, UnorderedList, transition } from '@chakra-ui/react'
import React from 'react'
export default function Header() {
  return (
    <Box  display="flex" w="100%">
        <Box bg="#07847F" w="20%" p="60px">
            <Image src='../assests/header/logo.png' w="214px" h="47px"  cursor="pointer"/>
        </Box>
        <Box w="80%" display="flex" flexDirection="column">
            <Box bg="#1E3737" display="flex" justifyContent="space-between" p="0 40px">
                <Box display="flex" justifyContent="start" alignItems="center" p="10px" gap="10px"> 
                    <Text color="#8b9e9e" fontSize="14px">Connect with our charity</Text>
                    <UnorderedList listStyleType="none" display="flex" gap="20px">
                        <ListItem><Image cursor="pointer" src='../assests/header/facebook.png' w="16px" h="16px"/></ListItem>
                        <ListItem><Image cursor="pointer" src='../assests/header/instagram.png' w="16px" h="16px" /></ListItem>
                        <ListItem><Image cursor="pointer" src='../assests/header/pinterest.png'w="16px" h="16px"/></ListItem>
                        <ListItem><Image cursor="pointer" src='../assests/header/twitter.png' w="16px" h="16px"/></ListItem>
                    </UnorderedList>
                </Box>
                <Box p="10px"> 
                    <UnorderedList listStyleType="none" display="flex" gap="5px" alignItems="center">
                        <ListItem><Image  src='../assests/header/location.png' w="16px" h="16px"/></ListItem>
                        <ListItem color="#8b9e9e" mr="20px" fontSize="14px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>66 Broklyne  Golden Street, USA</ListItem>
                        <ListItem><Image  src='../assests/header/email.png'w="16px" h="16px"/></ListItem>
                        <ListItem color="#8b9e9e" fontSize="14px" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s" }}>needhelp@company.com</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
            <HStack  justifyContent="space-between" p="30px 50px" >
                <UnorderedList listStyleType="none" display="flex" gap="30px" alignItems="center" >
                    <ListItem color="#8b9e9e" fontSize="20px" fontWeight="600px" mr="20px" _hover={{ color: "#1e3737", cursor:"pointer",transition:".5s" }}>Home</ListItem>
                    <ListItem color="#8b9e9e" fontSize="20px" fontWeight="600px" _hover={{ color: "#1e3737", cursor:"pointer", transition:".5s" }}>Pages</ListItem>
                    <ListItem color="#8b9e9e" fontSize="20px" fontWeight="600px" _hover={{ color: "#1e3737", cursor:"pointer", transition:".5s" }}>Donation</ListItem>
                    <ListItem color="#8b9e9e" fontSize="20px" fontWeight="600px" _hover={{ color: "#1e3737", cursor:"pointer", transition:".5s" }}>Events</ListItem>
                    <ListItem color="#8b9e9e" fontSize="20px" fontWeight="600px" _hover={{ color: "#1e3737", cursor:"pointer", transition:".5s" }}>Blog</ListItem>
                    <ListItem color="#8b9e9e" fontSize="20px" fontWeight="600px" _hover={{ color: "#1e3737", cursor:"pointer", transition:".5s" }}>Contact</ListItem>
                </UnorderedList>
                <HStack gap="20px">
                    <HStack gap="20px">
                        <Image  src='../assests/header/search.png' w="24px" h="24px" cursor="pointer"/>
                        <Image  src='../assests/header/user.png' w="24px" h="24px" cursor="pointer"/> 
                    </HStack>
                    <Button bg="#fe7f4c" p="27px 45px" color="#fff" borderRadius="none" cursor="pointer" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }}>Donate Now</Button>
                    <HStack gap="10px">
                        <HStack bg="#07847f" w="58px" h="58px" borderRadius="50%" justifyContent="center" alignItems="center" _hover={{ backgroundColor: "#1e3737", cursor:"pointer", transition:".5s" }}><Image  src='../assests/header/phone.png' w="24px" h="24px"/></HStack>
                        <Box>
                            <Text color="#6e7a7a" fontSize="14px">Call US Anytime</Text>
                            <Text><Link href='tel:+98 656 768 6789' fontWeight="700" _hover={{ color: "#fe7f4c", cursor:"pointer", transition:".5s"  }}>+98 656 768 6789</Link></Text>
                        </Box>
                    </HStack>
                </HStack>
            </HStack>
        </Box>
    </Box>
  )
}
