import {useState, useEffect} from 'react';

import "./Experience.css";
import Lottie from "lottie-react";
import {ReactTyped} from 'react-typed';
import CodingCard from "./CodingCard";
import React from "../Assets/react3.svg";
import Vue from "../Assets/vuejs.svg";
import TailwindCSS from "../Assets/tailwindcss.png";
import JavaScript from "../Assets/js2.svg";
import Oracle from "../Assets/oracle.svg";
import MicrosoftSQL from "../Assets/micro2.svg";
import SpringBoot from "../Assets/spring.png";
import AWS from "../Assets/FinalSVG.svg";
import MySQL from "../Assets/mysql1.svg";
import MUI from "../Assets/muinew.svg";
import Git from "../Assets/git.svg";
import GitHub from "../Assets/github.svg";
import GitHub1 from "../Assets/gitnew.svg";
import CSS from "../Assets/css.svg";

import Marquee from "react-fast-marquee";

import SmallVue from "../Assets/smallvue.png";
import SmallTailwindCSS from "../Assets/smalltailwindcss.png";
import SmallJavaScript from "../Assets/smalljavascript.png";
import SmallReact from "../Assets/smallreact.png";
import SmallFigma from "../Assets/smallfigma.png";
import SmallVite from "../Assets/smallvite.png";
import SmallVite1 from "../Assets/smallvite1.png";
import SmallVite2 from "../Assets/smallvite2.png";
import SmallVite3 from "../Assets/smallvite3.png";


import SmallOracle from "../Assets/smallOracle.svg";
import SmallPutty from "../Assets/smallputty.png";
import SmallSql from "../Assets/smallsql1.png";
import SmallLinux from "../Assets/smallLinux.svg";
import SmallPowerShell from "../Assets/smallPowerShell.png";
import SmallJira from "../Assets/smallJira.svg";

import SmallSpring from "../Assets/smallSpring2.png";
import SmallMui from "../Assets/mallmui.png";
import ReactRouter from "../Assets/React-Router.svg"
import SmallReactRouter from "../Assets/smallReactRouter.svg";
import SmallMySQL from "../Assets/sqlmy.png";
import SmallRedux from "../Assets/smallRedux.svg";
import Redux from "../Assets/redux.svg";
import SmallAWS from "../Assets/finalAWS.png";
import SmallSpringJPA from "../Assets/smallSpringJPA1.svg";
import SpringJPA from "../Assets/spring-3.svg";
import SmallJSON from "../Assets/smalljson.png";
import SmallXML from "../Assets/smallXML.png";
import SmallXD from "../Assets/smallxd.png";
import SmallXD1 from "../Assets/smallxd1.png";
import SmallPSD from "../Assets/smallphotoshop.png";
import SmallCSS from "../Assets/smallcss.png";
import SmallCSS1 from "../Assets/smallCSS1.png";
import SmallHTML from "../Assets/smallHTML1.png";
import SmallJava from "../Assets/smallJava.png";
import SmallPostman from "../Assets/smallPostman.png";
import SmallGit from "../Assets/smallgit.png";
import SmallGitHub from "../Assets/smallgithub.png";

import GifSource from "./CodingGifCard.js";

import Vue1 from "../Assets/Vue1.svg";

import VueGif from "../Assets/vue.gif";
import ReactGif from "../Assets/react.gif";
import JavaScriptGif from "../Assets/javascript.gif";
import TailwindCSSGif from "../Assets/tailwindcss.gif";
import TailwindCSSGif1 from "../Assets/tailwind.gif";
import SQL2 from "../Assets/sql2.gif";
import SQL1 from "../Assets/mssql.gif";
import React_Router from "../Assets/React-router2.gif";
import React_Router1 from "../Assets/react-router.gif";
import AWS1 from "../Assets/AWS11.gif";
import AWS2 from "../Assets/AWS22.gif";
import AWS3 from "../Assets/AWS33.gif";
import MUIGif from "../Assets/mui.gif";
import Spring1 from "../Assets/spring1.gif";
import Spring2 from "../Assets/spring2.gif";
import Spring3 from "../Assets/spring3.gif";
import Spring4 from "../Assets/spring4.gif";
import GitHubGif1 from"../Assets/GitHub.gif";
import GitHubGif2 from"../Assets/GitHub1.gif";
import GitHubGif3 from"../Assets/GitHub2.gif";
import GitHubGif4 from"../Assets/GitHub3.gif";
import Git1 from"../Assets/Git1.gif";
import Git2 from"../Assets/Git2.gif";
import Git3 from"../Assets/Git3.gif";


