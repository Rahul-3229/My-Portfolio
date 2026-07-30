import "./Section.css";
import "./SectionMedia.css";
import "./Section2Media.css";
import "./Section3Media.css";
import "./Section4Media.css";
import "./FinalSectionMedia.css";

import {useState,useEffect} from "react"

import BigSVG from "./Jsons/json19.json"

import MainAnimation from "./Jsons/json1.json";

import Lottie from "lottie-react";

import {useTypewriter, Cursor} from "react-simple-typewriter"; 
import {ReactTyped} from 'react-typed';


import Idea from "./Assets/Idea.jpg";

import Section2SVG from "./Jsons/json11.json";



import Section3SVG from "./Jsons/json9.json";


import SVG1 from "./Jsons/json27.json";
import SVG2 from "./Jsons/json2.json";
import SVG3 from "./Jsons/json8.json";
import SVG4 from "./Jsons/json25.json";

import Card from "./Card/Card.js";

import Cards from "./Assets/Cards.json";



import LogoCard from "./LogoCard.js";

import React from "./Assets/react1.svg";
import Vue from "./Assets/vuejs.svg";
import TailwindCSS from "./Assets/tailwindcss.png";
import MUI from "./Assets/mui3.png";
import SpringBoot from "./Assets/spring.png";
import AWS from "./Assets/aws.svg";
import TypeScript from "./Assets/typescript.svg";
import Git from "./Assets/git.svg";
import GitHub from "./Assets/github.svg";
import Postman from "./Assets/postman.svg";
import Figma from "./Assets/figma.svg";
import JavaScript from "./Assets/javascript.svg";
import Java from "./Assets/java.svg";
import Oracle from "./Assets/oracle.svg";
import Django from "./Assets/django.svg";





import Marquee from "react-fast-marquee";


import Section6SVG from "./Jsons/json33.json";


import Button from "./Button/Button.js";



const Head1="ERP SERVICES";
const Head2="DATABASE MANAGEMENT SERVICES";
const Head3="PROFESSIONAL SERVICES";
const Head4="PROJECT BASED SERIVCES";

const Para1="Our ERP management services focus on delivering expert support for Oracle E-Business Applications, ensuring smooth integration and peak performance.";
const Para2="Our DB Management Services encompass comprehensive lifecycle support & management for Oracle and Microsoft SQL Server databases.";
const Para3="Our Professional Services specialise in Staff Augmentation and supplemental support with onsite consultants on a Time and Materials basis.";
const Para4="DBAffinity provides this service for specialised DBA projects, which demand additional time and effort.";



