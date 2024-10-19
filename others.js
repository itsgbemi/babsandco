
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
  
