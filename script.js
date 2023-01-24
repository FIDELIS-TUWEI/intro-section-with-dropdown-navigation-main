const hamburgerIcon = document.querySelector(".hamburger__menu");
const menu = document.querySelector(".nav__menu");

// Event listener for opening the menu
hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle("active");
    menu.classList.toggle("active");
});

// Event listener for disappering menu
document.querySelectorAll(".nav__link").forEach(n => n.addEventListener('click', () => {
    hamburgerIcon.classList.remove("active");
    menu.classList.remove("active");
}));