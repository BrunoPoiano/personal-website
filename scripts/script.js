document.addEventListener("DOMContentLoaded", () => {
  ///////////////////////transitions
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    console.log("clicked");
    document.startViewTransition(() => {
      console.log("startViewTransition");
      // Change the DOM here
      document.body.classList.toggle("new-state");
    });
  });
  ///////////////////////ligh dark theme
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

  ///////////////////////Move picture eyes
  const anchor = document.getElementById("anchor");
  const eyes = document.querySelectorAll(".eye");

  const mousemove = (e) => {
    const mouxeX = e.clientX;
    const mouxeY = e.clientY;

    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouxeX, mouxeY, anchorX, anchorY);
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${-90 + angleDeg}deg)`;
    });
  };

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;

    return deg;
  };

  const isAnchorVisible = () => {
    const anchorRect = anchor.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    return (
      anchorRect.top >= 0 &&
      anchorRect.left >= 0 &&
      anchorRect.bottom <= windowHeight &&
      anchorRect.right <= windowWidth
    );
  };

  const handleMouseMove = (e) => {
    if (isAnchorVisible()) {
      mousemove(e);
    }
  };

  addEventListener("mousemove", handleMouseMove);
});
