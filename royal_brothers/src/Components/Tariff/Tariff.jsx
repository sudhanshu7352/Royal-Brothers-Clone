import React from 'react'
import { BikeCard } from './BikeCard/BikeCard'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// export const Tariff = () => {
//   return (
//     <div>
//       Tariff
//       <div style={{}}>
//         {[1].map((item, index) => {
//           return <BikeCard key={index} />;
//         })}
//       </div>
//     </div>
//   );
// }

// import * as React from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export  function Tariff() {
  return (
    <Box sx={{ flexGrow: 1,width:"80%",m:"auto"}}>
      <Grid container spacing={6} >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <Grid item xs={12} md={4} sm={6}>
              <Item sx={{ padding: "0px",borderRadius:"7px",overflow:"hidden" }}>
                <BikeCard key={index} />
              </Item>
            </Grid>
          );
        })}
      </Grid>
     </Box> 
  );
}

