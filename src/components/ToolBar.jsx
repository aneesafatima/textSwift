import React, { useEffect } from 'react'
import { Fonts } from '.'
function ToolBar() {
  const showOptions = (e) =>{
    const dropdownList = document.querySelector(".dropdown-list");
    dropdownList.style.display = "block";
    
  }
  return (
    <div className='toolbar'>
      <i className="fa-solid fa-bold toolbar-icons"></i>
      <i class="fa-solid fa-italic toolbar-icons"></i>
      <i class="fa-solid fa-underline toolbar-icons"></i>
      <i class="fa-solid fa-list toolbar-icons"></i>
      <i class="fa-solid fa-list-ol toolbar-icons"></i>
      <i class="fa-solid fa-align-left toolbar-icons"></i>
      <i class="fa-solid fa-align-justify toolbar-icons"></i>
      <i class="fa-solid fa-align-center toolbar-icons"></i>
      <i class="fa-solid fa-droplet toolbar-icons"></i>
      <i class="fa-solid fa-fill toolbar-icons"></i>
      <div className='dropdown'>
        <button className='dropdown-toggle'> select font <i className="fa-solid fa-angle-down fa-2xs" onClick={showOptions} style={{margin: "3px"}}></i></button>
       <Fonts/>
      </div>
    </div>
  )
}

export default ToolBar
