import React from 'react';
import styled from 'styled-components';
//import './PaintingItem.css';


const PaintingItem = (props) => {
   const url = "http://www.randyconnolly.com/funwebdev/3rd/images/art/paintings/square/" + props.painting.ImageFileName + ".jpg";
   
   return (
      <Card>
         <Figure>
            <Image src={url} alt={props.painting.Title} />
            <Caption>{props.painting.Title}</Caption>
         </Figure>
      </Card>
   );
   

};

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
padding: 16px;
text-align: center;
background-color: #f1f1f1;
`;
const Image = styled.img`
width: 200px;
`;
const Caption = styled.figcaption`
font-size: 0.75rem;
width: 200px;
`;
const Figure = styled.figure`
margin: 0;
padding: 0;
`

export default PaintingItem;