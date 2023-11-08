function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
 
    const stylesheet = document.getElementById("stylesheet");
    
    if (stylesheet.getAttribute("href") === "style.css") {
        stylesheet.setAttribute("href", "style2.css");
    } else {
        stylesheet.setAttribute("href", "style.css");
    }
    
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
}

const savedDarkMode = localStorage.getItem("dark-mode");

if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
    const stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute("href", "style2.css");
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", toggleDarkMode);
