const debug = false;
/* DARK MODE */
const DARK_MODE = 'darkMode';
const darkBrowser = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let darkModeEnabled = localStorage.getItem(DARK_MODE) !== null ? JSON.parse(localStorage.getItem(DARK_MODE)) : darkBrowser;

const updateDarkMode = (enabled, callback) => {
  localStorage.setItem(DARK_MODE, enabled.toString());
  if (enabled) {
    if (debug) console.log('Dark mode enabled');
    document.body.classList.add('body--dark');
  } else {
    document.body.classList.remove('body--dark');
    if (debug) console.log('Dark mode disabled');
  }
  if (callback) callback();
}

document.querySelector('.dark-toggle').addEventListener("click", () => {
  darkModeEnabled = !darkModeEnabled;
  updateDarkMode(darkModeEnabled);
});

let logo = document.querySelector('.logo');
logo.addEventListener("click", () => {
  logo.classList.toggle('active');
});

// to fix momentary blinding light on page load for dark mode
updateDarkMode(darkModeEnabled, () => {
  document.body.classList.add('transition-ready');
});