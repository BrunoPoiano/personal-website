

document.addEventListener('DOMContentLoaded', function () {

    let colorPallete = document.querySelector('.color-pallete')

    if (colorPallete) {
        
        var attention = document.createElement('div');
        attention.className = 'attention';
        colorPallete.appendChild(attention);

        for (let index = 1; index < 10; index++) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--attention-color-${index}0)`
            attention.appendChild(colorDiv);
        }


        var attentionsoft = document.createElement('div');
        attentionsoft.className = 'attentionsoft';
        colorPallete.appendChild(attentionsoft);

        for (let index = 1; index < 10; index++) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--attention-soft-color-${index}0)`
            attentionsoft.appendChild(colorDiv);
        }

        var neutral = document.createElement('div');
        neutral.className = 'neutral';
        colorPallete.appendChild(neutral);

        for (let index = 1; index < 10; index++) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--neutral-color-${index}0)`
            neutral.appendChild(colorDiv);
        }

        var accent = document.createElement('div');
        accent.className = 'accent';
        colorPallete.appendChild(accent);

        for (let index = 1; index < 10; index++) {

            var colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = `var(--accent-color-${index}0)`
            accent.appendChild(colorDiv);
        }

        
    }
})
