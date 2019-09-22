function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //if keycode doesnt match what we have in the audio stop the function from running
    audio.currentTime = 0; //Rewind the audio to the start when another audio is called
    audio.play();
    key.classList.add('playing');

}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing')
};

const key = document.querySelectorAll('.key');
key.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); 