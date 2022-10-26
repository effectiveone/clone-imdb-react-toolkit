import React, {useState, useEffect} from 'react'
import SliderArrows from "../HeroSlider/SliderArrows/SliderArrows"
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {default as Boxes} from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from "./Box.module.scss"
import { CardActionArea } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getTheMostPopular } from "../../../redux/reducers/movieSlice";

import apiConfig from "../../../redux/apiConfig"





function Box() {
  const dispatch = useAppDispatch();
    const {  movieMostPopular, isLoading } = useAppSelector(state=>state.movie);
    const {
      lang
      } = useAppSelector(state=>state.language);
    const slides = movieMostPopular?.results

    useEffect(() => {
    
    dispatch(getTheMostPopular(lang));

    }, [dispatch]);



  const [slideItem, setSlideItem] = useState(0)
 
  const incrementCountSlide = () => {

      setSlideItem( slideItem + 1);
  };
  const DecrementCountSlide = () => {
  setSlideItem(slideItem - 1 );
    };


    const [slidesecondItem, setsecondSlideItem] = useState(0)
 
    const incrementCountSecondSlide = () => {
  
      setsecondSlideItem( slidesecondItem + 1);
    };
    const DecrementCountSecondSlide = () => {
      setsecondSlideItem(slidesecondItem - 1 );
      };

  return (
    <>


<div style={{ backgroundColor: "black", height: "400px"  }}>

<div className={styles.container}
>
<h1 className={styles.title}
>Featured today</h1>
<div className={styles.box}>

{slides?.slice(slideItem, (slideItem+2)).map((movie, i) => (
  <React.Fragment key={i}>

  <ActionAreaCard 
  image={apiConfig.w500Image(movie.poster_path)}
  title={movie.title}

  />
      {slideItem > 0 && (    <div className={styles.arrow} style={{ position: "absolute", top: "50%", left: "-2%" }}>
            <SliderArrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCountSlide}
            />
          </div>)}
  {slideItem < 5 &&(        <div  style={{ position: "absolute", top: "50%", right: "34%" }}>
            <SliderArrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCountSlide}
            />
          </div>)}
  
  </React.Fragment>
))}</div>

</div>

          </div>
  </>
  )
}

export default Box



function MediaControlCard(props: any) {
  const theme = useTheme();

  return (
    <Card sx={{color: "white", display: 'flex', width: "400px", padding: "20px 20px 20px 20px", backgroundColor: "#181A1B" , transform: "translateX(75px)"}}>
     
     <div >    <img
        src={props.image}
        alt="Live from space album cover"
        style={{height: "150px", width: "200px"}}      /></div> 
      <Boxes sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
        {props.content}
          </Typography>
        
        </CardContent>
   
      </Boxes>
  
    </Card>
  );
}


function ActionAreaCard(props: any) {
  return (
    <Card sx={{ maxWidth: 400 }} style={{margin: "30px, 50px, 0px, 50px", padding: "30px, 50px, 0px, 50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="223"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          {props.content   &&(     <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>)}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


const firstSlider = [{
img: "https://lumiere-a.akamaihd.net/v1/images/andor-106-main_99d971bc.jpeg?region=787%2C1%2C2853%2C1607",
title: <><h3>  Andor | “Episode 6: The Eye” Episode Guide </h3></>
},{
img: "https://lumiere-a.akamaihd.net/v1/images/andor-ep-105-main_386d4b16.jpeg?region=560%2C33%2C1360%2C767",
title: <><h3>  Andor | “Episode 5: The Axe Forgets” Episode Guide </h3></>
},{
img: "https://lumiere-a.akamaihd.net/v1/images/andor-episode-4-main-2_42e006e9.jpeg?region=3%2C1%2C1427%2C803",
title: <><h3>  Andor | “Episode 4: Aldhani” Episode Guide </h3></>
},{
img: "https://lumiere-a.akamaihd.net/v1/images/80ce978acc2e194eecdd4a8081c184bf_2880x1620_bd119ab8.png?region=0%2C0%2C2880%2C1620",
title: <><h3>  Andor | “Episode 3: Reckoning” Episode Guide </h3></>
}
,{
  img: "https://lumiere-a.akamaihd.net/v1/images/4c4118f67bd850bf3fbc51f232a3ed21_2880x1620_ae585e17.png?region=0%2C0%2C2880%2C1620",
  title: <><h3>  Andor | “Episode 2: That Would Be Me” Episode Guide </h3></>
  }
  ,{
    img: "https://lumiere-a.akamaihd.net/v1/images/episode-1-andor-mobile_d23a6d98.jpeg?region=0%2C25%2C1024%2C576",
    title: <><h3>  Andor | “Episode 1: Kassa” Episode Guide </h3></>
    }

]