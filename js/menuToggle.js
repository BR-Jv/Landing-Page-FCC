const btnMenu = document.getElementById("btnMenu")
const navLinks = document.getElementById("navLinks")

btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("menu-active")
})

