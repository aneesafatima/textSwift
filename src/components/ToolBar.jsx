import React, { useEffect, useContext, useState } from 'react';
import { globalState } from '../context/globalState';
import { Fonts, TextSize, Timer } from '.';
import { handleSpeechToText } from '../utils/helpers';
import { handleClick } from '../utils/toolbarFeatures';

function ToolBar() {

  // const MyContext = useContext(globalState);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isBold , setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline , setIsUnderline] = useState(false);
  const [isUnorderedList , setIsUnorderedList] = useState(false);
  const [isOrderedList , setIsOrderedList] = useState(false);
  const [isLeftAlign, setIsLeftAlign] = useState(false);
  const [isJustifyAlign, setIsJustifyAlign] = useState(false);
  const [isCenterAlign, setIsCenterAlign] = useState(false);
  const [isRightAlign , setIsRightAlign] = useState(false);
  

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
      <i class="fa-regular fa-copy toolbar-icons"></i>
      <i class="fa-solid fa-trash toolbar-icons"></i>
      <i className="fa-solid fa-bold toolbar-icons"  onClick={(e) =>  handleClick(e,isBold, setIsBold, "bold")}></i>
      <i class="fa-solid fa-italic toolbar-icons"  onClick={(e) => handleClick(e,isItalic, setIsItalic, "italic")}></i>
      <i class="fa-solid fa-underline toolbar-icons" onClick={(e) => handleClick(e,isUnderline, setIsUnderline, "underline")}></i>
      <i class="fa-solid fa-list toolbar-icons" onClick={(e) => handleClick(e,isUnorderedList , setIsUnorderedList, "unordered-list")}></i>
      <i class="fa-solid fa-list-ol toolbar-icons" onClick={(e) => handleClick(e,isOrderedList , setIsOrderedList,"ordered-list")}></i>
      <i class="fa-solid fa-align-left toolbar-icons" onClick={(e) => handleClick(e,isLeftAlign, setIsLeftAlign, "left-align")}></i>
      <i class="fa-solid fa-align-justify toolbar-icons" onClick={(e) => handleClick(e,isJustifyAlign, setIsJustifyAlign, "justify-align")}></i>
      <i class="fa-solid fa-align-right toolbar-icons" onClick={(e) => handleClick(e,isRightAlign , setIsRightAlign, "right-align")}></i>
      <i class="fa-solid fa-align-center toolbar-icons" onClick={(e) => handleClick(e,isCenterAlign , setIsCenterAlign, "center-align")}></i>
      <input type="color" className='toolbar-icons text-color' onInput={(e) => handleClick(e, "color")}/>
      <i class="fa-solid fa-fill toolbar-icons" onClick={() => handleClick()}></i>
      <Fonts/>
       <TextSize/>
        <i class="fa-solid fa-microphone toolbar-icons" onClick={() => handleSpeechToText(isSpeaking, setIsSpeaking)}></i>
 <div className='timer'>
<Timer/>
 </div>
    </div>
  )
}

export default ToolBar



