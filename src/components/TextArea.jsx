import React, { useEffect, useContext } from 'react'
import {globalState} from "../context/globalState"
import { handleBoldClick } from '../utils/helpers';
function TextArea() {
  const MyContext = useContext(globalState);
    const {setCurrentText} = MyContext;
    const text = document.querySelector(".text-area")?.textContent;
  useEffect(() => [...document.getElementsByClassName("toolbar-icons")].forEach((el) => el.addEventListener("mousedown", (e) => e.preventDefault())))
  
  const handleContentChange = (e) =>{
    setCurrentText(e.target.textContent)
  }
  
  return (
    <div className='text-area-container'>
      <div contentEditable onInput={handleContentChange} className='text-area'>
      {localStorage.getItem("savedText")}
      </div>
    </div>
  )
}

export default TextArea
