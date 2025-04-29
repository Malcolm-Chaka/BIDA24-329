// Highlight the current page's nav link
const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;
navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#videoCarousel");
  const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
  const videos = carousel.querySelectorAll("video");

  videos.forEach((video, index) => {
    video.addEventListener("ended", function () {
      // Only advance if this is NOT the last video
      if (index < videos.length - 1) {
        carouselInstance.next();
      }
    });
  });
});
