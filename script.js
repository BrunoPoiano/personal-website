const anchor = document.getElementById("anchor");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

addEventListener("mousemove", function (e) {
    const mouxeX = e.clientX;
    const mouxeY = e.clientY;

    const angleDeg = angle(mouxeX, mouxeY, anchorX, anchorY);
    const eyes = document.querySelectorAll(".eye");

    eyes.forEach((eye) => {
        eye.style.transform = `rotate(${-90 + angleDeg}deg)`;
    });
});

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;

    return deg;
}

document.addEventListener('DOMContentLoaded', function () {

    let colorPallete = document.querySelector('.color-pallete')

    if (colorPallete) {

        var neutral = document.createElement('div');
        neutral.className = 'neutral';
        colorPallete.appendChild(neutral);

        for (let index = 1; index < 10; index++) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--neutral-color-${index}0)`
            colorDiv.addEventListener('click', function () {
                var bgColor = `var(--neutral-color-${index}0)`;
                copyToClipboard(bgColor);
            });
            neutral.appendChild(colorDiv);



            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--neutral-color-${index}5)`
            colorDiv.addEventListener('click', function () {
                var bgColor = `var(--neutral-color-${index}5)`;
                copyToClipboard(bgColor);
            });
            neutral.appendChild(colorDiv);

        }


        var attention = document.createElement('div');
        attention.className = 'attention';
        colorPallete.appendChild(attention);


        for (let index = 9; index > 0; index--) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--attention-soft-color-${index}0)`
            colorDiv.addEventListener('click', function () {
                var bgColor = `var(--attention-soft-color-${index}0)`;
                copyToClipboard(bgColor);
            });
            attention.appendChild(colorDiv);
        }

        for (let index = 1; index < 10; index++) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--attention-color-${index}0)`
            colorDiv.addEventListener('click', function () {
                var bgColor = `var(--attention-color-${index}0)`
                copyToClipboard(bgColor);
            });
            attention.appendChild(colorDiv);
        }

        var accent = document.createElement('div');
        accent.className = 'accent';
        colorPallete.appendChild(accent);

        for (let index = 9; index > 0; index--) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--accent-soft-color-${index}0)`
            colorDiv.addEventListener('click', function () {
                var bgColor = `var(--accent-soft-color-${index}0)`
                copyToClipboard(bgColor);
            });
            accent.appendChild(colorDiv);
        }

        for (let index = 1; index < 10; index++) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--accent-color-${index}0)`
            colorDiv.addEventListener('click', function () {
                var bgColor = `var(--accent-color-${index}0)`
                copyToClipboard(bgColor);
            });
            accent.appendChild(colorDiv);
        }


    }
})

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
