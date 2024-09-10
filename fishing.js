let fishCount = 0;

function catchFish() {
    fishCount++;
    document.getElementById('fish-count').textContent = `Fish caught: ${fishCount}`;
    document.getElementById('message').textContent = `You caught a fish!`;
}
