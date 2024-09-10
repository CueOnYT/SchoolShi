let fishCount = 0;
let isCasting = false;

function startCasting(event) {
    if (isCasting) return;
    isCasting = true;

    const fishingRod = document.getElementById('fishing-rod');
    const fish = document.getElementById('fish');
    const hook = document.getElementById('hook');
    const message = document.getElementById('message');
    const fishCountDisplay = document.getElementById('fish-count');
    const gameArea = document.getElementById('game-area');

    // Show the rod and hook
    fishingRod.style.display = 'block';
    hook.style.display = 'block';

    // Random position for the fish
    const randomFishX = Math.random() * (gameArea.offsetWidth - 100);
    const randomFishY = Math.random() * (gameArea.offsetHeight - 100);
    fish.style.left = `${randomFishX}px`;
    fish.style.top = `${randomFishY}px`;
    fish.style.display = 'block';

    // Set up mouse move listener for moving the hook
    gameArea.addEventListener('mousemove', moveHook);

    // Set up click listener to catch fish
    gameArea.addEventListener('click', catchFish);

    function moveHook(event) {
        if (!isCasting) return;
        hook.style.left = `${event.clientX - gameArea.offsetLeft}px`;
        hook.style.top = `${event.clientY - gameArea.offsetTop}px`;
    }

    function catchFish() {
        const hookRect = hook.getBoundingClientRect();
        const fishRect = fish.getBoundingClientRect();
        
        // Check if hook overlaps with fish
        if (hookRect.left < fishRect.right &&
            hookRect.right > fishRect.left &&
            hookRect.top < fishRect.bottom &&
            hookRect.bottom > fishRect.top) {
            fishCount++;
            fishCountDisplay.textContent = `Fish caught: ${fishCount}`;
            message.textContent = 'You caught a fish!';

            // Hide fish and rod
            fish.style.display = 'none';
            fishingRod.style.display = 'none';
            hook.style.display = 'none';

            // Remove event listeners
            gameArea.removeEventListener('mousemove', moveHook);
            gameArea.removeEventListener('click', catchFish);
        } else {
            message.textContent = 'No fish caught. Try again!';
        }
        
        isCasting = false;
    }
}

// Start casting when clicking anywhere in the game area
document.getElementById('game-area').addEventListener('click', startCasting);
