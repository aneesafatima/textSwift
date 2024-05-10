export const toggleDarkMode = () =>{
    const body = document.body;
    body.classList.toggle("dark-mode");
    const icon = document.querySelector(".darkmode-icon");
    icon.classList.toggle("fa-moon")
  }