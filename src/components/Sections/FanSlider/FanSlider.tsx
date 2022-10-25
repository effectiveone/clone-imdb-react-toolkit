import React, {useState, useEffect} from 'react'
import { Rating } from '@mui/material';
import styles from "./FanSlider.module.scss"
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getUpcomingMovie } from "../../../redux/reducers/movieSlice";
import SlideSchema from "./SlideSchema"
import SliderArrows from "../HeroSlider/SliderArrows/SliderArrows"

const FanSlider:React.FC = () => {
const [slideItem, setSlideItem] = useState(0)
const incrementCountSlide = () => {
  
  setSlideItem( slideItem + 6);
};
const DecrementCountSlide = () => {
  setSlideItem(slideItem - 6 );
  };

    const dispatch = useAppDispatch();
    const {  Upcoming_movie, isLoading } = useAppSelector(state=>state.movie);
    const slides = Upcoming_movie?.results

console.log("slides", slides)
    useEffect(() => {
    
    dispatch(getUpcomingMovie());

    }, [dispatch]);
  return (
    <>
    <div
   className={styles.border}
    ><h2 style={{fontSize:"28px", color: "white", borderLeft: "3px solid rgb(245,197,24)"}}>FanSlider</h2></div>
    {/* <SlideSchema
               
                /> */}
             {slides && (<> 
                <div style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", position: "relative", paddingBottom: "50px"}}>
                {slides.slice(slideItem, (slideItem +6)).map((slide) => {
console.log("imgFrom", slide.poster_path)
                    return (
                      <React.Fragment key={slide.id}>
                        <SlideSchema
               title={slide.title}
               img={slide.poster_path}
               rank={slide.vote_average}
               /> 
                      {slideItem > 0 && (    <div style={{ position: "absolute", top: "30%", left: "-2%" }}>
            <SliderArrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCountSlide}
            />
          </div>)}
  {slideItem < 5 &&(        <div  style={{ position: "absolute", top: "30%", right: "0%" }}>
            <SliderArrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCountSlide}
            />
          </div>)}
                        </React.Fragment>
                    )
            
                })}
                </div>
                </>)}

    </>
  )
}





export default FanSlider;