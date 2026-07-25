import "./Nav.css";

import Button from "./Button/Button.js"

import { Link } from "react-router-dom";

import {useState, useEffect} from 'react';

import Lottie from "lottie-react";

import NavSVG from "./Jsons/NavSVG4.json";

export default function Nav()
{

    const url="https://resumerahul.s3.us-east-2.amazonaws.com/Rahul_I.pdf"

    const [NavState,setNavState]=useState(false);

    const resumeOpen=()=>
    {
        window.open(url);
    }

    return (
<>

<div className="Nav">

        <Link to="/">    <button className="NavButton ButtonNav font3">Home</button>   </Link>

        
        <Link to="/Contact">    <button className="NavButton font3">Contact Me</button>   </Link>

        
        <Link to="/Experience">    <button className="NavButton font3">Experience</button>   </Link>

        {/* <button className="NavButton font3" onClick={resumeOpen}>
        <a href="">   Get My Resume   </a> 
        </button> */}

        <a href="https://resumerahul1.s3.us-east-2.amazonaws.com/Rahul_I+(1).pdf"> <button className="NavButton font3">Get My Resume</button>  </a>     

</div>

<div className= {`font3 SmallNav ${NavState ? 'NavMainButtonActive' : 'NavMainButtonInActive'}`} onClick={()=>setNavState(!NavState)}> 

<div className="NavSVG">
<Lottie animationData={NavSVG} loop={true} /> 
</div>

</div>
<div className={` ${NavState ? 'NavActive' : 'NavInActive'}`}>  
   <div className="PhoneNav">
    <button className={`NavButton ButtonNav font3 IphoneNavButton ${NavState ? 'IphoneNavButtonActive' : 'IphoneNavButtonInActive'}`} onClick={()=>setNavState(!NavState)}><Link to="/">  Home</Link></button>
     <button className={`NavButton ButtonNav font3 IphoneNavButton ${NavState ? 'IphoneNavButtonActive' : 'IphoneNavButtonInActive'}`} onClick={()=>setNavState(!NavState)}><Link to="/Contact">Contact Me</Link></button>
      <button className={`NavButton ButtonNav font3 IphoneNavButton ${NavState ? 'IphoneNavButtonActive' : 'IphoneNavButtonInActive'}`} onClick={()=>setNavState(!NavState)}><a href="https://resumerahul1.s3.us-east-2.amazonaws.com/Rahul_I+(1).pdf">Resume</a>  </button> 
   </div>

</div>

</>
    )
}