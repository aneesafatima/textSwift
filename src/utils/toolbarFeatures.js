function handleRange(featureMode, updateFeatureMode, featureStyle){
    const selection = window.getSelection();
    if(selection.rangeCount > 0)
    {
    updateFeatureMode(!featureMode);
    const range = selection.getRangeAt(0);
    const extractContents = range.extractContents();
    const newEl = document.createElement("span");
    if(featureMode)
       extractContents.querySelectorAll('.' + featureStyle).forEach(el => el.classList.remove(featureStyle))
    else {
        //   if(featureStyle.includes("align"))
        //     newEl.style.display = "block";
           newEl.classList.add(featureStyle);  
    }

    newEl.appendChild(extractContents);
    range.insertNode(newEl)
    selection.addRange(range);
}
}


export const handleClick =  (featureMode, updateFeatureMode, featureStyle) => {
    handleRange(featureMode, updateFeatureMode, featureStyle)
    }

