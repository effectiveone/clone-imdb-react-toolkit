import react from  "react";
import style from "./BoxHero.module.scss";
import { Divider } from '@mui/material';
import { AiOutlinePlus} from 'react-icons/ai';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IconContext } from "react-icons";

type AppProps = {
    genre: string[],
    description: string | null,
    production_companies: string[],
    production_countries: string[],
  }

const BoxHero:React.FC = ({
    genre,
description,
production_companies,
production_countries,
}:AppProps) => {

    const watchList = (
        <div className={style.watchList}>
        <IconContext.Provider value={{ color: "white", size: "30px", className: "iconClass",   }}>
    
        <div style={{width: "250px", }}>
    <p><AiOutlinePlus/></p>
    <span>Add to watchlist</span></div>
    </IconContext.Provider></div>
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
{genre?.map((gen) => (
    <div className={style.border} style={{paddingRight: "20px"}} key={gen}>
        {gen.name}
    </div>
))}</div>
<Divider sx={{backgroundColor: "white"}} />
<div style={{fontSize: "20px"}}>
    {description}
    </div>
    <Divider sx={{backgroundColor: "white"}} />
    <div className={style.production}>

<p style={{paddingRight: "25px"}}>Kraje produkcji:   </p>   
{production_countries?.map((gen, ind, {length}) => (<>
      <p style={{paddingRight: "5px"}}>{gen.name}</p>{length - 1  !== ind && (<>|</>)}
      </>
))}
</div>
<Divider sx={{backgroundColor: "white"}} />
<div className={style.production}>
  <p style={{paddingRight: "25px"}}> Producenci:</p> 
  
{production_companies?.map((gen, ind, {length}) => (<>
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