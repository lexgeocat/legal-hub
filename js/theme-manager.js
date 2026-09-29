(function () {
  const themeToggle = document.getElementById("themeToggle");
  
  // 1. Cargar preferencia guardada o usar la del sistema
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const initialTheme = savedTheme || (systemDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", initialTheme);

  // 2. Manejar el click del botón
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      
      // Actualizar estado del botón (aria-pressed)
      themeToggle.setAttribute("aria-pressed", newTheme === "dark");
    });
  }
})();
