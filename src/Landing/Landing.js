

import "./Landing.css";
import MainAnimation from "../Jsons/json1.json";
import Section2SVG from "../Jsons/json11.json";
import SVG1 from "../Jsons/json14.json";
import SVG2 from "../Jsons/json2.json";
import SVG3 from "../Jsons/json8.json";
import SVG4 from "../Jsons/json30.json";

import Lottie from "lottie-react";
import Marquee from "react-fast-marquee";
import {ReactTyped} from 'react-typed';
import {useState, useEffect} from 'react';
import AWSBadge from "../Assets/AWS-badge.png";
import ContactComponent from "../ContactComponent/ContactComponent.js";

import Contact1 from "../Assets/Contact1.json";
import Contact2 from "../Assets/Contact2.json";
import Contact3 from "../Assets/Contact3.json";
import Contact4 from "../Assets/Contact4.json";
import Contact5 from "../Assets/Contact5.json";
import Contact6 from "../Assets/Contact6.json";
import Contact7 from "../Assets/Contact7.json";
import Contact8 from "../Assets/Contact8.json";

import Card from "../Card/Card.js";
import LogoCard from ".././LogoCard.js";
import React from "../Assets/react1.svg";
import Vue from "../Assets/vuejs.svg";
import TailwindCSS from "../Assets/tailwindcss.png";
import MUI from "../Assets/muinew.svg";
import SpringBoot from "../Assets/FinalSpringBoot.png";
import AWS from "../Assets/aws.svg";
import TypeScript from "../Assets/typescript.svg";
import Git from "../Assets/gitnew.svg";
import GitHub from "../Assets/github.svg";
import Postman from "../Assets/postman.svg";
import Figma from "../Assets/figma.svg";
import JavaScript from "../Assets/js2.svg";
import Java from "../Assets/java.svg";
import Oracle from "../Assets/oracle.svg";
import BigSVG from "../Jsons/json19.json";
import Django from "../Assets/django.svg";



