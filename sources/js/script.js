// Select the navigation bar toggle button and the main navigation bar
const navBarToggleBtn = document.querySelector('.l-main-nav__toggle-button');
const mainBar = document.querySelector('.l-main-nav');

// Add a click event listener to the toggle button
navBarToggleBtn.addEventListener('click', toggleNavigation);

// Function to toggle the navigation bar
function toggleNavigation() {
  // Check if the main navigation bar is active
  if (mainBar.classList.contains('l-main-nav--active')) {
    // If active, change the toggle button image to hamburger
    navBarToggleBtn.querySelector('img').src = '../../assets/svg/hamburger.svg';
  } else {
    // If not active, change the toggle button image to close
    navBarToggleBtn.querySelector('img').src = '../../assets/svg/close.svg';
  }
  // Toggle the active class on the main navigation bar
  mainBar.classList.toggle('l-main-nav--active');
}

// Select all the navigation links
const navLinks = document.querySelectorAll('.l-main-nav__link');

// Add click event listeners to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Check if the main navigation bar is active
    if (mainBar.classList.contains('l-main-nav--active')) {
      // If active, toggle the navigation bar
      toggleNavigation();
    }
  });
});
