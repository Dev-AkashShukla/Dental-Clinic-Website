// Ensure hover effect works on touch devices
document.querySelectorAll('.review-item').forEach(item => {
    item.addEventListener('touchstart', () => {
        item.classList.add('hover');
    });
    item.addEventListener('touchend', () => {
        item.classList.remove('hover');
    });
});






// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    // Toggle the 'show' class on navLinks to show or hide the menu
    navLinks.classList.toggle('show');
    
    // Toggle the 'active' class on hamburgerMenu to change the icon
    hamburgerMenu.classList.toggle('active');

    // Add event listener to detect clicks outside the menu
    document.addEventListener('click', closeMenuOnClickOutside);
}

// Function to close menu when clicking outside or on a menu item
function closeMenuOnClickOutside(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger-menu');

    // Check if the click is outside the menu and hamburger icon
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('show'); // Hide the menu
        hamburger.classList.remove('active'); // Remove active state
        document.removeEventListener('click', closeMenuOnClickOutside); // Remove listener
    }
}

// Close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        navLinks.classList.remove('show'); // Hide the menu
        hamburgerMenu.classList.remove('active'); // Remove active state
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");
  
    serviceItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove 'hover' class from all items except the one tapped
        serviceItems.forEach((i) => i.classList.remove("hover"));
        this.classList.toggle("hover"); // Add 'hover' class to the tapped item
      });
    });
  });
  