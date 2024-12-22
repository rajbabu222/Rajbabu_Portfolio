
  // Function to toggle burger menu and navbar expansion
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const container = document.querySelector('.container');
    navLinks.classList.toggle('active');  // Toggle the active state for navbar
    container.classList.toggle('change'); // Toggle the burger icon state
  }

  // Function to close the menu after clicking a link
  function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const container = document.querySelector('.container');
    navLinks.classList.remove('active'); // Close the navbar
    container.classList.remove('change'); // Revert the burger icon
  }
