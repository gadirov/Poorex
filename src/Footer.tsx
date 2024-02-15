import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <VStack w="100%" gap="0">
      <HStack bg="#1e3737fa" w="100%" p="50px 300px 100px 300px" gap="50px">
        <VStack w="372px" alignItems="flex-start" gap="20px" data-aos="fade-up">
          <Image src="../assests/Footer/footer-1.png" />
          <Text w="100%" color="#8b9e9e" m="0">
            Suspendisse posuere egeteldapibus. <br /> Aliquam cong egeteldapib
            Aliquam <br /> congue posuere
          </Text>
          <HStack alignItems="center" w="100%">
            <Image src="../assests/header/email.png" w="16px" h="16px" />
            <Text
              m="0"
              color="#8b9e9e"
              fontSize="16px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              poorexcharity@gmail.com
            </Text>
          </HStack>
          <HStack alignItems="center" w="100%">
            <Image src="../assests/header/phone.png" w="16px" h="16px" />
            <Text
              m="0"
              color="#8b9e9e"
              fontSize="16px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              +99 (098) 876 4578
            </Text>
          </HStack>
        </VStack>
        <VStack w="372px" gap="30px" data-aos="fade-up">
          <Text fontSize="24px" color="#fff" fontWeight="700" w="100%" m="0">
            Navigation
          </Text>
          <UnorderedList
            display="flex"
            flexDirection="column"
            listStyleType="none"
            gap="10px"
            fontSize="20px"
            p="0"
            m="0"
            w="100%"
          >
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Recent Courses
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              About Us
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Donation
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Latest News
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Contact Us
            </ListItem>
            \
          </UnorderedList>
        </VStack>
        <VStack w="372px" gap="30px" data-aos="fade-up">
          <Text fontSize="24px" color="#fff" fontWeight="700" w="100%" m="0">
            Campaigns
          </Text>
          <UnorderedList
            display="flex"
            flexDirection="column"
            listStyleType="none"
            gap="10px"
            fontSize="20px"
            p="0"
            m="0"
            w="100%"
          >
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Child Cancer
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Differently Abled
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Clean Water
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Start Fundraising
            </ListItem>
            <ListItem
              color="#8b9e9e"
              fontSize="15px"
              _hover={{
                color: "#fe7f4c",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Give Education
            </ListItem>
            \
          </UnorderedList>
        </VStack>
        <VStack gap="20px" pt="15px" data-aos="fade-up">
          <Text m="0" fontSize="24px" color="#fff" fontWeight="700" w="100%">
            Our Newsletter
          </Text>
          <Text w="100%" color="#8b9e9e" fontSize="15px" m="0">
            Subscribe to our newsletter and get update in your inbox for future
            plan
          </Text>
          <Input
            placeholder="Email Address"
            borderRadius="none"
            borderColor="#385656"
            p="20px"
          />
          <Box w="100%">
            <Button
              bg="#fe7f4c"
              p="24px 45px"
              color="#fff"
              borderRadius="none"
              cursor="pointer"
              _hover={{
                backgroundColor: "#1e3737",
                cursor: "pointer",
                transition: ".5s",
              }}
            >
              Subscribe
              <ArrowForwardIcon />
            </Button>
          </Box>
        </VStack>
      </HStack>
      <HStack
        bg="#172c2d"
        w="100%"
        p="20px 300px"
        justifyContent="space-between"
      >
        <Text color="#8b9e9e" m="0">
          © Copyright 2023 by Poorex.com
        </Text>
        <UnorderedList
          listStyleType="none"
          display="flex"
          gap="20px"
          m="0"
          p="0"
        >
          <ListItem bg="#1f3737" borderRadius="50%" p="15px">
            <Image
              cursor="pointer"
              src="../assests/header/facebook.png"
              w="16px"
              h="16px"
            />
          </ListItem>
          <ListItem bg="#1f3737" borderRadius="50%" p="15px">
            <Image
              cursor="pointer"
              src="../assests/header/instagram.png"
              w="16px"
              h="16px"
            />
          </ListItem>
          <ListItem bg="#1f3737" borderRadius="50%" p="15px">
            <Image
              cursor="pointer"
              src="../assests/header/pinterest.png"
              w="16px"
              h="16px"
            />
          </ListItem>
          <ListItem bg="#1f3737" borderRadius="50%" p="15px">
            <Image
              cursor="pointer"
              src="../assests/header/twitter.png"
              w="16px"
              h="16px"
            />
          </ListItem>
        </UnorderedList>
      </HStack>
    </VStack>
  );
}
