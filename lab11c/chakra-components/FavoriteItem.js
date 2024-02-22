import React from "react";

import { Box, Flex, Button, ButtonGroup, Image } from "@chakra-ui/react";
import { FaTrash,FaImage } from 'react-icons/fa';


const FavoriteItem = (props)  => {

 

   const item = props.item;
   if (! item) return null;

   const imageUrl = `https://res.cloudinary.com/funwebdev/image/upload/ar_1:1,c_fill,g_auto,w_75/v1590276836/art/paintings/${item.filename}`;
   // if the above image URL doesn't work, use this one instead
   // const imageUrl = `https://www.randyconnolly.com/funwebdev/3rd/images/art/paintings/square/${item.filename}`;


   const removeFav = () => {
      // to do
   }

   return (
      <Flex border="1px" borderRadius="md" borderColor="gray.200" m={1} p={1} align="center" justify="center" direction="column" >
         <Image src={imageUrl} alt={item.title} py="2" />
         <ButtonGroup spacing={4}>
            <Button size="sm" variantColor="blue" ><Box as={FaImage} /></Button>
            <Button size="sm" variantColor="blue" variant="outline" onClick={removeFav}><Box as={FaTrash} /></Button>
         </ButtonGroup>

      </Flex>

   );
}

export default FavoriteItem;