export default function Experience ()
{

    const Code1='export default function Card(){<> <div className="CardContainer"><div className="CardItem1"><h1 className="CardHeading font1">Intersteller</h1><h2 className="CardSubHeading font2">Sir Christopher Nolan</h2></div><div className="CardItem2"><h1 className="CardHeading font1">Dark Knight</h1><h2 className="CardSubHeading font2"></h2></div><div className="CardItem2"></div></div></>}'
    const Color1="#e0e0e0"
    const Colour1="#380807";
    const Delay1=50;
    const Pretext1="";


    const Code2="new Vue({el:'#app', data: {data: null, loading: false, error: null}, methods:{fetchData:function(){this.loading = true; this.error = null; fetch ('https://Stak_Industries/Mark_I/flight_data.json').then(response=>{if(!response.ok){throw new Error('Error 404');}return response.json();})}}});"
    const Color2="#f1c40f"
    const Colour2="#34495e";
    const Delay2=200;
    const Pretext2="";


    const Code3='<div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"><h1 className="text-3xl font-bold text-center text-gray-800 mb-4">'
    const Color3="#1c2833"
    const Colour3="#95a5a6";
    const Delay3=150;
    const Pretext3='export default function App(){return(<div className="min-h-screen bg-gray-100 flex items-center justify-center">';


    const Code4="const url='https://jsonplaceholder.typicode.com/posts' fetch(url).then(response => { if (!response.ok){ throw new Error('Network response was not ok')}return response.json();})"
    const Color4="#CCFF00"
    const Colour4="#000000";
    const Delay4=230;
    const Pretext4=".then(data => { console.log(data); }).catch(error => {console.error('Fetch error:',error);});";



    const Code5="WHERE d.department_id = e.department_id AND d.department_name = 'IT');"
    const Color5="#9e9e9e "
    const Colour5="#455a64 ";
    const Delay5=200;
    const Pretext5=">>" +" "+" "+" "+"SELECT employee_id, first_name, last_name FROM employees e WHERE EXISTS (SELECT 1 FROM departments d"


    const Code6="SELECT e.EmployeeID, e.FirstName, e.LastName, d.DepartmentName FROM Employee e FULL OUTER JOIN Departments d ON e.DepartmentID = d.DepartmentID";
    const Color6="#ffca28"
    const Colour6="#212121";
    const Delay6=200;
    const Pretext6=""

            const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
            const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
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

        {/* <div className="temp">
        <h1>Viewport Resolution</h1>
        <p>Width: {viewportWidth}px</p>
        <p>Height: {viewportHeight}px</p>
        </div> */}

        <div className="Experience1"> 
        <div className="Experience1Coding1">
        {/* <CodingCard svg ={React} color={Color1} delay={Delay1} pretext={Pretext1} compiler={Colour1} code={Code1} width1="0" cardwidth="15" cardheight="35"/> */}

        <GifSource GifSource={VueGif} GifImage={Vue1} GifWidth="110" GifLeft="-3" />
        <GifSource GifSource={ReactGif} GifImage={React} GifWidth="110" GifTop="" GifLeft="" />
        <GifSource GifSource={TailwindCSSGif} GifImage={TailwindCSS} />
        <GifSource GifSource={JavaScriptGif} GifImage={JavaScript}/>

        </div>
        <div className="Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">DBAFFINITY<br /><span className="font2 HeadingSpaceSpan">FRONT-END DEVELOPER</span><span className="HeadingSpaceSpan1">REACT.JS AND VUE.JS</span></h1>
       
        {/* <p className="font3 HeadingDate">Febuary 2024 - Present <br /> <span className="PM">santosh.majji@dbaffinity.com<br />(Project Manager)</span></p>  */}
        <p className="font3 HeadingDate">Febuary 2024 - Present <br /></p> 

        <div className="font3 ExperienceKeyPoints">
        <p>•    Developed and maintained single-page applications (SPAs) using Vue.js, Vuex, and Vue Router.</p>
        <p>•    Migrated legacy front-end code to Vue 3 and utilized Git commands like git commit, git merge, git rebase, and git checkout to handle version control and resolve conflicts.</p>
        <p>•    Translated Figma designs into fully responsive and pixel-perfect web layouts using Tailwind CSS.</p>
        <p>•	Led the migration of an entire web application from Bootstrap to Tailwind CSS, improving the maintainability, customization, and responsiveness of the codebase.</p>
        <p>•	Built and delivered multiple React.js-based Proof of Concept (PoC) applications to demonstrate feasibility and validate project ideas with stakeholders.</p>
        <p>•	Handled API requests (GET, POST, PUT, DELETE) and managed asynchronous data fetching with JavaScript Promises and async/await.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        <div className="ExperienceLogos">
        <img src={SmallGit} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Git</h1>    
        </div>     
        <div className="ExperienceLogos">
        <img src={SmallFigma} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Figma</h1>    
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallVue} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Vue.js</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallReact} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React.js</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallTailwindCSS} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">TailwindCSS</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJavaScript} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">JavaScript</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallVite2} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Vite</h1>
        </div> 
        </Marquee>  
        </div> 
        <a href='https://resumerahul1.s3.us-east-2.amazonaws.com/Rahul_I+(1).pdf'><button className="ExperienceButton font3">Know More</button> </a>   
        </div>   
        </div>
        </div>


        <div className="Experience2">  
        <div className="Experience2Coding2">
     
        <GifSource GifSource={SQL1} GifImage={MicrosoftSQL} GifWidth="100" GifTop="0" GifLeft="0" GifCardWidth="35" GifCardHeight=""/>
        <GifSource GifSource={SQL2} GifImage={Oracle} GifWidth="110" GifTop="" GifLeft="" GifCardWidth="35" GifCardHeight=""/>
     
        </div>  
        <div className="Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">ADS<br /><span className="font2 HeadingSpaceSpan">SQL DEVELOPER INTERN</span><span className="HeadingSpaceSpan1 HeadingSpaceSpan2">ORACLE AND MICROSOFT SQL</span></h1>
       
        {/* <p className="font3 HeadingDate">January 2023- March 2023<br /> <span className="PM">ptammina@yahoo.com<br />(Database Manager)</span></p>  */}
        <p className="font3 HeadingDate">January 2023- March 2023<br /></p> 
  
        <div className="font3 ExperienceKeyPoints">
        <p>•    Designed and maintained database schemas, including creating tables, relationships, indexes, and views, to ensure proper data structure and integrity.</p>
        <p>•	  Developed and maintained EIS (Executive Information System) reports with interactive dashboards to deliver high-level business insights to top executives, enabling data-driven decision-making.</p>
        <p>•	  Performed query optimization by analyzing execution plans, indexing strategies, and partitioning, resulting in improved query performance by up to 40%.</p>
        <p>•    Managed and maintained databases on remote Linux/Unix servers by securely connecting through PuTTY for tasks such as backups, restores, and performance troubleshooting.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        <div className="ExperienceLogos">
        <img src={SmallOracle} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Oracle</h1>    
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSql} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Microsoft SQL</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallPutty} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Putty</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallLinux} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Linux</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJira} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Jira</h1>
        </div> 
        </Marquee>  
        </div> 
        <a href='https://resumerahul1.s3.us-east-2.amazonaws.com/Rahul_I+(1).pdf'><button className="ExperienceButton font3">Know More</button> </a>   
        </div>   
        </div>
        </div>



        <div className="Experience3"> 
        <div className="Experience3Coding3">
       
       <GifSource GifSource={ReactGif} GifImage={React} GifWidth="110" GifTop="" GifLeft="" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={MUIGif} GifImage={MUI} GifWidth="100" GifTop="" GifLeft="" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={React_Router} GifImage={ReactRouter} GifWidth="190" GifHeight="40" GifTop="-1" GifLeft="-80" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={Spring3} GifImage={SpringBoot} GifWidth="170" GifTop="" GifLeft="-2" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={AWS2} GifImage={AWS} GifWidth="100" GifTop="" GifLeft="" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={Spring2} GifImage={SpringJPA} GifWidth="250" GifTop="" GifLeft="-60" GifCardWidth="15" GifCardHeight="25"/>


        </div>


        <div className="Experience3Text Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">ARETE IT SERVICES PVT<br /><span className="font2 HeadingSpaceSpan">FULL-STACK DEVELOPER</span><span className="HeadingSpaceSpan1 HeadingSpaceSpan1">REACT.JS AND SPRING BOOT</span></h1>
       
        <p className="font3 HeadingDate">January 2023- March 2023<br /> </p> 

        <div className="font3 ExperienceKeyPoints">
        <p>•	Converted Adobe XD designs into a responsive single-page application using React.js, enhancing user experience with dynamic transitions.</p>
        <p>•	Implemented React Router for smooth, client-side navigation and used React Redux for efficient state management across components.</p>
        <p>•    Utilized React hooks (useState, useEffect, useContext) to manage state and side effects in a clean, functional style.</p>
        <p>•	Designed responsive UIs with Material UI, customizing components to meet project requirements.</p>
        <p>•    Developed Spring Boot microservices with RESTful APIs, leveraging Spring MVC and Spring Data JPA for backend operations.</p>
        <p>•    Built CRUD operations and integrated MySQL databases using Hibernate ORM.</p>
        <p>•    Worked in Agile teams to deliver Spring Boot applications and deployed them securely on AWS EC2 with RDS for high availability and scalability.</p>
        <p>•    Utilized Postman to test and validate RESTful APIs, ensuring proper functionality and performance of all endpoints.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        <div className="ExperienceLogos">
        <img src={SmallXD} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Adobe XD</h1>    
        </div>     
        <div className="ExperienceLogos">
        <img src={SmallMui} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Material UI</h1>    
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSpring} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Spring Boot</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSpringJPA} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Spring JPA</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJava} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Java</h1>
        </div>   
        <div className="ExperienceLogos">
        <img src={SmallPostman} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Postman</h1>
        </div>   
        <div className="ExperienceLogos">
        <img src={SmallReact} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React.js</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallReactRouter} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React Router</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallRedux} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React Redux</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallMySQL} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">MySQL</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallAWS} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">AWS</h1>
        </div> 
        
        </Marquee>  
        </div> 
        <a href='https://resumerahul1.s3.us-east-2.amazonaws.com/Rahul_I+(1).pdf'><button className="ExperienceButton font3">Know More</button> </a>      
        </div>   
        </div>    

        </div>




        <div className="Experience4"> 
        <div className="Experience4Coding4">
        
       <GifSource GifSource={ReactGif} GifImage={React} GifWidth="110" GifTop="" GifLeft="" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={AWS3} GifImage={AWS} GifWidth="200" GifTop="" GifLeft="" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={React_Router} GifImage={ReactRouter} GifWidth="135" GifTop="" GifLeft="" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={Spring3} GifImage={SpringBoot} GifWidth="170" GifTop="" GifLeft="-2" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={Git1} GifImage={Git} GifWidth="100" GifTop="" GifLeft="0" GifCardWidth="15" GifCardHeight="25"/>
       <GifSource GifSource={GitHubGif4} GifImage={GitHub} GifWidth="230" GifTop="" GifLeft="0" GifCardWidth="15" GifCardHeight="25"/>
        
        </div>
        <div className="Experience3Text Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">CONCENTRIX CATALYST<br /><span className="font2 HeadingSpaceSpan">FULL-STACK DEVELOPER</span><span className="HeadingSpaceSpan4">REACT.JS AND SPRING BOOT</span></h1>
       
        <p className="font3 HeadingDate">January 2018- December 2019<br /></p> 

        <div className="font3 ExperienceKeyPoints">
        <p>•	Developed and maintained several React-based web applications using class components to manage state and lifecycle methods..</p>
        <p>•    Designed and implemented pixel-perfect React components from PSD designs, maintaining consistent layout using CSS and responsive techniques.</p>
        <p>•    Managed global application state with Redux, using reducers to update the state tree and Fetch API for seamless API integrations.</p>    
        <p>•    Utilized GitHub for version control, employing branching, pull requests, and code reviews for collaborative development.</p>
        <p>•    Leveraged Git branches to implement a structured workflow, creating feature branches for new functionality and releasing branches for production deployments.</p>
        <p>•    Built and deployed scalable Spring Boot microservices, implementing JPA for efficient CRUD operations and using @Transactional for ACID compliance.        </p>
        <p>•    Integrated H2 in-memory database for fast unit testing and automated tests with JUnit, achieving 85% test coverage and reducing bugs by 50%.</p>
        <p>•    Worked with XML and JSON for data exchange between front-end and back-end systems, ensuring seamless communication between services and applications.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        
        <div className="ExperienceLogos">
        <img src={SmallReact} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React.js</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallReactRouter} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React Router</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallRedux} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React Redux</h1>
        </div> 
       
        <div className="ExperienceLogos">
        <img src={SmallSpring} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Spring Boot</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSpringJPA} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Spring JPA</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJava} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Java</h1>
        </div>     
        <div className="ExperienceLogos">
        <img src={SmallJSON} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">JSON</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallXML} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">XML</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallHTML} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">HTML</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallCSS} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">CSS</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJavaScript} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">JavaScript</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallPSD} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Photoshop</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallGitHub} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Git Hub</h1>
        </div> 
        </Marquee>  
        </div> 
        <a href='https://resumerahul1.s3.us-east-2.amazonaws.com/Rahul_I+(1).pdf'><button className="ExperienceButton font3">Know More</button> </a>   
        </div>   
        </div>   
        </div>
        
        <div className="ExperiencePadding">

        </div>

        </>
    )
}