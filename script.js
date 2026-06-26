const header = document.querySelector(".site-header");
const year = document.querySelector("#year");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav a");

const updateHeader = () => {
  header.dataset.elevated = window.scrollY > 12 ? "true" : "false";
};

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  header.dataset.open = "false";
  menuButton.setAttribute("aria-expanded", "false");
};

year.textContent = new Date().getFullYear();
updateHeader();

window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  header.dataset.open = String(isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
