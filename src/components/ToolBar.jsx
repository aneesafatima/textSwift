import React, { useEffect, useContext, useState } from 'react';
import { globalState } from '../context/globalState';
import { Fonts, TextSize } from '.';
import { handleSpeechToText, handleTimerUI, handleSelectedTime } from '../utils/helpers';
import { handleClick } from '../utils/toolbarFeatures';

function ToolBar() {

  // const MyContext = useContext(globalState);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [timerMins, setTimerMins] = useState([25, 45, 60]);
  const [isBold , setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline , setIsUnderline] = useState(false);
  const [isUnorderedList , setIsUnorderedList] = useState(false);
  const [isOrderedList , setIsOrderedList] = useState(false);
  const [isLeftAlign, setIsLeftAlign] = useState(false);
  const [isJustifyAlign, setIsJustifyAlign] = useState(false);
  const [isCenterAlign, setIsCenterAlign] = useState(false);
  const [isRightAlign , setRightAlign] = useState(false);
  

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
 



  return (
    <div className='toolbar'>
      <i className="fa-solid fa-bold toolbar-icons"  onClick={() =>  handleClick(isBold, setIsBold, "bold")}></i>
      <i class="fa-solid fa-italic toolbar-icons"  onClick={() => handleClick(isItalic, setIsItalic, "italic")}></i>
      <i class="fa-solid fa-underline toolbar-icons" onClick={() => handleClick(isUnderline, setIsUnderline, "underline")}></i>
      <i class="fa-solid fa-list toolbar-icons" onClick={() => handleClick(isUnorderedList , setIsUnorderedList)}></i>
      <i class="fa-solid fa-list-ol toolbar-icons" onClick={() => handleClick(isOrderedList , setIsOrderedList)}></i>
      <i class="fa-solid fa-align-left toolbar-icons" onClick={() => handleClick(isLeftAlign, setIsLeftAlign, "left-align")}></i>
      <i class="fa-solid fa-align-justify toolbar-icons" onClick={() => handleClick(isJustifyAlign, setIsJustifyAlign, "")}></i>
      <i class="fa-solid fa-align-center toolbar-icons" onClick={() => handleClick(isCenterAlign , setIsCenterAlign, "center-align")}></i>
      <i class="fa-solid fa-droplet toolbar-icons" onClick={() => handleClick()}></i>
      <i class="fa-solid fa-fill toolbar-icons" onClick={() => handleClick()}></i>
      <div className='dropdown-fonts'>
        <button className='dropdown-toggle'> font family <i className="fa-solid fa-angle-down fa-2xs drop-arrow" onClick={showFontsOptions} style={{margin: "3px"}}></i></button>
       <Fonts/>
      </div>
      <div className='dropdown-number'>
      <button className='dropdown-toggle'> text size <i className="fa-solid fa-angle-down fa-2xs drop-arrow" onClick={showNumberOptions} style={{margin: "3px"}}></i></button>
         <TextSize/>
      </div>
        <i class="fa-solid fa-microphone toolbar-icons" onClick={() => handleSpeechToText(isSpeaking, setIsSpeaking)}></i>
 <div className='timer'>
 
 <div className='timers-container'>
  <i class="fa-regular fa-hourglass toolbar-icons" onClick={handleTimerUI}></i>
  { Array.isArray(timerMins) ? 
    timerMins.map((el,index) =>(<div onClick={(e) => handleSelectedTime(e,index, setTimerMins, timerMins) } key ={index} >
    {el}
    </div>)) : <div className='selected-time'>{timerMins}</div>
}
 </div>
 </div>
    </div>
  )
}

export default ToolBar

