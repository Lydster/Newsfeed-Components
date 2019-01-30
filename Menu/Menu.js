

const toggleMenu = () => {
  menu.classList.toggle('.menu--open');
  console.log('sweet victory. way to go lyd')
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class

const menu = document.querySelector('.menu');
  // Toggle the "menu--open" class on your menu refence. 


// create a reference to the ".menu-button" class


const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu)