export default function Section()
{


        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
      
        // Update the state on window resize
        useEffect(() => {
          const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setViewportHeight(window.innerHeight);
          };
      
          // Add event listener to resize event
          window.addEventListener('resize', handleResize);
      
          // Cleanup the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []); 

 
    

return (
    <>
    <div className="Section">
    <div className="temp">
    <h1>Viewport Resolution</h1>
      <p>Width: {viewportWidth}px</p>
      <p>Height: {viewportHeight}px</p>
    </div>



    {/* ////////////////////////////////////////////////////////////////////////// */}
    <div className="MiniSeection">
    <div className="Heading">
    <h1 className="Head font1">WHAT CAN I BUILD FOR YOU?</h1>
    <h2 className="TypeHead font2">
    <span>
    <ReactTyped
    strings={[
        "AWS CLOUD APPLICATIONS",
        "REACT.JS APPLICATIONS",
        "VUE.JS APPLICATIONS",
        "SPRING BOOT APPLICATIONS"
    ]} 
    typeSpeed={30}
    backSpeed={25}
    loop
    ></ ReactTyped>
    </span>
    </h2>
    </div>
    <div className="Lottie1">
    <Lottie animationData={MainAnimation} loop={true} />
    </div>
    </div>

    {/* //////////////////////////////////////////////////////////////////////     */}

    </div>







        <div className="Section2">
        <div className="MiniSection2">
        <div className="MiniSection2Image">
        <Lottie animationData={Section2SVG} loop={true} />
        </div>
        <div className="MiniSection2Text"> 
        <h1 className="MiniSection2Heading font2">
        WHAT WE DO ECHOES <span>THROUGHOUT THE INDUSTRY</span>
         </h1>
        <p className="MiniSection2Para font3">
        DBAffinity specializes in delivering Remote ERP Management Services and Database Management Services, tailored to meet the unique needs of small and mid-sized corporations, as well as local, state, and federal government agencies. Our mission is to help organizations optimize their IT operations while ensuring seamless system performance and reliability. By offering targeted solutions, we empower our clients to focus on their core business objectives, free from the burden of day-to-day IT management.
        </p>
        <p className="MiniSection2Para1 font3">
        Our ERP Management Services are specifically designed to support Oracle E-Business applications. We provide comprehensive support, ranging from routine maintenance to troubleshooting and optimization. In the realm of Database Management Services, we cover the entire lifecycle of Oracle and Microsoft SQL Server databases. From setup and configuration to performance tuning and backup strategies, our services are engineered to ensure robust database performance and security.
        </p>
        </div>
        </div>     
        </div>


       <div className="Section3">
        <div className="Section3Info">
        <h1 className="font2 Section3Heading">
        SERVICES WE OFFER
        </h1>
        <p className="font3 Section3Para">
        Illegal boxing promoter Turkish (Jason Statham) convinces gangster Brick Top (Alan Ford) to offer bets on bare-knuckle boxer Mickey (Brad Pitt) at his bookie business. When Mickey does not throw his first fight as agreed, an infuriated Brick Top demands another match. Meanwhile, gangster Frankie Four Fingers (Benicio del Toro) comes to place a bet for a friend with Brick Top's bookies, as multiple criminals converge on a stolen diamond that Frankie has come to London to sell.<br></br><br></br>Mickey Pearson is an American expatriate who became rich by building a highly profitable marijuana empire in London. When word gets out that he's looking to cash out of the business, it soon triggers an array of plots and schemes -- including bribery and blackmail -- from shady characters who want to steal his domain.    
        </p>
        <button className="font3 Section3Button">Explore</button>
        </div>
        <div className="Section3SVG">
        <Lottie animationData={Section3SVG} loop={true} />
        </div>
       </div>


        <div className="Section4">
            <h1 className="font2 Section4Heading">INDUSTRIES</h1>
            <div className="CardCollection">
                
            <Card Head={Head1} Para={Para1} jsonSRC={SVG1}/>
            <Card Head={Head2} Para={Para2} jsonSRC={SVG2}/>
            <Card Head={Head3} Para={Para3} jsonSRC={SVG3}/>
            <Card Head={Head4} Para={Para4} jsonSRC={SVG4}/>
        
        </div>




<h1 className="font2 Section5Head">WHAT AM I GOOD AT?</h1>


<div className="LogoContain">
<Marquee speed={60} gradient={false}>
<div className="Logos">

<LogoCard  Img={React}/>    
<LogoCard  Img={Vue}/>
<LogoCard  Img={Oracle}/>  
<LogoCard  Img={Java}/>  
<LogoCard  Img={SpringBoot}/>  
<LogoCard  Img={AWS}/>  
<LogoCard  Img={Django}/>

   
</div> 
</Marquee>     
</div> 

<div className="LogoContain LogoContain1">
<Marquee speed={60} gradient={false} direction="right">
<div className="Logos">

<LogoCard  Img={Figma}/>    
<LogoCard  Img={Postman}/>
<LogoCard  Img={Git}/>  
<LogoCard  Img={GitHub}/>  
<LogoCard  Img={MUI}/>  
<LogoCard  Img={TailwindCSS}/>  
   
</div> 
</Marquee>     
</div> 


<div className="FinalSection">

<div className="Section6SVGContain">
<Lottie animationData={Section6SVG} loop={true} />
</div>

<div className="FinalSectionInfo">
<h1 className="font2">TO EXPLORE, TO PIONEER, TO BUILD, TO BE INNOVATIVE,THAT'S <span>WHAT WE ARE</span></h1>
<p className="font3 FinalSectionPara">Nikhil Bhardwaj is a struggling businessman who loves Karishma Solanki, an actress. Nikhil believes that once committed to a girl, there should be no straying, so he asks Karishma's father, Devesh, to help him with ₹50 million before marriage to earn a contract. However, Devesh sidesteps his request, thus forcing him to prove his worth on his own.

Sometime later, Nikhil meets Meeta, Karishma's younger sister, whom he had a brief encounter with seven years ago. Meeta, an IITian in Chemical Engineering and PhD, is a super-intelligent geek with unusual habits and tics.</p>
{/* <Button Name="Talk to us" Color="#e0e0e0"/> */}

<button className="FinalSectionButton">Talk to us</button>

</div>

</div>

<div className="BigSVG">
<Lottie animationData={BigSVG} loop={true} />
</div>

<div className="FinalBox">

</div>
        </div>


    </>
)

}