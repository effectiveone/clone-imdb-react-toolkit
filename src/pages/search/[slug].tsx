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
import { getMovies } from "../../redux/reducers/movieSlice";

import Navbar from "../../components/Header/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import SearchPage from "../../components/Sections/SearchPage/SearchPage"
import CategoryPanel from "../../components/Sections/SearchPage/CategoryPanel"
import { Grid, Pagination } from "@mui/material";
import Stack from '@mui/material/Stack';

import { Container } from '@mui/material';

const Movie = () => {
    const router = useRouter()
    const { slug } = router.query
  
    const dispatch = useAppDispatch();
    const {
      lang
      } = useAppSelector(state=>state.language);


      const [dataPage, setDataPage] = useState("");

      const { moviesList, isLoading } = useAppSelector((state) => ({ ...state.movie }));
    console.log("dataPage", dataPage)
    console.log("moviesList", moviesList)


     
      useEffect(() => {
  
        if (slug) {
          dispatch(getMovies(slug));
          setDataPage(slug)
        }
      }, [slug]);

      
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
  
  

  if(isLoading){return "Loading...."}


 
  return (<>
<Navbar/>
<div style={{backgroundColor: "white"}}>
<Container >
<div style={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px",  paddingTop: "20px"}}>
<div>
<SearchPage
slug={slug}
movie={moviesList}
/>
<Stack spacing={2}>
<Pagination count={moviesList?.total_pages} 
variant="outlined"
 shape="rounded" 
 color="secondary"
 hidePrevButton
  hideNextButton
  onChange={(e, page) => {
    const number = parseFloat(page)
    router.push(`/search/${slug}&page=${number}`)}}
  />
  </Stack>
</div>
<CategoryPanel/>
  </div>
   </Container>

  </div>
<Footer/>
    </>
  )
}


export default Movie