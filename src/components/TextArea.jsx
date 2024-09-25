import React, { useEffect, useContext } from "react";
import { globalState } from "../context/globalState";
function TextArea() {
  const MyContext = useContext(globalState);
  const { setCurrentText } = MyContext;
  useEffect(() =>
    [...document.getElementsByClassName("toolbar-icons")].forEach((el) =>
      el.addEventListener("mousedown", (e) => e.preventDefault())
    )
  );

  const handleContentChange = (e) => {
    setCurrentText(e.target.textContent);
  };

  return (
    <div className="text-area-container">
      <div contentEditable onInput={handleContentChange} className="text-area">
        {localStorage.getItem("savedText")}
      </div>
    </div>
  );
}

export default TextArea;
