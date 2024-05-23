import React, {  useContext, useState } from 'react';
import { Fonts, TextSize, Timer } from '.';
import { handleSpeechToText } from '../utils/helpers';
import { handleClick, handleDistractionMode, saveToLocalStorage, handleResize } from '../utils/toolbarFeatures';
import { globalState } from '../context/globalState';

function ToolBar() {
  const myContext = useContext(globalState);
  const {setStatus} = myContext;
  const [isSpeaking, setIsSpeaking] = useState(false);
  console.log(isSpeaking);
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
      <i className="fa-regular fa-floppy-disk toolbar-icons fa-xl" onClick={saveToLocalStorage}></i>
       <i className="fa-regular fa-copy toolbar-icons" onClick={(e) => handleClick(e,"copy", setStatus)}></i>
      <i className="fa-regular fa-paste toolbar-icons" onClick={(e) => handleClick(e,"paste", setStatus)}></i>
      <i class="fa-solid fa-up-down-left-right toolbar-icons" onClick={handleResize}></i>
      </div>

       <div className='text-editing-features'>
      <i className="fa-solid fa-bold toolbar-icons"  onClick={(e) =>  handleClick(e,isBold, setIsBold, "bold")}></i>
      <i className="fa-solid fa-italic toolbar-icons"  onClick={(e) => handleClick(e,isItalic, setIsItalic, "italic")}></i>
      <i className="fa-solid fa-underline toolbar-icons" onClick={(e) => handleClick(e,isUnderline, setIsUnderline, "underline")}></i>
      <i className="fa-solid fa-list toolbar-icons" onClick={(e) => handleClick(e,isUnorderedList , setIsUnorderedList, "unordered-list")}></i>
      <i className="fa-solid fa-list-ol toolbar-icons" onClick={(e) => handleClick(e,isOrderedList , setIsOrderedList,"ordered-list")}></i>
      <i className="fa-solid fa-align-left toolbar-icons" onClick={(e) => handleClick(e,isLeftAlign, setIsLeftAlign, "left-align")}></i>
      <i className="fa-solid fa-align-justify toolbar-icons" onClick={(e) => handleClick(e,isJustifyAlign, setIsJustifyAlign, "justify-align")}></i>
      <i className="fa-solid fa-align-right toolbar-icons" onClick={(e) => handleClick(e,isRightAlign , setIsRightAlign, "right-align")}></i>
      <i className="fa-solid fa-align-center toolbar-icons" onClick={(e) => handleClick(e,isCenterAlign , setIsCenterAlign, "center-align")}></i>
      <input type="color" className='toolbar-icons text-color' onInput={(e) => handleClick(e, "color")}/>
      <input type="color" className='toolbar-icons text-bg' onInput={(e) => handleClick(e, "backgroundColor")}/>
      </div>

       <div className='dropdown-features'>
      <Fonts/>
       <TextSize/> 
      </div> 
       <div className='extra-features'>
        <div className='timer'>
       <Timer/>
       </div>
       <i className="fa-regular fa-eye-slash toolbar-icons" onClick={handleDistractionMode}></i>
        <i className="fa-solid fa-microphone toolbar-icons" onClick={() => handleSpeechToText(isSpeaking, setIsSpeaking)}></i>
       <i className="fa-solid fa-trash toolbar-icons" onClick={(e) => handleClick(e,"delete")}></i>
       </div>
    </div>
  )
}

export default ToolBar



