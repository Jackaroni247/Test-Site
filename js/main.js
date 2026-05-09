const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  const isLight = root.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
