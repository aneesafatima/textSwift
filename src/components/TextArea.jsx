import React, { useEffect, useContext } from 'react'
import {globalState} from "../context/globalState"
import { handleBoldClick } from '../utils/helpers';
function TextArea() {
  const MyContext = useContext(globalState);
    const {setCurrentText, currentText} = MyContext;
  useEffect(() => [...document.getElementsByClassName("toolbar-icons")].forEach((el) => el.addEventListener("mousedown", (e) => e.preventDefault())))
  
  const handleContentChange = (e) =>{
    setCurrentText(e.target.textContent)
  }
  
  return (
    <div className='text-area-container'>
      <div contentEditable onInput={handleContentChange} className='text-area'>
        Text Area
      </div>
      
    </div>
  )
}

export default TextArea
