const menubtn = document.querySelector("#menu-btn");
const navmenu = document.querySelector("#nav-menu");

menubtn.addEventListener("click", () => {
    navmenu.classList.toggle("open");

    if (navmenu.classList.contains("open")) {
        menubtn.textContent = "X";
        menubtn.setAttribute("aria-label", "Close navigation menu");
    } else {
        menubtn.textContent = "☰";
        menubtn.setAttribute("aria-label", "Open navigation menu");
    }
});

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;