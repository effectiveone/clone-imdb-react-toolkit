import React from "react"
import {  useAppSelector } from '../../../hooks/reduxHooks';
import Link from 'next/link'

const CategoryPanel:React.FC = () => {
    const { category, loading } = useAppSelector(state=>state.category);

const len = category?.genres?.length
    return (
<>

<div style={{width: "300px",  backgroundColor: "#F2F2F1", borderRadius: "2%", display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "20px"}}>
<h2 style={{color: "#A5851E", paddingTop: "20px", alignSelf: "flex-start", fontSize: "24px"}}>Category Search</h2>
<span style={{ fontSize: "16px", padding: "20px 10px 20px 0px", marginRight: "80px"}}>Search for "spider" within a specific category:</span>

{category?.genres?.map((cat, ing) => {
    const Id = cat.id
    return(
        <React.Fragment key={Id}>
      
       <Link href={`/category/${cat.id}`}><p style={{color: "black", display: "flex", flexDirection: "column"}} >{cat.name}</p></Link><br/>
       </React.Fragment>
    )
})}
</div>

</>
    )
}
export default CategoryPanel