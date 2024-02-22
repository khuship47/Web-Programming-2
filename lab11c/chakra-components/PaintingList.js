import React  from 'react';
import { Box, Grid } from '@chakra-ui/react';
import PaintingCard from "./PaintingCard.js";

const PaintingList = (props)  => {

   if (! props.paintings) return null;

   return (
      <Box border="1px" borderRadius="md" borderColor="gray.200" m={2} p={2} as="section">
         <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={2} >
         { props.paintings.map(
            p => <PaintingCard painting={p} key={p.paintingID}/>
         )}
         </Grid>
      </Box>

   );
};

export default PaintingList;
