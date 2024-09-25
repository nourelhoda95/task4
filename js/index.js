// - Implement a responsive navigation menu.

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('.menu-icon');
  const navLinks = document.getElementById('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const ids = document.querySelectorAll('id');

  menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('show');
  });

  navItems.forEach(item => {
      item.addEventListener('click', (event) => {
          event.preventDefault();
          const sectionId = event.target.getAttribute('data-section');

          // Hide all sections
          ids.forEach(id => {
              id.style.display = 'none';
          });

          // Show the selected section
          const targetSection = document.getElementById(sectionId);
          targetSection.style.display = 'block';

          // Close the nav menu in mobile view
          navLinks.classList.remove('show');
      });
  });
});










// Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}