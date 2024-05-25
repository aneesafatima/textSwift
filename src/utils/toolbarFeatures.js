function traverseAndProcessNodesClasses(el, featureStyle){
   if(el.classList)
  el.classList.remove(featureStyle);
el.childNodes?.forEach(traverseAndProcessNodesClasses);
}


export function handleClick(e, featureMode, updateFeatureMode, featureStyle) {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    if (range.collapsed) {
      window.alert("No text is selected ❌. Please select text to style it.");
      return;
    }

    if (featureMode === "copy" || featureMode === "delete") {
      if (featureMode === "copy") {
        navigator.clipboard
          .writeText(range.toString())
          .then(() => updateFeatureMode("copied"))
          .catch(() => updateFeatureMode("error"));
      } else selection.deleteFromDocument();
      return;
    }

    const extractContents = range.extractContents();
    const newEl = document.createElement("span");

    if (featureMode === "fontFamily" || featureMode === "fontSize") {
      deletePreviousStyles(extractContents, featureMode);
      const style = document.querySelector(".dropdown-" + featureMode).value;
      newEl.style[featureMode] =
        featureMode === "fontSize" ? style + "px" : style;
      range.deleteContents();
      newEl.appendChild(extractContents);
    } else if (featureMode === "paste") {
      navigator.clipboard
        .readText()
        .then((val) => {
          newEl.textContent = val;
          updateFeatureMode("pasted");
        })
        .catch(() => updateFeatureMode("error !"));
    } else if (featureMode === "color" || featureMode === "backgroundColor") {
      deletePreviousStyles(extractContents, featureMode);
      newEl.style[featureMode] = e.target.value;
      newEl.appendChild(extractContents);
    } 
    else {
      e.target.classList.toggle("active");
      updateFeatureMode(!featureMode);
      if (featureMode) {
        console.log("remove styles");
        extractContents.childNodes.forEach((el) => {
          console.log(el)
          traverseAndProcessNodesClasses(el, featureStyle)
        });
        newEl.classList.add(`not-${featureStyle}`);
      } 
      else {
        console.log("add style");
        newEl.classList.add(featureStyle);
      }
      newEl.appendChild(extractContents);
    }
    range.deleteContents();
    range.insertNode(newEl);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

const deletePreviousStyles = (extractContents, featureMode) => {
  console.log(extractContents.childNodes);
  extractContents.childNodes.forEach((el) => {
    if (el.style) 
      el.style[featureMode] = "";
  });
};

export const handleDistractionMode = (e) => {
  const topBar = document.querySelector(".top-bar");
  const bottomBar = document.querySelector(".bottom-bar");
  topBar.classList.toggle("distraction-mode-toggle");
  bottomBar.classList.toggle("distraction-mode-toggle");
};

export const saveToLocalStorage = () => {
  const textEl = document.querySelector(".text-area");
  localStorage.setItem("savedText", textEl?.textContent);
};

export const handleResize = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
};
