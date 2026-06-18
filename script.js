console.log("Portfolio loaded successfully!");



const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  menuBtn.textContent =
    navLinks.classList.contains("active") ? "✕" : "☰";
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.textContent = "☰";
}


const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  themeToggle.classList.add("rotate");

  setTimeout(() => {
    themeToggle.classList.remove("rotate");
  }, 400);

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}
