// ----------------------------
// Part 1: Event Handling
// ----------------------------
const btn = document.getElementById("clickBtn");
btn.addEventListener("click", () => {
  alert("Button was clicked 🚀");
});

document.addEventListener("keydown", (event) => {
  console.log("You pressed:", event.key);
});

// ----------------------------
// Part 2: Interactive Elements
// ----------------------------

// Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counterDisplay");

counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// Light/Dark Mode
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------
const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent reload
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name.length < 3) {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Name must be at least 3 characters long.";
    return;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Enter a valid email address.";
    return;
  }
  if (password.length < 6) {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully 🎉";
});
