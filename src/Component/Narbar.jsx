// import { click } from '@testing-library/user-event/dist/click';
// import { Link, useMatch, useResolvedPath} from "react-router-dom";
// import {Link} from 'react-router-dom'
import { useState } from "react"
import {Link} from 'react-router-dom'
// import React from 'react'
import { FaBars } from "react-icons/fa";


export default function Narbar() {
   const [isMobile,setIsMobile]=useState(false);
   const [header,setHeader,]=useState(false)
  const togglemenu = ()=>{
  setIsMobile(!isMobile);
  };
  const changeBackground = ()=>{
    if(window.scrollY >=50){
      setHeader(true)
    }else{
      setHeader(false)
    }
  };
    window.addEventListener('scroll', changeBackground);
  
  return (
    
    <header  className={header ? 'Header active' : 'header'} >
    <div className="front">
      <nav>
        <div className="logo">
      <h1>
        LOGO
      </h1>
      </div>
        <ul className={isMobile ? "nav-ink active" : "nav-ink"}> 
          <li><Link to="/service" className="active">Service</Link></li>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/contactus" className='link'>Contact</Link></li>
            <li><Link to="/aboutus" className='link'>About</Link></li>  

          <input type="text" className='head2 form-control' placeholder="Search" name="search"></input>
          <button type="submit" className=" head3 btn btn-default">Submit </button>
          
        </ul>
        <div className="icon" onClick={togglemenu}>
        <FaBars />
        </div> 
      </nav>
      {/* <a href="" id="ment"onClick={toggleresponsive}>&#9776;</a> */}
      {/* <div className="icon" onClick={togglemenu}>
        <FaBars />
        </div> */}
    </div>
    </header>
  )
}


// function CustomLink({to, children, ...props}) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({path: resolvedPath.pathname, end: true})

//   return (
//      <li className={isActive ? "active" : ""}>
//         <Link to={to} {...props}>
//         {children}
//         </Link>
//      </li>
// //   )
// }

 


    
        
    
  
