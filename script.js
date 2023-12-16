


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