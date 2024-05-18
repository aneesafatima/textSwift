import timerFinishedAudio from '../assets/timerfinished.mp3'

let SpeechRecognition;


window.addEventListener("DOMContentLoaded", () => {
   SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

})

export const toggleDarkMode = () =>{
    const body = document.body;
    body.classList.toggle("dark-mode");
    const icon = document.querySelector(".darkmode-icon");
    icon.classList.toggle("fa-moon")
  }


export const allFontsLink = (arr) =>{
  const linkURL = `http://fonts.googleapis.com/css?family=${arr.join('|')}`
 const linkElement = document.createElement("link");
 linkElement.href = linkURL;
 linkElement.type = "text/css"
 linkElement.rel = "stylesheet"
 document.head.appendChild(linkElement);
}

//HANDLE BOLD FEATURE 

export const handleBoldClick =  () =>{
  

const selection = window.getSelection();
if(selection.rangeCount> 0){
  console.log("hello from bold text");
const range = selection.getRangeAt(0);
const newEl = document.createElement("strong");
// newEl.textContent = range.toString();
newEl.appendChild(range.extractContents())
range.deleteContents();
range.insertNode(newEl)
selection.addRange(range)
}

}


//VOICE RECOGNITION

export const handleSpeechToText = (isSpeaking, setIsSpeaking, setCurrentText, currentText) => {
  const prevText = currentText;
console.log("Start saying something ! ");

console.log(isSpeaking)
let generatedText="";
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
!isSpeaking ? recognition.start() :  recognition.abort();
recognition.onresult = function(event){
  console.log(generatedText)
  console.log(event.results)

  generatedText = event.results[event.results?.length - 1][0].transcript+ ' ';
  setCurrentText(prev => {return generatedText==='' ? prev : prev + ' ' + generatedText });
 
 
}
recognition.onerror = function(event) {
  console.error('Speech recognition error: ', event.error);
}
setIsSpeaking(prev => !prev);

}


//TIMER UI AND UPADATION

export const handleTimerUI = (e) =>{
const timers = document.querySelectorAll(".timers-container > div");
console.log(timers)
e.target.style.display = "none";
timers.forEach(el => el.style.display = "block")

}

export const handleSelectedTime = (e, index, setTimerMins, timerMins) => {
  let id = timerMins[index];
  const timers = document.querySelectorAll(".timers-container > div");
 timers.forEach((el,i) => i !== index ? el.style.display = "none" : '');
setTimerMins(timerMins[index])
  const intervalID = setInterval(()=>{
console.log(id)
setTimerMins(prev => prev - 1 )
id--;
if(id===0){
  new Audio(timerFinishedAudio).play();
  setTimerMins([25,45,60]);
  clearInterval(intervalID);
  document.querySelector(".fa-hourglass").style.display = "block";
}
 }, 1000 * 60)
}