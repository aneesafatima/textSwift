import timerFinishedAudio from '../assets/timerfinished.mp3'
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";

export const toggleDarkMode = () =>{
    const body = document.body;
    body.classList.toggle("dark-mode");
    const icon = document.querySelector(".darkmode-icon");
    icon.classList.toggle("fa-moon")
  }


export const allFontsLink = (arr) =>{
  let i=0;
  let aschii = 65;
  let char = String.fromCharCode(aschii);
  let linkURL = `http://fonts.googleapis.com/css?family=`;
  let linkElement;
  arr.forEach(el => {
    if(i<10 && (el.startsWith(char.toLowerCase()) || el.startsWith(char)))
      {  
         linkURL += `${el}|`.replace(/ /g, "+");
         i++;
      }
     
    else if(i==10){ 
      linkElement = document.createElement("link");
      linkElement.href = linkURL;
      linkElement.type = "text/css"
      linkElement.rel = "stylesheet"
      document.head.appendChild(linkElement);
      linkURL = `http://fonts.googleapis.com/css?family=`;
      i=0;
      aschii+=1;
      char = String.fromCharCode(aschii);
    }
  })



}


//VOICE RECOGNITION

export const handleSpeechToText = (isSpeaking, setIsSpeaking) => {
let newText;
const textArea = document.querySelector(".text-area");
const selection = window.getSelection();
console.log(isSpeaking)
let generatedText="";

!isSpeaking ? recognition.start() :  recognition.abort();
recognition.onresult = function(event){
  if(event.results)
  generatedText = event.results[event.results?.length - 1][0].transcript+ ' ';
  newText = document.createTextNode(generatedText);
  textArea.appendChild(newText)
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