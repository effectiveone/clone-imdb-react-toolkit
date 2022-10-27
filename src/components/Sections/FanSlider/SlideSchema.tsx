import react, {useState, useEffect} from "react"
import styles from "./FanSlider.module.scss"
import { Rating } from '@mui/material';
import apiConfig from "../../../redux/apiConfig"
import Link from 'next/link';
import { AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { BsBookmarkPlusFill, BsFillBookmarkCheckFill, BsCheckLg } from 'react-icons/bs';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { favAdd } from "../../../redux/reducers/favSlice";
import { rankAdd } from "../../../redux/reducers/rankSlice";
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';



const SlideSchema = (props: any) =>  {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state?.favorite?.fav);
    const rank = useAppSelector((state) => state?.rank.rank);

    const [likes, setLikes] = useState([]);
    const [ranks, setRanks] = useState([]);

  
    useEffect(() => {
      const zonk =  Object.values(favorites.map(z => z.id))
      setLikes(likes=>([
        ...likes,
        ...zonk]
      ))
  
  
    },
      [favorites])


      useEffect(() => {
        const ponk =  Object.values(rank.map(z => z.id))
        setLikes(likes=>([
          ...likes,
          ...ponk]
        ))
    
      },
        [rank])
    
      const FavHanlder = (item, index) => {
        setLikes(likes=>([
          ...likes,
          item.id]
       ))
        // setLikes(...likes, movie.id);
        dispatch(
          favAdd({
            id: props.id,
            poster_path: props.poster_path,
            title: props.title,
            type: props.type,
            overview: props.overview,
            genre_ids: props.genre_ids,
            vote_average: props.vote_average,
            release_date: props.release_date
         
          })
          
        );
      };



      const [ranking, setRanking] = useState<number | null>();
const RankHandler = (item, updatedRanking) => {
  setRanks(likes=>([
    ...likes,
    item.id]
 ))
  dispatch(
    rankAdd({
      id: props.id,
      updatedRankingMovie: updatedRanking
    })

  );
};


const addButton = (
  <div style={{position: "absolute", left: "9px", top: "0px"}}>
  <IconContext.Provider value={{ color: likes.includes(props.id) ? "rgb(245,197,24)" : "3C3C3C", size: "50px", className: "iconClass",   }}>

  <div className="fav" onClick={() => FavHanlder(props)}>
      {likes.includes(props.id) ?  <BsFillBookmarkCheckFill/> : <BsBookmarkPlusFill/>}
        </div>

</IconContext.Provider>



</div>
)

const [isOpen, setIsOpen]= useState<boolean>(false)
const handleModal = () => {
  setIsOpen(!isOpen)
}

const Pixels = (e) => {
  const px = e*3;
  return px + 'px'
}

const schemaModal = (<Modal
  // backgroundColor: "#1A1A1A"
  open={isOpen}
  onClose={handleModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  style={{display:'flex',alignItems:'center',justifyContent:'center'}}
>

       
      
               
  <Box style={{position: "relative", display: "flex", justifyContent: "center", backgroundColor: "#1A1A1A", height: "250px", width: "500px",  flexDirection: "column", alignItems: "center", color: "white"}}>
    
  <div style={{position: "absolute", top: `calc(-50px - ${ Pixels(isNaN(ranking) ? 0 : ranking ) }`}}>
                  <IconContext.Provider
      value={{ color: 'blue', size: `calc(100px + ${Pixels(isNaN(ranking) ? 0 : ranking )}` }}
    >
      <div className="fav" style={{position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <AiFillStar/> 
      <p style={{position: "absolute", color: "white", zIndex: "10", }}>{ranking ?? "?"}</p>
        </div>
        </IconContext.Provider>                  </div>
    
    <Typography id="modal-modal-title" variant="h6" component="h2">
   <h3 style={{color: "rgb(245,197,24)"}}> RATE THIS</h3>
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <p style={{color: "white"}}>{props.title}</p>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Rating
  name="simple-controlled"
  size="large"
  style={{borderColor: "white", color: "blue", size: "20px"}}
  value={ranking}
  max={10}
  onClick={(event, newValue) => {
    setRanking(event.target.value);
 
    RankHandler(props.id, event.target.value)
  }}
/>

    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginTop: "20px"}}>
    <button style={{width: "240px", backgroundColor: "rgb(245,197,24)"}}>Rate</button>
    </Typography>
  </Box>
</Modal>)


    return (

<div className={styles.slideContainer}>


<div style={styles.imageblock} style={{position: "relative"}}>
<Link href={`/movie/${props.id}`}><img src={apiConfig.w500Image(props.poster_path)}
width="180"
height="270px"

/></Link>
{addButton}
</div>
<div className={styles.box}>
<div style={{display: "flex", flexDirection: "row", float: "left", alignItems: "center"}}>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><Rating name="read-only" value={1} max={1} readOnly /><p>{props.vote_average}</p></div>
    <div style={{marginLeft: "30px"}}>
                  <IconContext.Provider
      value={{ color: 'blue', size: '25px' }}
    >
      <div className="fav" onClick={handleModal}>
      <AiOutlineStar/> 
        </div>
        </IconContext.Provider>                  </div>
        {schemaModal}
</div>
<div><Link href={`/movie/${props.id}`}><h3>{props.title}</h3></Link></div>
<div style={{display: "flex", flexDirection: "row"}} onClick={() => FavHanlder(props)}> <div className="fav" >
      {likes.includes(props.id) ?  <BsCheckLg/> : <AiOutlinePlus/>}
        </div> <p>Watch now</p></div>
<div>Trailer</div>
</div>
</div>

)
}

export default SlideSchema







