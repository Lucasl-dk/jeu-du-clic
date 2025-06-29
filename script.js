const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 30;

function moveTarget() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

target.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = "Score : " + score;
  moveTarget();
});

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = "Temps : " + timeLeft + "s";

  if (timeLeft <= 0) {
    clearInterval(countdown);
    target.style.display = "none";
    alert("Temps écoulé ! Ton score : " + score);
  }
}, 1000);

moveTarget(); // On lance le jeu
