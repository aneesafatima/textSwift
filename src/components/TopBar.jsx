import React from 'react'
import { Link } from 'react-router-dom'
import {toggleDarkMode} from "../utils/helpers"
function TopBar() {
  return (
    <div className='top-bar'>
      <div className='heading'>  
        <h1 className='title'>textswift
        <span>Subtle.Seamless.Craft</span></h1>
      </div>
      <div>
      <i class="fa-regular fa-moon fa-sun fa-lg darkmode-icon" onClick={toggleDarkMode}></i>
       <Link to="/about" className='about-heading'>ABOUT</Link>
      </div>
    
    </div>
   
  )
}

export default TopBar
