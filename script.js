// Highlight the current page's nav link
const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;
navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});
