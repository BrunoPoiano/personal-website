document.addEventListener("DOMContentLoaded", () => {
  /////////////////Color scheme
  let colorScheme = localStorage.getItem("theme") || "dark";

  const modeButton = document.getElementById("mode-toggle");
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  const changeColorTheme = () => {
    localStorage.setItem("theme", colorScheme);
    moon.setAttribute("data-visible", colorScheme == "light");
    sun.setAttribute("data-visible", colorScheme == "dark");
    document.documentElement.style.setProperty("color-scheme", colorScheme);
  };

  modeButton.addEventListener("click", () => {
    if (colorScheme == "dark") {
      colorScheme = "light";
    } else {
      colorScheme = "dark";
    }

    changeColorTheme();
  });

  changeColorTheme();
});
