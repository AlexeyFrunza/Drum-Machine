window.addEventListener('keydown', playSound);
function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
  key.classList.add('btn-clicked');
  setTimeout(() => {
    key.classList.remove('btn-clicked');
  }, 300)
}
