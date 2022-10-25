import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import uuid from 'react-uuid';
import apiConfig from "../../../../redux/apiConfig";
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import style from "./SearchPortal.module.scss"

const SearchPortal = (props) => {


  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  return (
    <div style={overlay}>

            {moviesList?.results?.slice(0,5).map((item, index) => {
                const time = new Date(item.release_date)
              return(
                <React.Fragment key={uuid()}>
              <Grid  item>
           


           <Card sx={{ display: 'flex',  alignItems:"center", background: "#313131" }} className={style.box}>
<CardMedia
  component="img"
  height="100"
  sx={{ width: 81, paddingLeft: "10px" }}
  image={`${apiConfig.w500Image(item.poster_path)}`}
  alt="Live from space album cover"
/>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flex: '1 0 auto', color: "white" }}>
    <Typography component="div" variant="h5">
    {item.original_title}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
    <p style={{color: "#BCBCBC"}}>({time?.getFullYear()})</p></Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
   <p style={{color: "#BCBCBC"}}>producent</p></Typography>
  </CardContent>
</Box>
</Card>     
              </Grid>
              <Divider sx={{ backgroundColor: "white" }} />  
              
            
              </React.Fragment>
            )})}
            <div  className={style.results} >
                <p  >See all results for "{props.name}"</p></div>

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

