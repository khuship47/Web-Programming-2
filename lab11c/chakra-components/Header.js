import React from "react";
import { Box, Heading, Flex, Text, Badge, Button, Avatar, Stack } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';


const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  
  return (
    <Flex as="nav"  align="center"  justify="space-between"  wrap="wrap"  padding="1.5rem" bg="blue.700"  color="white"  {...props} >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.05rem"}>
          Art Store
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Browse</MenuItems>
        <MenuItems>Genres</MenuItems>
        <MenuItems>Galleries</MenuItems>
        <MenuItems>Artists</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack isInline>
         <Button
            variant="ghost"
            aria-label="Favorites"
            size="md"
            lefticon={FaHeart}
         >
            
            Favorites
               <Badge colorScheme="green" ml="1">0</Badge>
         </Button>          

         <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </Stack>

      </Box>
    </Flex>
  );
};

export default Header;
