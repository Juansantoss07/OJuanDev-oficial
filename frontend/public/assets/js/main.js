// Menu mobile

let btnMenu = document.querySelector(".hamburger-mobile button");
let nav = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});