export default function Landing()
{


            const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
            const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
          
            const Head1="WEB-DESIGNING";
            const Head2="TURNING DESIGNS INTO CODE";
            const Head3="TALKING TO BACK-END CODE";
            const Head4="MANAGING DATABASES";

            const Para1="I collaborate closely with UI/UX designers to bring designs to life, and on occasion, I create my own designs using tools like Figma and Adobe XD. ";
            const Para2="The next step involves translating designs into responsive code using React or Vue.js, along with TailwindCSS or MUI, ensuring a seamless user experience across devices.";
            const Para3="The third step involves building Spring Boot-based RESTful APIs, enabling smooth communication between the frontend and backend. ";
            const Para4="The final step involves designing and optimizing database schemas, integrate them with Spring Data JPA or other ORM frameworks";


            // Update the state on window resize
              useEffect(() => {
              const handleResize = () => {
                setViewportWidth(window.innerWidth);
                setViewportHeight(window.innerHeight);
              };
          
              // Add event listener to resize event
              window.addEventListener('resize', handleResize);
              console.log(viewportWidth+","+viewportHeight);
              // Cleanup the event listener when the component unmounts
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []); 


    return (
        <>
        <div className="Landing">

        {/* <div className="temp">
        <h1>Viewport Resolution</h1>
        <p>Width: {viewportWidth}px</p>
        <p>Height: {viewportHeight}px</p>
        </div> */}


{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="Section1">
        <div className="Section1Heading">
            
            <h1 className="Section1Head font1">WHAT CAN I BUILD FOR YOU?
                <span className="Section1Typed font2">
                    <br />
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
                </span></h1>        
        </div>

        <div className="Section1SVG1">
        <Lottie animationData={MainAnimation} loop={true} />
        </div>
        </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}



            <div className="Section2">
                <div className="Section2SVG2">
                <Lottie animationData={Section2SVG} loop={true} />
                </div>
                <div className="Section2Text">
                <h1 className="font2 SectionHeading ">
                  <div className="SectionHeadingPhone"> GETTING TO KNOW ME:<br /><span className="SectionSubHeading font2">A LIFE IN TECH</span></div> 
                    <p className="font3 Section2SubText">
                    I am a full-stack developer with over five years of experience in developing web applications. I have created single-page applications using React and Vue.js, and I am highly skilled with front-end frameworks like Material UI and TailwindCSS. I have developed RESTful APIs using Spring Boot and managed database connections with Spring JPA, among other tasks. My previous role involved working with SQL and MySQL databases. Additionally, I am a certified AWS Developer Associate.
                </p>
                </h1>

                </div>
            </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="section3">
            <div className="section3Text">
               <div className="font2 section3Box">
                <h1 className="SectionHeading"><div className="SectionHeadingPhone">PROUDLY CERTIFIED:<br /><span className="font2 SectionSubHeading">AWS DEVELOPER ASSOCIATE</span></div>
                <p className="section3Subtext font3">I am a certified AWS Developer Associate with experience deploying Spring Boot-based RESTful APIs on AWS API Gateway. I have utilized Lambda functions for event-driven applications and employed SNS to notify clients about anomalies in their applications. Additionally, I have worked extensively with the AWS SDK, making API calls to S3 for file operations, deploying web applications on EC2, and handling various other AWS services.</p>
                </h1>
               </div>
            </div>
            <div className="section3SVG">
            <img src={AWSBadge} className="ImgPng1"></img>
            </div>
            </div>

    {/* ///////////////////////////////////////////////////////////////////////////////////////  */}


            <div className="section4">
            <h1 className="font2 SectionHeading section4Heading">WHAT EXACTLY CAN I CONTRIBUTE AS A <br /><span className="font2 SectionSubHeading section4SubHeading">FULL-STACK DEVELOPER?</span></h1>
            <div className="CardBox">
            <Card Head={Head1} Para={Para1} jsonSRC={SVG1}/>
            <Card Head={Head2} Para={Para2} jsonSRC={SVG4}/>
            <Card Head={Head3} Para={Para3} jsonSRC={SVG3}/>
            <Card Head={Head4} Para={Para4} jsonSRC={SVG2}/>
            </div>
            </div>


        {/* ///////////////////////////////////////////////////////////////////////////////////     */}

        
        <div className="section5">
        <h1 className="font2 SectionHeading section5Heading">WHAT ARE MY PROFICIENCIES? <br /><span className="font2 SectionSubHeading section5SubHeading">MY TECHNOLOGY STACK</span></h1>   

        <div className="section5LogoContain">
        <Marquee speed={60} gradient={false}>
        <div className="section5Logos">

        <LogoCard  Img={React}/>    
        <LogoCard  Img={Vue}/>
        <LogoCard  Img={TypeScript}/>  
        <LogoCard  Img={Django}/>  
        <LogoCard  Img={SpringBoot}/>  
        <LogoCard  Img={AWS}/>  

        </div> 
        </Marquee>     
        </div> 


        <div className="section5LogoContain1">
        <Marquee speed={60} gradient={false} direction="right">
        <div className="section5Logos1">

        <LogoCard  Img={Figma}/>    
        <LogoCard  Img={Postman}/>
        <LogoCard  Img={Git}/>  
        <LogoCard  Img={GitHub}/>  
        <LogoCard  Img={MUI}/>  
        <LogoCard  Img={TailwindCSS}/>  

        </div> 
        </Marquee>     
        </div>     


        </div>


        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="section6">
        <Lottie animationData={BigSVG} loop={true} />
        </div>    
        

        {/* ///////////////////////////////////// */}


        <div className="section7">
        <div className="section7ContactInfo">
        <p className="font3"><ContactComponent SVG={Contact4} link="" info="(380) 206-6260"/></p>
        <p className="font3"><ContactComponent SVG={Contact7} link="" info="rahulilipilla@gmail.com"/></p> 
        <p className="font3"><ContactComponent SVG={Contact3} link="https://www.linkedin.com/in/rahul-ilipilla-704621148/" info="Linked In"/></p>
        <p className="font3"><ContactComponent SVG={Contact1} link="https://github.com/Rahul3229" info="Git Hub"/></p>   
        </div>
        <div className="font2 section7control">NO ANGULAR COMPONENTS WERE HARMED IN MAKING OF THIS WEBSITE<br /><span className="font2 ContactSpanSection7">100% REACT.JS MADE</span></div>
        {/* <div className="font2 section7control">100% REACT.JS MADE</div> */}
        <div className="font3 section7control section7controlText ">© 2025 Rahul Ilipilla. All Rights Reserved</div>
        </div>        

        </div>
        </>
    )
}