//  Responsive navbar

const icon = document.querySelector("#menu-bar");

icon.addEventListener("click", () => {
    const nav = document.querySelector("nav")
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-circle-xmark")
        nav.classList.remove("hidden")

    }
    else {
        icon.classList.remove("fa-circle-xmark")
        icon.classList.add("fa-bars")
        nav.classList.add("hidden")
    }
})