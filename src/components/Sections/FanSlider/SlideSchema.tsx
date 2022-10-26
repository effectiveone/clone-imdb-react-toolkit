import react from "react"
import styles from "./FanSlider.module.scss"
import { Rating } from '@mui/material';
import apiConfig from "../../../redux/apiConfig"
import Link from 'next/link'


const SlideSchema = (props: any) =>  {
    console.log("image",props.img)
    return (

<div className={styles.slideContainer}>
<div style={styles.imageblock}>
<Link href={`/movie/${props.id}`}><img src={apiConfig.w500Image(props.img)}
width="180"
height="270px"

/></Link>
</div>
<div className={styles.box}>
<div>
    <div><Rating name="read-only" value={1} max={1} readOnly />{props.rank}</div>
<Rating name="no-value" max={1} value={null} 
/>
</div>
<div><Link href={`/movie/${props.id}`}><h3>{props.title}</h3></Link></div>
<div>Watch now</div>
<div>Trailer</div>
</div>
</div>

)
}

export default SlideSchema