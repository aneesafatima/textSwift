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

console.log(linkURL)
}