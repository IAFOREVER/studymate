// DOM elements for dark mode
let darkModeToggleBtn;
let darkModeIconContainer;

// SVG Icons for Dark Mode Toggle
const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M216.7,152.63A96.83,96.83,0,0,1,103.37,39.3,8,8,0,0,0,96,32,96,96,0,0,0,96,224a95.42,95.42,0,0,0,32.47-6.09,8,8,0,0,0,5.86-14.68A96.23,96.23,0,0,1,128,128,97.61,97.61,0,0,1,216.7,152.63Z"></path>
  </svg>`;
const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM232,128A8,8,0,0,1,224,136H192a8,8,0,0,1,0-16h32A8,8,0,0,1,232,128ZM64,120H32a8,8,0,0,0,0,16H64a8,8,0,0,0,0-16Zm64,96a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V224A8,8,0,0,0,128,216Zm0-192a8,8,0,0,0-8,8V64a8,8,0,0,0,16,0V32A8,8,0,0,0,128,24ZM197.66,186.34a8,8,0,0,0-11.32,0l-22.63,22.63a8,8,0,1,0,11.32,11.32l22.63-22.63A8,8,0,0,0,197.66,186.34ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-22.63-22.63a8,8,0,0,0-11.32,11.32Zm0,116.68,22.63,22.63a8,8,0,0,0,11.32-11.32L69.66,186.34a8,8,0,0,0-11.32,11.32ZM186.34,58.34a8,8,0,0,0,11.32,11.32l22.63-22.63a8,8,0,0,0-11.32-11.32Z"></path>
  </svg>`;

// Function to apply dark mode
function enableDarkMode() {
  document.documentElement.classList.add('dark');
  if (darkModeIconContainer) darkModeIconContainer.innerHTML = sunIcon;
  localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
  document.documentElement.classList.remove('dark');
  if (darkModeIconContainer) darkModeIconContainer.innerHTML = moonIcon;
  localStorage.setItem('darkMode', 'disabled');
}

// Function to toggle dark mode
function toggleDarkMode() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Initial setup on DOMContentLoaded for dark mode
document.addEventListener('DOMContentLoaded', () => {
  darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
  darkModeIconContainer = document.getElementById('darkModeIconContainer');

  if (darkModeToggleBtn) {
    darkModeToggleBtn.addEventListener('click', toggleDarkMode);
  }

  // Check localStorage for dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  } else {
    // Default to light mode if no preference or explicitly disabled
    if (darkModeIconContainer) darkModeIconContainer.innerHTML = moonIcon; // Ensure correct icon
    localStorage.setItem('darkMode', 'disabled');
  }
});
