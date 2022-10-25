import React, { useState, useEffect} from 'react'
import Image from 'next/image';
import styles from "./HeroSlider.module.scss"
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getUpcomingMovie } from "../../../redux/reducers/movieSlice";
import apiConfig from "../../../redux/apiConfig"
import SliderArrows from "./SliderArrows/SliderArrows"
import { IconContext } from "react-icons";
import { BsPlayCircle } from "react-icons/bs";


const HeroSlider: React.FC = () => {
// fetching date from redux
const dispatch = useAppDispatch();
const {  Upcoming_movie, isLoading } = useAppSelector(state=>state.movie);
const slide = Upcoming_movie?.results

    useEffect(() => {
    
    dispatch(getUpcomingMovie());

    }, [dispatch]);

    console.log( "Upcoming_movie",  Upcoming_movie)
// useState hooks
const [numberOfSlide, setNumberOfSLide] = useState(0)    
const incrementCount = () => {
    numberOfSlide === slide.length-5 ? setNumberOfSLide(0) :

    setNumberOfSLide( numberOfSlide + 1);
};
const DecrementCount = () => {
    numberOfSlide === 0 ? setNumberOfSLide(slide.length-5 ) :
setNumberOfSLide(numberOfSlide - 1 );
  };


 if( isLoading
){return "Loading..."}  return (
    <>
      {slide && (
    <div className={styles.HeroSlider} >
    <div className={styles.gridSlide}>
<div className={styles.mainSlide} 
style={{
backgroundImage:  `url(${apiConfig.w500Image(slide[numberOfSlide].backdrop_path)})` ,
backgroundSize: "cover",
postition: "relative"
}}>
 
     <div style={{ 
        position: "absolute",
      bottom: "0px",
       left: "10%", 
       display: "grid",
        gridTemplateColumns: "2fr auto" }}>
     <img
      src={apiConfig.w500Image(slide[numberOfSlide].poster_path)}
      alt="Picture of the author"
      width={170}
      height={240}
    />
    <div style={{display: "grid", 
     alignSelf: "flex-end", 
               width: "100%", 
               height: "100px",
                    backgroundColor: "rgba(0,0,0, 0.6)",
    gridTemplateColumns:"100px 1fr"}}>
    <IconContext.Provider value={{ color: "white", size: "80px", className: "iconClass",  }}>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <BsPlayCircle />
    </div>
  </IconContext.Provider>
    <div style={{ 
   
       
        
      
         display: "flex", 
         flexDirection: "column",
         
          justifyContent: "space-around",
           flexWrap: "wrap",

             color: "white"}}>
<h2
style={{
    fontWeight: 400,
    fontSize: "28px",
    color: "white"
}}
>

  {slide[numberOfSlide].title}</h2>
<span>{slide[numberOfSlide].overview.substring(0,100)}...</span>
</div>

</div>
</div>
    <div style={{ position: "absolute", top: "30%", left: "0"  }}>
            <SliderArrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCount}
            />
          </div>
          <div style={{ position: "absolute", top: "30%", right: "0" }}>
            <SliderArrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCount}
            />
          </div>

</div>
<div className={styles.textSlide}>
   <h2> Up next</h2>
</div>
<div className={styles.firstSlide}>
<div>
<img
      src={apiConfig.w500Image(slide[numberOfSlide +1]?.poster_path)}
      alt="Picture of the author"
      width={90}
      height={130}
    /></div>
   
        <div style={{display: "flex", flexDirection: "column",  alignItems: "center"}}>
        <IconContext.Provider value={{ color: "white", size: "40px", className: "iconClass",  }}>

        <div className={styles.iconClass} style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
      <BsPlayCircle />
      {"  "}
      <p style={{paddingLeft: "15px"}}>3:20</p>
    </div>
  </IconContext.Provider>
<strong>{slide[numberOfSlide +1 ].title}</strong>
<p>{slide[numberOfSlide +1].overview.substring(0,100)}...</p>
</div>




</div>
<div className={styles.secondSlide}>

<div>
<img
      src={apiConfig.w500Image(slide[numberOfSlide +2]?.poster_path)}
      alt="Picture of the author"
      width={90}
      height={130}
    /></div>
   
        <div style={{display: "flex", flexDirection: "column",  alignItems: "center"}}>
        <IconContext.Provider value={{ color: "white", size: "40px", className: "iconClass",  }}>
        <div className={styles.iconClass} style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
      <BsPlayCircle />
      {"  "}
      <p style={{paddingLeft: "15px"}}>3:20</p>
    </div>
  </IconContext.Provider>
<strong>{slide[numberOfSlide +2 ].title}</strong>
<p>{slide[numberOfSlide +2].overview.substring(0,100)}...</p>
</div>
</div>
<div className={styles.thirdSlide}>

<div>
<img
      src={apiConfig.w500Image(slide[numberOfSlide +3]?.poster_path)}
      alt="Picture of the author"
      width={90}
      height={130}
    /></div>
   
        <div style={{display: "flex", flexDirection: "column",  alignItems: "center"}}>
        <IconContext.Provider value={{ color: "white", size: "40px", className: "iconClass",  }}>
    <div className={styles.iconClass} style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
      <BsPlayCircle />
      {"  "}
      <p style={{paddingLeft: "15px"}}>3:20</p>
    </div>
  </IconContext.Provider>
<strong>{slide[numberOfSlide +3 ].title}</strong>
<p>{slide[numberOfSlide +3].overview.substring(0,100)}...</p>
</div>
</div>
<div className={styles.comSlide}><h2>Browse trailers </h2></div>


</div>
</div>)}
    </>
  )
}

export default HeroSlider