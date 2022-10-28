import react, {useState, useEffect} from "react";
import style from "./MovieHeader.module.scss"
import { Rating } from '@mui/material';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { rankAdd } from "../../../redux/reducers/rankSlice";


type AppProps = {
  title: string,
  original: string,
  year: number,
  original: number,
  runtime: integer | nul,
  vote_count: integer | nul,
  sellectiveID: number, 
  vote_overage: number
}

const MovieHeader: React.FC = (
  {  title,
    runtime,
    original,
    vote_count,
    year,
    vote_overage,
    sellectiveID
    }: AppProps
) => {
  useEffect(()=>{
    console.log("co sie kryje pod ranks", ranks)
  },
  [setRanks, ranks])  
  const dispatch = useAppDispatch()

  const [isOpen, setIsOpen]= useState<boolean>(false)
  const handleModal = () => {
    setIsOpen(!isOpen)
  }
  
  const Pixels = (e) => {
    const px = e*3;
    return px + 'px'
  }
  
const rank = useAppSelector((state) => state?.rank.rank);
const [ranks, setRanks] = useState([]);
useEffect(() => {
  const ponk =  Object.values(rank.map(z => z.id))
  setRanks(ranks=>([
    ...ranks,
    ...ponk]
  ))

},
  [rank])
const [ranking, setRanking] = useState<number | null>();
const RankHandler = (item, updatedRanking) => {
setRanks(ranks=>([
...ranks,
item.id]
))
dispatch(
rankAdd({
id: sellectiveID,
updatedRankingMovie: updatedRanking
})

);
};
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
    <p style={{color: "white"}}>{title}</p>
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
    RankHandler(sellectiveID, event.target.value)
  }}
/>

    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginTop: "20px"}}>
    <button style={{width: "240px", backgroundColor: "rgb(245,197,24)"}}>Rate</button>
    </Typography>
  </Box>
</Modal>)


  function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return  rhours + " h " + rminutes + " m";
    }

    function popularity (n) {
      return (n/1000).toFixed(1) + "k"
    }


const rankingBox = (<>
  <div>IMDb RATING</div>
 
  <div style={{display: "grid", gridTemplateColumns: "50px 1fr"}} className={style.clasters}>
<div className={style.star}><Rating name="read-only" value={1} max={1} size="large" readOnly />
</div><div style={{display: "flex", flexDirection: "column"}}>
<p>{vote_overage?.toFixed(1)}/10</p>
 <p> {popularity(vote_count)}</p>
</div></div>
</>
)

const favorite = (<>
  <div>Your Favorite</div>
 
  <div style={{display: "grid", gridTemplateColumns: "50px 1fr"}} className={style.clasters}>
<div className={style.star} onClick={handleModal}>
<IconContext.Provider
      value={{ color: '#64A0F1', size: '40px' }}
    >
           <div className="fav" >
 {  ranks.includes(sellectiveID) ? <AiFillStar/> :
   <AiOutlineStar/>   }
        </div>

      {/* <div className="fav" onClick={() => FavHanlder(movie)}>
      {likes.includes(movie.id) ?  <MdFavorite/> : <MdFavoriteBorder/>}
        </div> */}
        </IconContext.Provider> 

</div><div style={{display: "flex", flexDirection: "column"}}>
<h2 style={{color: "#64A0F1", fontSize: "28px", transform: "translateY(5px)"}}>{ranks.includes(sellectiveID) ? (rank.find(x => x.id === sellectiveID).updatedRankingMovie  ) + "/10 rates" : "Rate"} </h2>
 
</div></div>
</>
)

return (
<>
<h2 className={style.titles}>{title}</h2>
<div className={style.container}>
<div className={style.firstGrid}>
<strong>{original}</strong>
<span>{year}</span>
<span>{timeConvert(runtime)}</span>

</div>
<div className={style.secondGrid} >
  <div >
{rankingBox}
</div>
<div >
{favorite}
{schemaModal}
</div>
</div>
</div>

</>
)
}

export default MovieHeader; 