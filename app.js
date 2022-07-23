const button = document.querySelector(".fa-bars")
const nav = document.querySelector(".header__nav")

button.addEventListener("click", () => {
    nav.classList.toggle("header__responsive")
})