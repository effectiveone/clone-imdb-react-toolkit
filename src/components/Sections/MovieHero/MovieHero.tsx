import react, {useState, useEffect} from "react"
import { BsBookmarkPlusFill, BsFillBookmarkCheckFill, BsCheckLg } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { favAdd } from "../../../redux/reducers/favSlice";import style from "./MovieHero.module.scss"
import apiConfig from "../../../redux/apiConfig"
import { BsImages, BsPlayCircle , BsFillBookmarkPlusFill} from 'react-icons/bs';
import { FaPhotoVideo } from 'react-icons/fa';
import { GrMoreVertical } from 'react-icons/gr';



const MovieHero: React.FC = (props) => {



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

          const addButton = (
            <div style={{position: "absolute", left: "9px", top: "0px"}}>
            <IconContext.Provider value={{ color: likes.includes(props.id) ? "rgb(245,197,24)" : "3C3C3C", size: "50px", className: "iconClass",   }}>
          
            <div className="fav" onClick={() => FavHanlder(props)}>
                {likes.includes(props.id) ?  <BsFillBookmarkCheckFill/> : <BsBookmarkPlusFill/>}
                  </div>
          
          </IconContext.Provider>
          
          
          
          </div>
          )



    // const addButton = (
    //     <div className={style.addButton}>
    //     <IconContext.Provider value={{ color: "#3C3C3C", size: "50px", className: "iconClass",   }}>
    
    //     <div className={style.iconClass}  >
    // <BsFillBookmarkPlusFill />
    // </div>
    // </IconContext.Provider></div>
    // )

const playButton = (
    <div className={style.playButton}>
    <IconContext.Provider value={{ color: "white", size: "50px", className: "iconClass",  }}>

    <div className={style.iconClass}  >
    <p > <BsPlayCircle /><span style={{paddingLeft: "15px"}}>Play trailer 1:20</span></p>
</div>
</IconContext.Provider></div>
)

const moreButton = (
    <div className={style.moreButton}>
    <IconContext.Provider value={{ color: "white", size: "30px", className: "iconClass",  }}>

    <div className={style.iconClass}  >
   <GrMoreVertical />
</div>
</IconContext.Provider></div>
)
    return (
<div className={style.container}>
<div className={style.first}><img src={props.image}/>{addButton}
</div>
<div className={style.second}><img src={props.images}/>{playButton}{moreButton}</div>
<div className={style.third}>
   
    <IconContext.Provider value={{ size: "40px", color: "white" }}>
           <div>
             <BsImages/>
            </div>
        </IconContext.Provider>
    <p>{props.numberVideo}</p><p>VIDEOS</p></div>
<div className={style.four}>
<IconContext.Provider value={{ size: "40px", color: "white" }}>
           <div>
           <FaPhotoVideo/>
            </div>
        </IconContext.Provider>
    
    <p>{props.numberPHOTO}</p><p>FOTOS</p></div>
</div>
    )
}

export default MovieHero