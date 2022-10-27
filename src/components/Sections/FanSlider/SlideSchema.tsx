import react, {useState, useEffect} from "react"
import styles from "./FanSlider.module.scss"
import { Rating } from '@mui/material';
import apiConfig from "../../../redux/apiConfig"
import Link from 'next/link'
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { favAdd } from "../../../redux/reducers/favSlice";

const SlideSchema = (props: any) =>  {
    const dispatch = useAppDispatch();
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



    return (

<div className={styles.slideContainer}>
<div style={styles.imageblock}>
<Link href={`/movie/${props.id}`}><img src={apiConfig.w500Image(props.poster_path)}
width="180"
height="270px"

/></Link>
</div>
<div className={styles.box}>
<div style={{display: "flex", flexDirection: "row", float: "left"}}>
    <div><Rating name="read-only" value={1} max={1} readOnly />{props.rank}</div>
    <div >
                  <IconContext.Provider
      value={{ color: 'blue', size: '50px' }}
    >
      <div className="fav" onClick={() => FavHanlder(props)}>
      {likes.includes(props.id) ?  <MdFavorite/> : <MdFavoriteBorder/>}
        </div>
        </IconContext.Provider>                  </div>
</div>
<div><Link href={`/movie/${props.id}`}><h3>{props.title}</h3></Link></div>
<div>Watch now</div>
<div>Trailer</div>
</div>
</div>

)
}

export default SlideSchema