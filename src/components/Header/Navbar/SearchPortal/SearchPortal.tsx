import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import uuid from 'react-uuid';
import apiConfig from "../../../../redux/apiConfig";
import Box from '@mui/material/Box';


const SearchPortal = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  return (
    <div style={overlay}>

            {moviesList?.results?.slice(0,5).map((item, index) => {
                const time = new Date(item.release_date)
              return(
              <Grid key={uuid()} item>
           


           <Card sx={{ display: 'flex',  alignItems:"center" }}>
<CardMedia
  component="img"
  height="100"
  sx={{ width: 81, paddingLeft: "10px" }}
  image={`${apiConfig.w500Image(item.poster_path)}`}
  alt="Live from space album cover"
/>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography component="div" variant="h5">
    {item.original_title}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
    ({time?.getFullYear()})</Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
   <p>producent</p></Typography>
  </CardContent>
</Box>
</Card>                   
              </Grid>
            )})}
    
    </div>
  );
};

export default SearchPortal;


const overlay = {
  width: "700px",
    position: "fixed",
    top: "80px",
    right: "33%",
    bottom: 0,
    background: "rgba(57, 55, 72, 0.22)",
    zIndex: 30,
    overflow: "scroll"
}

