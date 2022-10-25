import react from "react"
import styles from "./FanSlider.module.scss"
import { Rating } from '@mui/material';
import apiConfig from "../../../redux/apiConfig"

const SlideSchema = (props: any) =>  {
    console.log("image",props.img)
    return (

<div className={styles.slideContainer}>
<div style={styles.imageblock}>
<img src={apiConfig.w500Image(props.img)}
width="180"
height="270px"

/>
</div>
<div className={styles.box}>
<div>
    <div><Rating name="read-only" value={1} max={1} readOnly />{props.rank}</div>
<Rating name="no-value" max={1} value={null} 
/>
</div>
<div><h3>{props.title}</h3></div>
<div>Watch now</div>
<div>Trailer</div>
</div>
</div>

)
}

export default SlideSchema