const hamburger = document.getElementById('hamburger');
const menu = document.getElementById("menu__list");

hamburger.addEventListener("click", () => {
    menu__list.classList.toggle("active");
})