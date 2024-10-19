  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const navMobile = document.querySelector('.nav-mobile');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('open');
    body.classList.toggle('nav-open');
  });

  // Change header style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Number count-up animation for achievements
  const counters = document.querySelectorAll('.number');

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const speed = 200; // Speed of the counter
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 15); // Adjust the timeout for smoother/faster animation
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  // Trigger animation when the section is in view
  const achievementSection = document.querySelector('.achievements');
  let hasAnimated = false;

  const handleScroll = () => {
    const sectionPosition = achievementSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition && !hasAnimated) {
      animateCounters();
      hasAnimated = true; // Ensure it animates only once
    }
  };

  window.addEventListener('scroll', handleScroll);
  
// Project snippet slide left function
  const imageRow = document.getElementById('imageRow');
const scrollAmount = 320; // Adjust based on image width + gap

// Manual slide left function
function slideLeft() {
    imageRow.scrollBy({
        left: -scrollAmount, // Scroll left by 320px
        behavior: 'smooth'   // Smooth scrolling
    });
}

// Manual slide right function
function slideRight() {
    imageRow.scrollBy({
        left: scrollAmount,   // Scroll right by 320px
        behavior: 'smooth'    // Smooth scrolling
    });
}

// Swipe functionality for touch screens
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let startX = 0;

// Handle touchstart event
imageRow.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX; // Get initial touch position
    prevTranslate = imageRow.scrollLeft;
    cancelAnimationFrame(animationID); // Stop any ongoing animation
});

// Handle touchmove event
imageRow.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;
        imageRow.scrollLeft = prevTranslate + deltaX;
    }
});

// Handle touchend event
imageRow.addEventListener('touchend', () => {
    isDragging = false;
});


const images = document.querySelectorAll('.fade-img');
let currentIndex = 0;

function crossfadeImages() {
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].classList.add('active'); // Show next image
}

// Change images every 5 seconds
setInterval(crossfadeImages, 5000);
