import React from  "react";
import style from "./ColumnRight.module.scss";

const ColumnRight:React.FC = () => {
    return (
        <React.Fragment>
<div className={style.main} style={{paddingTop: "50px"}}>
<div
   className={style.border}
    ><h2 style={{fontSize:"28px", color: "black", borderLeft: "3px solid rgb(245,197,24)"}}>More to explore</h2></div><div></div>
<div style={{paddingTop: "50px"}}>

    <p>The Best Movies and Series to Watch in October
See the full list</p>
</div>
</div>
</React.Fragment>

    )
}

export default ColumnRight