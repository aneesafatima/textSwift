export  function handleClick(e, featureMode, updateFeatureMode, featureStyle) {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);

    if(featureMode === "copy" || featureMode === "delete")
      {   if (featureMode === "copy")
        navigator.clipboard.writeText(range.toString()) ;
        else
        selection.deleteFromDocument();
          return
      } 
   
      const extractContents = range.extractContents();
      const newEl = document.createElement('span'); 

      if (featureMode === 'fontFamily' || featureMode === 'fontSize') {
      deletePreviousStyles(extractContents, featureMode)
      newEl.style[featureMode] = document.querySelector(
        '.dropdown-' + featureMode
      ).value + "px";
      newEl.appendChild(extractContents);
    } 
    else if(featureMode === "paste"){
          navigator.clipboard.readText()
          .then(val => newEl.textContent = val )
          .catch(err => console.log("Text could not be pasted !"))
        
    }
    
    else if (featureMode === 'color' || featureMode === 'backgroundColor') {
     deletePreviousStyles(extractContents, featureMode);
      newEl.style[featureMode] = e.target.value;
      newEl.appendChild(extractContents);
    } 
    
    else {
      e.target.classList.toggle('active');
      updateFeatureMode(!featureMode);
      if (featureMode)
        extractContents
          .querySelectorAll('.' + featureStyle)
          .forEach((el) => el.classList.remove(featureStyle));
      else newEl.classList.add(featureStyle);
      newEl.appendChild(extractContents);
    }

    range.insertNode(newEl);
    selection.addRange(range);
  }
}

const deletePreviousStyles = (extractContents, featureMode) => {
  extractContents.childNodes.forEach((el) => {
    if (el.style) el.style[featureMode] = '';
  })
}