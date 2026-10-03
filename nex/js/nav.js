
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // Toggle show-menu class on nav container
      nav.classList.toggle('show-menu');
      // Toggle show-icon class to switch menu/close icons
      toggle.classList.toggle('show-icon');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');


const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle');

    // Only close if clicking a direct link (not a dropdown toggle button)
    if (navMenu && navToggle && !link.classList.contains('dropdown__button')) {
      navMenu.classList.remove('show-menu');
      navToggle.classList.remove('show-icon');
    }
  });
});


const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button');

  if (dropdownButton) {
    dropdownButton.addEventListener('click', (e) => {
     
      if (window.innerWidth >= 1118) return;

      const showDropdown = document.querySelector('.show-dropdown');

      
      toggleItem(item);

      
      if (showDropdown && showDropdown !== item) {
        toggleItem(showDropdown);
      }
    });
  }
});


const toggleItem = (item) => {
  const dropdownContainer = item.querySelector('.dropdown__container');

  if (dropdownContainer) {
    if (item.classList.contains('show-dropdown')) {
      dropdownContainer.removeAttribute('style');
      item.classList.remove('show-dropdown');
    } else {
      dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
      item.classList.add('show-dropdown');
    }
  }
};


const mediaQuery = window.matchMedia('(min-width: 1118px)'),
      dropdownContainers = document.querySelectorAll('.dropdown__container');

const removeStyle = () => {
  if (mediaQuery.matches) {
   
    dropdownContainers.forEach((container) => {
      container.removeAttribute('style');
    });

   
    dropdownItems.forEach((item) => {
      item.classList.remove('show-dropdown');
    });

    
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle');

    if (navMenu && navToggle) {
      navMenu.classList.remove('show-menu');
      navToggle.classList.remove('show-icon');
    }
  }
};

window.addEventListener('resize', removeStyle);