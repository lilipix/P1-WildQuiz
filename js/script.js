const playButton = document.querySelector(".play")
const playButtonClick = <audio src="../assets/sound/play-button-click.mp3"></audio>

playButton.addEventListener("click", () => {
  playButtonClick.play()
})
