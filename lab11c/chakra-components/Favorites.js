import React, {useContext} from "react";
import { Box, Flex, Heading } from '@chakra-ui/react';


const Favorites = ()  => {

   return (
      <Box border="1px" borderRadius="md" borderColor="gray.200" m={1} p={1} as="section">
         <Flex align="center" justify="center"  direction="column">
            <Heading as="h3" size="sm"  color="gray.700" fontWeight="500">Favorites</Heading>
         </Flex>
         TODO

      </Box>

   );
}

export default Favorites;