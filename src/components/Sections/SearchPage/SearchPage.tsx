import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import uuid from 'react-uuid';
import apiConfig from "../../../redux/apiConfig";
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import style from "./SearchPage.module.scss"

const SearchPage: React.FC = ({
    movie,
    slug
}) => {
    console.log("SearchPagemovie", movie)
    return(
        <>
        {/* {movie.original_title} */}
        <div className={style.borderSet}>
        <h2 style={{ paddingBottom: "50px"}}>Displaying {movie?.results?.length} results for "{slug}"</h2>

        {movie?.results?.map((item, index) => {
            const time = new Date(item.release_date)
            
          return(
            <React.Fragment key={uuid()}>
          <Grid  item>

       <Card  className={style.box} style={index % 2 === 0 ? { backgroundColor: "#F6F6F5" } : {backgroundColor: "#FBFBFB"}}>
<CardMedia
component="img"
height="60"
width="40"
sx={{ width: 40, paddingLeft: "10px", paddingTop: "10px"  }}
image={`${apiConfig.w500Image(item.poster_path)}`}
alt="Live from space album cover"
/>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
<CardContent sx={{ flex: '1 0 auto', color: "white" }}>
<Typography component="div" variant="h5">
<p style={{color: "#2F7BB9"}}>{item.original_title}({time?.getFullYear()})</p>
</Typography>

</CardContent>
</Box>
</Card>     
          </Grid>
          <Divider sx={{ backgroundColor: "white" }} />  
          
        
          </React.Fragment>
        )})}
        </div>
        </>
    )
}

export default SearchPage