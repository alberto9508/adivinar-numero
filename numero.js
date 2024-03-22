document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
    let min = 1;
    let max = 100;

    alert('Piensa en un número del 1 al 100.');

    guessNumber(min, max);
}

function guessNumber(min, max) {
    let guess = Math.floor((min + max) / 2);
    let response = confirm(`¿Es tu número ${guess}?`);

    if (response) {
        document.getElementById('result').innerHTML = `<p class="text-success">¡Tu número es ${guess}! ¡Excelente decisión!</p>`;
    } else {
        let newGuess = confirm('¿Es tu número mayor que el que propuse?');

        if (newGuess) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }

        if (min > max) {
            document.getElementById('result').innerHTML = '<p class="text-danger">No has pensado en un número válido.</p>';
        } else {
            guessNumber(min, max);
        }
    }
}