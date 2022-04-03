import React, { useEffect, useState } from 'react'
import { BikeCard } from './BikeCard/BikeCard'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from 'axios'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export  function Tariff() {

  const [isLoading,setIsLoading] = useState(true)

  const [Bikes, setBikes] = useState([])

  useEffect(() => {

    setIsLoading(true)
    axios
      .get("https://royal-brothers.herokuapp.com/bikes")
      .then((res) => {
        console.log(res.data.data);

        setBikes(res.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
    
  
    return () => {
      
    }
  }, [])
  


  return (
    <>
      {isLoading ? (
        <div>
          <h3>Loading...</h3>
          
          <img
            src="https://media3.giphy.com/media/3oz8xwsGcaZWWB8KyY/giphy.gif"
            alt=""
          
          />
        </div>
      ) : (
        <>
          <h1 style={{ margin: "10px 0px 30px 0px" }}>
            Bike rental tariffs in Bangalore
          </h1>
          <Box sx={{ flexGrow: 1, width: "80%", m: "auto" }}>
            <Grid container spacing={6}>
              {Bikes.map((item, index) => {
                return (
                  <Grid item xs={12} md={4} sm={6}>
                    <Item
                      sx={{
                        padding: "0px",
                        borderRadius: "7px",
                        overflow: "hidden",
                      }}
                    >
                      <BikeCard key={item._id} item={item} />
                    </Item>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}

