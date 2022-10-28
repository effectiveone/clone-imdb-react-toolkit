import react, {useState, useEffect} from "react"
import { BsBookmarkPlusFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { favAdd } from "../../../redux/reducers/favSlice";
import style from "./BoxHero.module.scss";
import { Divider } from '@mui/material';
import { AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai';
import { BiChevronDown } from "react-icons/bi";
import uuid from "react-uuid"
// type AppProps = {
//     genre: string[],
//     description: string | null,
//     production_companies: string[],
//     production_countries: string[],
//   }

const BoxHero:React.FC = (props) => {


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


 

          
    const watchList = (
        <div className={style.watchList}>
         <IconContext.Provider value={{ color: likes.includes(props.id) ? "rgb(245,197,24)" : "3C3C3C", size: "30px", className: "iconClass",   }}>
          
          <div className="fav" onClick={() => FavHanlder(props)}>
              {likes.includes(props.id) ?    <AiOutlineCheck/> : <AiOutlinePlus/>}
                </div>
        
        </IconContext.Provider>
    
    </div>
    )

    const dropDown = (
        <div className={style.dropDown}>
        <IconContext.Provider value={{ color: "white", size: "30px", className: "iconClass",   }}>
    
        <div style={{width: "250px", }}>
    <p><BiChevronDown/></p>
    </div>
    </IconContext.Provider></div>
    )
    return (
<div className={style.main} >
<div className={style.bigger}>
    <div>
{props.genre?.map((gen) => (
    <div className={style.border} style={{paddingRight: "20px"}} key={uuid()}>
       <p> {gen.name}</p>
    </div>
))}</div>
<Divider sx={{backgroundColor: "white"}} />
<div style={{fontSize: "20px"}}>
    {props.description}
    </div>
    <Divider sx={{backgroundColor: "white"}} />
    <div className={style.production}>

<p style={{paddingRight: "25px"}}>Kraje produkcji:   </p>   
{props.production_countries?.map((gen, ind, {length}) => (<>
      <p style={{paddingRight: "5px"}}>{gen.name}</p>{length - 1  !== ind && (<>|</>)}
      </>
))}
</div>
<Divider sx={{backgroundColor: "white"}} />
<div className={style.production}>
  <p style={{paddingRight: "25px"}}> Producenci:</p> 
  
{props.production_companies?.map((gen, ind, {length}) => (<>
        <p style={{paddingRight: "5px"}}>{gen.name} </p>{length - 1  !== ind && (<>|</>)}
        </>
))}</div>


</div>

<div className={style.smaller} style={{marginTop: "-200px"}}>
<div>{watchList}</div>
<div>{dropDown}</div>


</div>
</div>
    )
}

export default BoxHero