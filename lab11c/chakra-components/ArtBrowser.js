import React  from 'react';
import { Grid } from '@chakra-ui/react';
import PaintingList from "./PaintingList.js";
import Favorites from "./Favorites.js";

const ArtBrowser = (props)  => {


   return (
      <Grid templateColumns="6fr 1fr" gap={2} as="main">
         <PaintingList paintings={props.paintings}/>
         <Favorites />
      </Grid>   

   );
}

export default ArtBrowser;
