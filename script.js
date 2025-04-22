// 🔍 Expand Search Bar on Icon Click (Mobile Friendly)
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  if (searchBox.classList.contains("active")) {
    searchInput.style.opacity = "1";
    searchInput.style.width = "180px";
    searchInput.focus();
  } else {
    searchInput.style.opacity = "0";
    searchInput.style.width = "0";
  }
});

// 🚀 Join Prime Button Action
const joinBtn = document.querySelector(".lastnav");
joinBtn.addEventListener("click", () => {
  alert("Redirecting you to Prime membership signup page...");
  // location.href = "signup.html"; // Uncomment this if you have a signup page
});

// 🧭 Highlight Active Nav Link (optional)
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});
