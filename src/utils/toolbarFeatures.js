function traverseAndProcessNodesClasses(el, featureStyle) {
  console.log(el);
  if (el.classList) el.classList.remove(featureStyle);
  el.childNodes?.forEach((node) =>
    traverseAndProcessNodesClasses(node, featureStyle)
  );
}

export function handleClick(e, featureMode, updateFeatureMode, featureStyle) {
  const selection = window.getSelection();
  const newEl = document.createElement("span");
  if (featureMode === "paste") {
    navigator.clipboard
      .readText()
      .then((val) => {
        newEl.textContent = val;
        document.querySelector(".text-area").appendChild(newEl);
        updateFeatureMode("pasted");
      })
      .catch((err) => {
        updateFeatureMode("error !");
        console.log(err);
      });
  } else if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    if (range.collapsed) {
      window.alert("No text is selected ❌. Please select text to edit.");
      return;
    }
    if (featureMode === "copy") {
      navigator.clipboard
        .writeText(range.toString())
        .then(() => updateFeatureMode("copied"))
        .catch(() => updateFeatureMode("error"));
      return;
    }

    if (featureMode === "delete") {
      selection.deleteFromDocument();
      updateFeatureMode(document.querySelector(".text-area").textContent);
      return;
    }

    const extractContents = range.extractContents();

    if (featureMode === "fontFamily" || featureMode === "fontSize") {
      deletePreviousStyles(extractContents, featureMode);
      const style = document.querySelector(".dropdown-" + featureMode).value;
      newEl.style[featureMode] =
        featureMode === "fontSize" ? style + "px" : style;
      range.deleteContents();
      newEl.appendChild(extractContents);
    } else if (featureMode === "color" || featureMode === "backgroundColor") {
      deletePreviousStyles(extractContents, featureMode);
      newEl.style[featureMode] = e.target.value;
      newEl.appendChild(extractContents);
    } else {
      e.target.classList.toggle("active");
      updateFeatureMode(!featureMode);
      if (featureMode) {
        console.log("remove styles");
        extractContents.childNodes.forEach((el) => {
          traverseAndProcessNodesClasses(el, featureStyle);
        });
        newEl.classList.add(`not-${featureStyle}`);
      } else {
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
  extractContents.childNodes.forEach((el) => {
    if (el.style) el.style[featureMode] = "";
  });
};

export const handleDistractionMode = (e) => {
  const topBar = document.querySelector(".top-bar");
  const bottomBar = document.querySelector(".bottom-bar");
  topBar.classList.toggle("distraction-mode-toggle");
  bottomBar.classList.toggle("distraction-mode-toggle");
};

export const saveToLocalStorage = (setStatus) => {
  const textEl = document.querySelector(".text-area");
  localStorage.setItem("savedText", textEl?.textContent);
  setStatus("Saved to Local Storage");
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
