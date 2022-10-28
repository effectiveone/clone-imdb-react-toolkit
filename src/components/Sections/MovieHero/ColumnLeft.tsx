import React from  "react";
import style from "./ColumnLeft.module.scss";
import apiConfig from "../../../redux/apiConfig"
import uuid  from "react-uuid"
const ColumnLeft:React.FC = ({cast}) => {
    return (
        <React.Fragment>
            
<div className={style.mains}>
<div
   className={style.border}
    ><h2 style={{fontSize:"28px", color: "black", borderLeft: "3px solid rgb(245,197,24)"}}>Top cast</h2></div><div></div>
{cast?.map((cas)=>
   (<React.Fragment
   key={uuid()}
   >

    <div style={{
        display: "grid",
       gridTemplateColumn: "repeat(2, 1fr)",
       justifyContent: "flex-start"
    }}
    >
        <div style={{gridColumn: "1"}}>
<img src={apiConfig.w500Image(cas.profile_path)} style={{ borderRadius: "100%"}} width="100px" height="100px"/>
</div><div style={{
    paddingLeft: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gridColumn: "2"
}}><p style={{color: "black"}}>{cas.name}</p>
<p>{cas.character}</p>
</div>

    </div>

</React.Fragment>))}
</div>
</React.Fragment>

    )
}

export default ColumnLeft