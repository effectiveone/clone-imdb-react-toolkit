import react from "react";
import style from "./MovieHero.module.scss"
import apiConfig from "../../../redux/apiConfig"
import { BsImages, BsPlayCircle , BsFillBookmarkPlusFill} from 'react-icons/bs';
import { FaPhotoVideo } from 'react-icons/fa';
import { GrMoreVertical } from 'react-icons/gr';
import { BsBookmarkPlusFill } from 'react-icons/bs';

import { IconContext } from "react-icons";


const MovieHero: React.FC = ({image, numberVideo, numberPHOTO, images}) => {
    const addButton = (
        <div className={style.addButton}>
        <IconContext.Provider value={{ color: "#3C3C3C", size: "50px", className: "iconClass",   }}>
    
        <div className={style.iconClass}  >
    <BsFillBookmarkPlusFill />
    </div>
    </IconContext.Provider></div>
    )

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
<div className={style.first}><img src={image}/>{addButton}
</div>
<div className={style.second}><img src={images}/>{playButton}{moreButton}</div>
<div className={style.third}>
   
    <IconContext.Provider value={{ size: "40px", color: "white" }}>
           <div>
             <BsImages/>
            </div>
        </IconContext.Provider>
    <p>{numberVideo}</p><p>VIDEOS</p></div>
<div className={style.four}>
<IconContext.Provider value={{ size: "40px", color: "white" }}>
           <div>
           <FaPhotoVideo/>
            </div>
        </IconContext.Provider>
    
    <p>{numberPHOTO}</p><p>FOTOS</p></div>
</div>
    )
}

export default MovieHero