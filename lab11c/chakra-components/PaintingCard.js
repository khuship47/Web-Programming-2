import React from "react";
import { Box, Badge, Image, ButtonGroup, Button, Heading, Text, Link, Icon } from '@chakra-ui/react';
import { Drawer, DrawerContent, DrawerHeader,DrawerBody,DrawerFooter, useDisclosure} from '@chakra-ui/react';
import { FaHeart,FaImage } from 'react-icons/fa';


const PaintingCard = (props)  => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   const p = props.painting;
   if (! p) return null;

   const imageUrl = `https://res.cloudinary.com/funwebdev/image/upload/ar_1:1,c_fill,g_auto,w_200/v1590276836/art/paintings/${p.imageFileName}`;
   const fullimageUrl = `https://res.cloudinary.com/funwebdev/image/upload/c_scale,w_300/v1590276836/art/paintings/${p.imageFileName}`;

   // if the above image URLs don't work, use this one instead
   // const imageUrl = `https://www.randyconnolly.com/funwebdev/3rd/images/art/paintings/square/${p.ImageFileName}`;

   const addFav = () => {
		// TO DO
   }

   return (
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src={imageUrl} alt={p.title} p="4" />
  
        <Box p="4">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="blue">
              {p.yearOfWork}
            </Badge>
            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2" >
              {p.gallery.name}
            </Box>
          </Box>
  
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>{p.title}</Box>
  
          <Box>{p.artist.firstName} {p.artist.lastName}</Box>
  
          <Box d="flex" mt="2" alignItems="center">
            <ButtonGroup spacing={4}>
               <Button size="xs" colorScheme="blue" leftIcon={FaImage} onClick={onOpen} p="3" >View</Button>
               <Button size="xs" colorScheme="blue" leftIcon={FaHeart} p="3" onClick={addFav} >Fav</Button>
            </ButtonGroup>
             
          </Box>
        </Box>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
         <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
               <Heading as="h3" size="md">
                  {p.title}
               </Heading>
            </DrawerHeader>
            <DrawerBody>
               <Image src={fullimageUrl} alt={p.title} p="4" />
               <Heading size="sm" as="h4">{p.artist.firstName} {p.artist.lastName} ({p.yearOfWork})</Heading>
               <Text fontSize="sm" mt="3" mb="4">{p.details.excerpt}</Text>

               <Link fontSize="sm" href={p.details.museumLink} isExternal >
                  View at {p.gallery.name} <Icon name="external-link" mx="2px" />
               </Link>            
            </DrawerBody>
            <DrawerFooter>
               <Button variant="outline" mr={3} onClick={onClose}>
               Close
               </Button>
            </DrawerFooter>          
         </DrawerContent>
       </Drawer>
      </Box>
    );
};

export default PaintingCard;