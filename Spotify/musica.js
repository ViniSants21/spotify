const playButton = document.querySelector('.play-btn');
const audio = document.getElementById('audio-player');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '⏸️'; // Ícone de pausa
  } else {
    audio.pause();
    playButton.textContent = '▶️'; // Ícone de play
  }
});
