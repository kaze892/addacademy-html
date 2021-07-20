// Write Javascript code!
function userPreferesDarkMode() {
  return localStorage.getItem("darkMode") === "enabled";
}

function setThemePreference(value) {
  localStorage.setItem("darkMode", value || "disabled");
}

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("dark");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("dark");
};

function setTheme() {
  // If the user already visited and enabled darkMode
  // start things off with it on
  if (userPreferesDarkMode()) {
    enableDarkMode();

  } else {
    disableDarkMode();

  }
  /*const appDiv = document.getElementById("app");
  appDiv.innerHTML = `<h1>Dark mode: ${userPreferesDarkMode()}</h1>`;*/
}

function bootstrap() {
     const darkModeToggleButton = document.querySelector("#slider");
darkModeToggleButton.addEventListener("click", () => {
  if (userPreferesDarkMode()) {
    setThemePreference("disabled");
    disableDarkMode();

  } else {
    setThemePreference("enabled");
    enableDarkMode();

 
  }
  /*const appDiv = document.getElementById("app");
  appDiv.innerHTML = `<h1>Dark mode: ${userPreferesDarkMode()}</h1>`;*/

});

setTheme();
}



if (localStorage.getItem("darkMode") === "enabled") {
    document.getElementById('slider').checked = true;
    } else {
    document.getElementById('slider').checked = false;
}


// document.addEventListener("DOMContentLoaded", function(event) {
//     // Your code to run since DOM is loaded and ready
//     bootstrap()
 
// });

// Ideally you should only call bootstrap once the dom is loaded. But here document loading events are not triggering properly. so calling it directly
bootstrap();

