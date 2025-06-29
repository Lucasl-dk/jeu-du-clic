
// Met à jour le meilleur score affiché au chargement
document.getElementById("best").textContent = "Meilleur score : " + (localStorage.getItem("bestScore") || 0);

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

    // Vérifie si le score est un nouveau record
    let best = localStorage.getItem("bestScore") || 0;
    if (score > best) {
      localStorage.setItem("bestScore", score);
      best = score;
      alert("Bravo ! Nouveau record : " + score + " points 🎉");
    } else {
      alert("Temps écoulé ! Ton score : " + score + "\nRecord actuel : " + best);
    }
  }
}, 1000);

moveTarget(); // On lance le jeu
