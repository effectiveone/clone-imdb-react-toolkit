import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect} from 'react';
import styles from '../assets/styles/scss/main.module.scss';
import HeroSlider from 'components/Sections/HeroSlider/HeroSlider';
import Box from 'components/Sections/Box/Box';
import FanSlider from 'components/Sections/FanSlider/FanSlider';
import { Container } from '@mui/material';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
    





    return (
        <div>
        <Head>
          <title>IMDB -clone</title>
          <meta
            name="description"
            content="Eco Audyt - porównywarka ofert pomp cieła oraz fotowoltaiki"
          />
  <meta name="google-site-verification" content="m-ooN8jOA_iaIqO14rFsEMV6GuS3na7DW057WV2Lbgk" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
  
        </Head>
        
        <Header />
        <Container>
        <HeroSlider/>
        <FanSlider/>
    <Box/>
    </Container>
        <Footer/>
      
      </div>
    );
};

export default Home;
