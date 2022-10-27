import React, {useState} from "react";
// import "./Watchlist.css";
import Rating from '@mui/material/Rating';
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
  import { BsFillGrid3X3GapFill, BsListTask } from 'react-icons/bs';
import uuid from 'react-uuid';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { favRemove } from "../redux/reducers/favSlice";
import { IconContext } from 'react-icons';
import apiConfig from "../redux/apiConfig";
import { Container } from '@mui/material';

const Watchlist:React.FC = () =>  {
  const [downAndUp, setDownAndUp] = useState(true)
  const [sortMethod, setSortMethod] = useState()
const handleChange = (e) => {
  setSortMethod(e.target.value)
}

  const data = useAppSelector((state) => state?.favorite?.fav);

  const dispatch = useAppDispatch();

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  console.log("data", data)


const sortingMethod = (a, b) => {
  a.title.localeCompare(b.title)
}

const array = data.slice()


function searchMethodFunc (a, b)   {
  if(downAndUp === true) {
  
    if (a[`${sortMethod}`] > b[`${sortMethod}`]) return -1;
    if (a[`${sortMethod}`] < b[`${sortMethod}`]) return 1; 
  
  }
  else { 
  
    if (b[`${sortMethod}`] > a[`${sortMethod}`]) return -1;
    if (b[`${sortMethod}`] < a[`${sortMethod}`]) return 1;
  }
   
   }

const favPartGrid = (
  <React.Fragment>
    <div style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px"}}>
 {    array?.sort(searchMethodFunc).map((data) => (<React.Fragment key={uuid()}>
 <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}><Link href={`/movie/${data?.id}`}><img src={`${apiConfig.originalImage(data?.poster_path)}`} width="100px" height="150px"/></Link>
 <h2 style={{color: "#5E84DF"}}>{data?.title}</h2>
</div>
 </React.Fragment>
  ))}
  </div>
    </React.Fragment>
)

const favPartList = (<React.Fragment>
  {    array?.sort(searchMethodFunc).map((data) => (<React.Fragment key={uuid()}>
<div style={{display: "grid", gridTemplateColumns: "52px 1fr", color: "dark", padding: "0 20px 0 20px"}}>
<div><Link href={`/movie/${data?.id}`}><img src={`${apiConfig.originalImage(data?.poster_path)}`} width="50px" height="90px"/></Link>
</div>
<div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "20px" }}>
<h2 style={{color: "#5E84DF"}}>{data?.title}</h2>
<div style={{borderRadius: "10px", border: "1px solid white", backgroundColor: "grey"}}>{data?.genres_id?.map((gen)=> (<p style={{color: "white"}}>gen</p>))}</div>
<span>{data?.release_date}  </span>
  <p>  { truncate(data?.overview, 100)}</p>
</div>
  </div>
  </React.Fragment>
  ))}
  </React.Fragment>
)


const selectSortMethod = (
  <div style={{paddingRight: "20px"}}>
  <select onChange={handleChange}>
    <option value="title">Alphabetical</option>
    <option value="vote_average">Imdb rating</option>
    <option value="release_date">Release date</option>
  </select>
  </div>
) 



const downUp = (
<>

<div onClick={ () => setDownAndUp(!downAndUp)} style={{paddingRight: "20px"}}>
{downAndUp ? (<><AiOutlineArrowDown/></>) : (<><AiOutlineArrowUp/></>) }


</div>
 </>
)



const [gridListOrder, setGridListOrder] = useState(true)

const gridList = (
  <>
  <div onClick={ ()=> setGridListOrder(!gridListOrder)}>
{gridListOrder ? (<><BsFillGrid3X3GapFill/></>) : (<><BsListTask/></>) }
</div>
</>
)


  return (
    <React.Fragment>
    <Navbar/>
    <div style={{backgroundColor: "#C5C5C1"}}>

    <Container>
<div style={{display: "grid", backgroundColor: "#F8F8F8", gridTemplateColumns: "2fr 1fr", paddingTop: "50px"}}>
<div>
  <div style={{backgroundColor: "#EEEEEE", display: "flex", flexDirection: "row",  justifyContent: "space-between", height: "50px", marginBottom: "20px", alignItems: "center", padding: "0 20px 0 20px"}}>
   <div style={{display: "flex", flexDirection: "row"}}>
   <p style={{paddingRight: "20px"}}> {data?.length}</p><h3>Titles</h3>
    </div> 
    <div style={{display: "flex", flexDirection: "row" }}>
    <p style={{padding: "0 20px 0 0px"}}>Sort by:</p> {selectSortMethod} {downUp}   {gridList}
      </div>
  </div>
  {gridListOrder ? favPartGrid : favPartList}</div>
<div style={{backgroundColor: "#F0F0F0", marginTop: "-50px"}}></div>
  </div>
  </Container>

</div>

  
      <Footer/>
   
    </React.Fragment>
  );
}

export default Watchlist;