let fishCount = 0;

function castLine() {
    const randomChance = Math.random();
    const fishImage = document.getElementById('fish-image');
    const message = document.getElementById('message');
    const fishCountDisplay = document.getElementById('fish-count');

    if (randomChance < 0.3) { // 30% chance to catch a fish
        fishCount++;
        fishImage.style.display = 'block';
        message.textContent = 'You caught a fish!';
    } else {
        fishImage.style.display = 'none';
        message.textContent = 'No fish this time. Try again!';
    }

    fishCountDisplay.textContent = `Fish caught: ${fishCount}`;
}
