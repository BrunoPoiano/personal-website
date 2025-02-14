document.addEventListener("DOMContentLoaded", () => {
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
