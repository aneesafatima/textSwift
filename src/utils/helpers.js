let SpeechRecognition;

window.addEventListener("DOMContentLoaded", () => {
   SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
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


export const handleBoldClick =  () =>{

}

export const handleSpeechToText = (isSpeaking, setCurrentText) => {
console.log("Start saying something ! ");
let generatedText;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.onresult = function(event){
  console.log(event.results)
  for(let i=0; i<event.results?.length;i++)
    { 
      generatedText = generatedText + event.results[i][0].transcript +' ';
    }
  setCurrentText(generatedText);
  generatedText="";
}
recognition.onerror = function(event) {
  console.error('Speech recognition error: ', event.error);
}

!isSpeaking ? recognition.start() :   recognition.stop();

}

