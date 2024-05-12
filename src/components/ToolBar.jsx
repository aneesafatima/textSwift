import React, { useEffect, useContext } from 'react';
import { globalState } from '../context/globalState';
import { Fonts, TextSize } from '.';
function ToolBar() {
  const MyContext = useContext(globalState);
  const {content, setContent} = MyContext;

  //REFACTOR THESE FUNCTIONS INTO 1

  const showFontsOptions = (e) =>{
    const fontsList = document.querySelector(".dropdown-fonts");
    const dropdownList = fontsList.querySelector(".dropdown-list");
    const dropdownListArrow = fontsList.querySelector(".fa-angle-down");
    dropdownList.classList.toggle("dropdown-list-show");
    dropdownListArrow.classList.toggle("fa-xmark")
  }
  const showNumberOptions = (e) =>{
    const textSizeList = document.querySelector(".dropdown-number")
    const dropdownList = textSizeList.querySelector(".dropdown-list");
    const dropdownListArrow = textSizeList.querySelector(".fa-angle-down");
    dropdownList.classList.toggle("dropdown-list-show");
    dropdownListArrow.classList.toggle("fa-xmark")
  }

  const handleBoldClick = (e) =>{

  }

  return (
    <div className='toolbar'>
      <i className="fa-solid fa-bold toolbar-icons" onClick={handleBoldClick}></i>
      <i class="fa-solid fa-italic toolbar-icons"></i>
      <i class="fa-solid fa-underline toolbar-icons"></i>
      <i class="fa-solid fa-list toolbar-icons"></i>
      <i class="fa-solid fa-list-ol toolbar-icons"></i>
      <i class="fa-solid fa-align-left toolbar-icons"></i>
      <i class="fa-solid fa-align-justify toolbar-icons"></i>
      <i class="fa-solid fa-align-center toolbar-icons"></i>
      <i class="fa-solid fa-droplet toolbar-icons"></i>
      <i class="fa-solid fa-fill toolbar-icons"></i>
      <div className='dropdown-fonts'>
        <button className='dropdown-toggle'> font family <i className="fa-solid fa-angle-down fa-2xs drop-arrow" onClick={showFontsOptions} style={{margin: "3px"}}></i></button>
       <Fonts/>
      </div>
      <div className='dropdown-number'>
      <button className='dropdown-toggle'> text size <i className="fa-solid fa-angle-down fa-2xs drop-arrow" onClick={showNumberOptions} style={{margin: "3px"}}></i></button>
         <TextSize/>
      </div>
      <div className='features'>
       FEATURES
      </div>
     
    </div>
  )
}

export default ToolBar
