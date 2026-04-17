// Menu mobile

let btnMenu = document.querySelector(".hamburger-mobile button");
let nav = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out'
});

// Initial section
sr.reveal('#initial h1', {});
sr.reveal('#initial .p-apresentation', { delay: 300 });
sr.reveal('#initial hr', { delay: 400, distance: '20px' });
sr.reveal('#initial .p-description', { delay: 500 });
sr.reveal('#initial .cta-projetcs', { delay: 600 });

// About section
sr.reveal('#about h2', {});
sr.reveal('#about h3', { delay: 200 });
sr.reveal('#about .about-description', { delay: 400 });
sr.reveal('#about .skills', { delay: 600 });

// Why Contract section
sr.reveal('#why-contract h2', {});
sr.reveal('#why-contract h3', { delay: 200 });
sr.reveal('#why-contract .card', { interval: 200, delay: 400 });

// Cases section
sr.reveal('#cases h2', {});
sr.reveal('#cases h3', { delay: 200 });
sr.reveal('#cases .card', { interval: 300, delay: 400 });

// Contact section
sr.reveal('#contact h2', {});
sr.reveal('#contact .iniciar-projeto', { delay: 200 });
sr.reveal('#contact .social-links a', { interval: 200, delay: 400 });