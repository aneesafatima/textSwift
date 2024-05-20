

function handleRange(e, featureMode, updateFeatureMode, featureStyle){
    const selection = window.getSelection();
    if(selection.rangeCount > 0)
    {  const range = selection.getRangeAt(0);
      const extractContents = range.extractContents();
      const newEl = document.createElement("span");
    
      if(featureMode === "fontFamily" || featureMode === "fontSize"){
         extractContents.childNodes.forEach(el => el.style[featureMode] = "");
         newEl.style[featureMode] = document.querySelector("dropdown-" + featureMode).value;
         newEl.appendChild(extractContents);
      }
      else if(featureMode === "color" || featureMode === "backgroundColor"){
         console.log(e.target.value)
         extractContents.childNodes.forEach(el => {if(el.style) el.style[featureMode] = ""});
       newEl.style[featureMode] = e.target.value;
       newEl.appendChild(extractContents);
      }

     else{
      e.target.classList.toggle("active");
    updateFeatureMode(!featureMode);
    
    if(featureMode)
       extractContents.querySelectorAll('.' + featureStyle).forEach(el => el.classList.remove(featureStyle))
    else 
       newEl.classList.add(featureStyle);  
   
    newEl.appendChild(extractContents);
     }
    
    range.insertNode(newEl)
    selection.addRange(range);
}
}


export const handleClick =  (e, featureMode, updateFeatureMode, featureStyle) => {
    handleRange(e,featureMode, updateFeatureMode, featureStyle)
    }



