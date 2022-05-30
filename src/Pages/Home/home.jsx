import React from 'react'
import Fotter from '../../Component/Fotter'

import Corousel2 from '../../Component/carousel'
import Header1 from '../../Component/Headers/subheader'
import Cardview from '../../Component/cardview'
//import Header from './Headers/header'
export default function Home() {
  return (
      <>

<div style={{height:"100vh",overflow:'auto'}}>
{/* <Header/> */}
    <Header1/> 
    <div style={{position:"relative",height:"2000px"}}>
    <Corousel2/>
    <div style={{position:"absolute",display:"flex",flexDirection:"row"}}>
    <Cardview/>
    </div>    
    </div>

    <Fotter/> 
   
</div>

</>
    
  )
}
