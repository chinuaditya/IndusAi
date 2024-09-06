const sounds = {
    65: 'sounds/kick.wav',
    83: 'sounds/snare.wav',
    68: 'sounds/tom1.wav',
    70: 'sounds/tom2.wav',
    71: 'sounds/tom3.wav',
    72: 'sounds/crash.wav',
    74: 'sounds/hihat.wav',
    75: 'sounds/ride.wav',
    76: 'sounds/clap.wav',
};

// Play sound function
function playSound(e) {
    const audio = new Audio(sounds[e.keyCode]);
    if (!audio) return;
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (key) {
        key.classList.add('playing');
        setTimeout(() => key.classList.remove('playing'), 100);
    }
}

// Event listener for key press
window.addEventListener('keydown', playSound);
