import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { Typography, Button } from "@mui/material";

import { getCategoryMovies } from "../../redux/reducers/movieSlice";
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

      const { movieFullList, isLoading } = useAppSelector((state) => ({ ...state.movie }));
 
     console.log("movieFullList", movieFullList)
      useEffect(() => {
  
        if (slug) {
          dispatch(getCategoryMovies(slug, lang));
          setDataPage(slug)
        }
      }, [slug]);

          

      const { category, loading } = useAppSelector(state=>state.category);


  const nameOfCurrentCategory = category.genres.find(cat => parseInt(cat.id) === parseInt(slug))

  if(isLoading){return "Loading...."}


 
  return (<>
<Navbar/>
<div style={{backgroundColor: "white"}}>
<Container >
<div style={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px",  paddingTop: "20px"}}>
<div><SearchPage
slug={nameOfCurrentCategory.name ?? slug}
movie={movieFullList}
/>
<Stack spacing={2}>
<Pagination count={movieFullList?.total_pages} 
variant="outlined"
 shape="rounded" 
 color="secondary"
 hidePrevButton
  hideNextButton
  onChange={(e, page) => {
    const number = parseFloat(page)
    router.push(`/category/${slug}&page=${number}`)}}
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