import React, {  useState } from 'react';
import { Fonts, TextSize, Timer } from '.';
import { handleSpeechToText } from '../utils/helpers';
import { handleClick, handleDistractionMode } from '../utils/toolbarFeatures';

function ToolBar() {

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

  return (
    <div className='toolbar'>
      <div>
       <i class="fa-regular fa-copy toolbar-icons" onClick={(e) => handleClick(e,"copy")}></i>
      <i class="fa-regular fa-paste toolbar-icons" onClick={(e) => handleClick(e,"paste")}></i>
      </div>

       <div className='text-editing-features'>
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
      <input type="color" className='toolbar-icons text-color' onInput={(e) => handleClick(e, "backgroundColor")}/>
      </div>

       <div className='dropdown-features'>
      <Fonts/>
       <TextSize/> 
      </div> 
       <div className='extra-features'>
        <div className='timer'>
       <Timer/>
       </div>
       <i class="fa-regular fa-eye-slash toolbar-icons" onClick={handleDistractionMode}></i>
        <i class="fa-solid fa-microphone toolbar-icons" onClick={() => handleSpeechToText(isSpeaking, setIsSpeaking)}></i>
       <i class="fa-solid fa-trash toolbar-icons" onClick={(e) => handleClick(e,"delete")}></i>
       </div>
    </div>
  )
}

export default ToolBar



