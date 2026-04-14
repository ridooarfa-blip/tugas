let music = document.getElementById("bg-music");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
    document.querySelector(".music-btn").innerText = "Play Music";
  } else {
    music.play();
    isPlaying = true;
    document.querySelector(".music-btn").innerText = "Stop Music";
  }
}