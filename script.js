// Save user name to localStorage
document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("username").value;
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("username-display").textContent = name;
  }
});

// Load name on page load
window.addEventListener("load", () => {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("username-display").textContent = savedName;
  }
});

// Trigger animation
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.remove("animate-move"); // reset animation
  void box.offsetWidth; // force reflow
  box.classList.add("animate-move");
});
