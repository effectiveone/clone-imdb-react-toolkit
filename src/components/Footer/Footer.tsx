import React from "react";
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import style from "./Footer.module.scss"
import { BsInstagram } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import { IconContext } from "react-icons";

   const Icon = [AiFillFacebook, AiOutlineTwitter, AiFillYoutube, BsInstagram, SiTiktok]
const Pages = [
   " Get the IMDb App", "Help",  "Site Index", "IMDbPro", "Box Office Mojo", "IMDb Developer"];
const PagesTwo = ["Press Room", "Advertising", "Jobs", "Conditions of Use", "Privacy Policy", "Interest-Based Ads"

]


const Footer: React.FC = () => {
    
return (
<>
<div className={style.Grid}>
    <div className={style.Row}>
        
       { Icon.map(Ic => (
             <IconContext.Provider value={{ color: "white",  size: "30px", className: "global-class-name",  }}>
             <div style={{padding: "0 10px 0 10px"}}>
             <Ic/>
             </div>
           </IconContext.Provider>
       ))}</div>
       <div className={style.Row}>
{Pages.map((page, i )=> (<p key={i} className={style.text} style={{padding: "0 10px 0 10px"}}>{page}</p>))}
    </div>
    <div className={style.Row}>
{PagesTwo.map((page, i )=> (<p key={i} style={{padding: "0 10px 0 10px"}} className={style.text}>{page}</p>))}
    </div>
    <div className={style.Row}> AMAZON COMPANY</div>
    <div className={style.Row}>1990-2022 by IMDb.com, Inc.</div>
</div>
</>)
}

export default Footer