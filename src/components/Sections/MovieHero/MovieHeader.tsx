import react from "react";
import style from "./MovieHeader.module.scss"
import { Rating } from '@mui/material';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IconContext } from 'react-icons';

type AppProps = {
  title: string,
  original: string,
  year: number,
  original: number,
  runtime: integer | nul,
  vote_count: integer | nul
}

const MovieHeader: React.FC = (
  {  title,
    runtime,
    original,
    vote_count,
    year,
    rank
    }: AppProps
) => {

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


const ranking = (<>
  <div>IMDb RATING</div>
 
  <div style={{display: "grid", gridTemplateColumns: "50px 1fr"}} className={style.clasters}>
<div className={style.star}><Rating name="read-only" value={1} max={1} size="large" readOnly />
</div><div style={{display: "flex", flexDirection: "column"}}>
<p>{rank?.toFixed(1)}/10</p>
 <p> {popularity(vote_count)}</p>
</div></div>
</>
)

const favorite = (<>
  <div>Your Favorite</div>
 
  <div style={{display: "grid", gridTemplateColumns: "50px 1fr"}} className={style.clasters}>
<div className={style.star}>
<IconContext.Provider
      value={{ color: '#64A0F1', size: '40px' }}
    >
      <MdFavoriteBorder/>
      {/* <div className="fav" onClick={() => FavHanlder(movie)}>
      {likes.includes(movie.id) ?  <MdFavorite/> : <MdFavoriteBorder/>}
        </div> */}
        </IconContext.Provider> 

</div><div style={{display: "flex", flexDirection: "column"}}>
<h2 style={{color: "#64A0F1", fontSize: "28px", transform: "translateY(5px)"}}>Rate</h2>
 
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
{ranking}
</div>
<div >
{favorite}
</div>
</div>
</div>

</>
)
}

export default MovieHeader; 