import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { Typography, Button } from "@mui/material";
import { getMovie } from "../../redux/reducers/movieSlice";
import { getCrew} from "../../redux/reducers/movieSlice";
import uuid from 'react-uuid';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { favAdd } from "../../redux/reducers/favSlice";
import apiConfig, {apiKey} from '../../redux/apiConfig'

import Navbar from "../../components/Header/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import MovieHeader from "../../components/sections/MovieHero/MovieHeader";

import MovieHero from "../../components/sections/MovieHero/MovieHero";
import BoxHero from "../../components/sections/MovieHero/BoxHero";
import ColumnLeft from "../../components/sections/MovieHero/ColumnLeft";
import ColumnRight from "../../components/sections/MovieHero/ColumnRight";

import { Container } from '@mui/material';

const Movie = () => {
    const router = useRouter()
    const { slug } = router.query
  
    const dispatch = useAppDispatch();
    const {
      lang
      } = useAppSelector(state=>state.language);
    const { movie, crew } = useAppSelector((state) => ({ ...state.movie }));
console.log("crew", crew)

    const favorites = useAppSelector((state) => state?.favorite?.fav);

    const [likes, setLikes] = useState([]);
  
    useEffect(() => {
      const zonk =  Object.values(favorites.map(z => z.id))
      setLikes(likes=>([
        ...likes,
        ...zonk]
      ))
  
  
    },
      [favorites])
    
      const FavHanlder = (item, index) => {
        setLikes(likes=>([
          ...likes,
          item.id]
       ))
        // setLikes(...likes, movie.id);
        dispatch(
          favAdd({
            id: item.id,
            img: item.poster_path,
            title: item.title,
            type: item.type,
            release_date: item.release_date,
            rate: item.vote_average,
          })
          
        );
      };

   
    useEffect(() => {
      if (slug) {
        dispatch(getMovie(slug, lang));
        dispatch(getCrew(slug, lang));
      }
  
    }, [slug, lang]);
  
  

  const time = new Date(movie.release_date)
  


 
  return (<>
<Navbar/>
<h1 style={{color: "white"}}>Slug {slug}</h1>
<div style={{backgroundColor: "#1F1F1F"}}>
<Container>
  <MovieHeader
  title={movie.title}
  original={movie.original_title}
  year={time?.getFullYear()}
  rank={movie.vote_average}
  runtime={movie.runtime}
  vote_count={movie.vote_count}
  />
<MovieHero
  image={apiConfig.w500Image(movie.poster_path)}
  images={apiConfig.w500Image(movie.backdrop_path)}

  numberVideo={"No date"}
   numberPHOTO={"No date"}
  />
<BoxHero
genre={movie.genres}
description={movie.overview}
production_companies={movie.production_companies}
production_countries={movie.production_countries}

/>

</Container>
</div>
<div style={{ backgroundColor: "white", height: "100%"}}>
<Container>
  <div style={{display:"grid", gridTemplateColumns: "6fr 4fr"}}>
<ColumnLeft 
cast={crew?.payload?.cast}
/>
<ColumnRight/>
</div>
</Container>
  </div>
<Footer/>
    </>
  )
}


export default Movie