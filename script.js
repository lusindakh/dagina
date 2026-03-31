/* ---------------------------
   CONFIG
---------------------------- */
const START_DATE = new Date("2024-08-08T00:00:00");

/* ---------------------------
   DOM ELEMENTS
---------------------------- */
const mainContent = document.getElementById("mainContent");

const dayCounterEl = document.getElementById("dayCounter");
const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const romanticMessageEl = document.getElementById("romanticMessage");
const day600Message = document.getElementById("day600Message");

const emojiLayer = document.getElementById("emojiLayer");
const heartRain = document.getElementById("heartRain");
const sparkleLayer = document.getElementById("sparkleLayer");

const bgMusic = document.getElementById("bgMusic");

/* MINI VINYL PLAYER ELEMENTS */
const miniVinyl = document.getElementById("miniVinyl");
const bottomPlayer = document.getElementById("bottomPlayer");
const closePlayer = document.getElementById("closePlayer");
const vinylLarge = document.getElementById("vinylLarge");
const playPauseSong = document.getElementById("playPauseSong");
const prevSong = document.getElementById("prevSong");
const nextSong = document.getElementById("nextSong");
const songList = document.getElementById("songList");

/* ---------------------------
   INIT
---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  mainContent.style.opacity = "1";
  mainContent.style.pointerEvents = "auto";

  updateDayCounter();
  updateFullCountdown();
  startMessageRotation();
  createEmojiParticles();
  createSparkles();
  createHeartRain();
  initGalleryFullscreen();
  initSecretMessage();
  initPlayer();
  check600Day();
  updateNightMode();

  setInterval(updateDayCounter, 60000);
  setInterval(updateFullCountdown, 1000);
  setInterval(updateNightMode, 60000);
});

/* ---------------------------
   DAY COUNTER
---------------------------- */
function updateDayCounter() {
  const now = new Date();
  const diffMs = now - START_DATE;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  dayCounterEl.textContent = `${days} дахь өдөр 💞`;
}

/* ---------------------------
   FULL COUNTDOWN
---------------------------- */
function updateFullCountdown() {
  const now = new Date();
  let diffMs = now - START_DATE;
  if (diffMs < 0) diffMs = 0;

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = (totalDays % 365) % 30;

  yearsEl.textContent = years;
  monthsEl.textContent = months;
  daysEl.textContent = days;
  hoursEl.textContent = totalHours % 24;
  minutesEl.textContent = totalMinutes % 60;
  secondsEl.textContent = totalSeconds % 60;
}

/* ---------------------------
   ROMANTIC MESSAGE ROTATION
---------------------------- */
const romanticMessages = [
  "Чи бол миний бүх юм 💗",
  "Чиний байгаа газар миний гэр бий 💘",
  "Дандаа миний хажууд байгаач 💞",
  "Чи л байвал өөр хэн ч хэрэггүй 🌸",
  "Чамтай учирсандаа би хэзээ ч харамсахгүй 💖",
  "Хайртай болохоор хөөрхөн бас угаасаа өөрөө ч хөөрхөн😍✨",
];

function startMessageRotation() {
  romanticMessageEl.textContent = romanticMessages[0];
  setInterval(() => {
    romanticMessageEl.textContent =
      romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
  }, 3000);
}

/* ---------------------------
   BACKGROUND PARTICLES
---------------------------- */
function createEmojiParticles() {
  const emojis = ["💖", "💘", "💝", "💞", "💕", "🌸", "✨"];
  for (let i = 0; i < 18; i++) {
    const span = document.createElement("span");
    span.className = "emoji-particle";
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.animationDuration = 10 + Math.random() * 10 + "s";
    span.style.animationDelay = Math.random() * 10 + "s";
    emojiLayer.appendChild(span);
  }
}

function createSparkles() {
  for (let i = 0; i < 20; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    sparkleLayer.appendChild(s);
  }
}

function createHeartRain() {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = "💗";
    h.style.left = Math.random() * 100 + "%";
    const duration = 8 + Math.random() * 6;
    h.style.animationDuration = duration + "s";
    h.style.animationDelay = Math.random() * duration + "s";
    heartRain.appendChild(h);
  }
}

/* ---------------------------
   NIGHT MODE
---------------------------- */
function updateNightMode() {
  const hour = new Date().getHours();
  document.body.classList.toggle("night-mode", hour >= 23 || hour < 18);
}

/* ---------------------------
   600th DAY MODE
---------------------------- */
function check600Day() {
  const now = new Date();
  const diff = Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24));

  if (diff >= 600) {
    document.body.classList.add("day600");
    if (day600Message) {
      day600Message.style.display = "block";
    }
    createGoldHearts();
    createGoldDust();
  }
}

/* GOLD HEARTS */
function createGoldHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "gold-heart";
    heart.textContent = "💛";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 4 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
  }, 600);
}

/* GOLD DUST */
function createGoldDust() {
  for (let i = 0; i < 25; i++) {
    const dust = document.createElement("div");
    dust.className = "gold-dust";
    dust.style.left = Math.random() * 100 + "vw";
    dust.style.top = Math.random() * 100 + "vh";
    dust.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(dust);
  }
}

/* ---------------------------
   TOUCH HEARTS
---------------------------- */
document.addEventListener("click", e => {
  const heart = document.createElement("div");
  heart.className = "touch-heart";

  const emojis = ["💗", "💞", "💘", "💝", "💖", "💓", "💕"];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.fontSize = 18 + Math.random() * 14 + "px";
  heart.style.transform = `rotate(${(Math.random() * 60) - 30}deg)`;
  heart.style.setProperty("--dx", (Math.random() * 60 - 30) + "px");

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

/* ---------------------------
   SHOOTING STARS
---------------------------- */
function createShootingStar() {
  if (!document.body.classList.contains("night-mode")) return;

  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.left = Math.random() * 80 + "vw";
  star.style.animationDuration = 0.8 + Math.random() * 0.8 + "s";

  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1500);
}

setInterval(() => {
  if (Math.random() < 0.6) createShootingStar();
}, 2000);

/* ---------------------------
   FULLSCREEN IMAGE VIEWER
---------------------------- */
function initGalleryFullscreen() {
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => openFullscreen(img.src));
  });
}

function openFullscreen(src) {
  const viewer = document.createElement("div");
  viewer.className = "fullscreen-viewer";
  viewer.innerHTML = `<img src="${src}" class="fs-img" />`;
  document.body.appendChild(viewer);
  viewer.addEventListener("click", () => viewer.remove());
}

/* ---------------------------
   SECRET MESSAGE POPUP
---------------------------- */
function initSecretMessage() {
  const secret = document.querySelector(".secret-message");
  const closeBtn = document.querySelector(".close-secret");
  if (!secret || !closeBtn) return;

  let holdTimer;

  // Long press (mobile)
  document.body.addEventListener("touchstart", () => {
    holdTimer = setTimeout(() => secret.classList.add("show"), 3500);
  });

  document.body.addEventListener("touchend", () => clearTimeout(holdTimer));

  // Optional: double click on desktop to show
  document.body.addEventListener("dblclick", () => {
    secret.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    secret.classList.remove("show");
  });
}

/* ---------------------------
   MINI VINYL PLAYER
---------------------------- */
const songs = [
  { title: "Дуу 1", file: "music1.mp3" },
  { title: "Дуу 2", file: "music2.mp3" },
  { title: "Дуу 3", file: "music3.mp3" },
  { title: "Дуу 4", file: "music4.mp3" },
  { title: "Дуу 5", file: "music5.mp3" },
  { title: "Дуу 6", file: "music6.mp3" },
];

let currentSong = 0;

function initPlayer() {
  if (!miniVinyl || !bottomPlayer || !bgMusic) return;

  // Build song list
  songs.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = s.title;
    li.addEventListener("click", () => {
      loadSong(i);
      playSong();
    });
    songList.appendChild(li);
  });

  miniVinyl.addEventListener("click", () => {
    bottomPlayer.classList.add("show");
    miniVinyl.style.display = "none";
  });

  closePlayer.addEventListener("click", () => {
    bottomPlayer.classList.remove("show");
    miniVinyl.style.display = "block";
  });

  playPauseSong.addEventListener("click", () => {
    bgMusic.paused ? playSong() : pauseSong();
  });

  nextSong.addEventListener("click", () => {
    loadSong(currentSong + 1);
    playSong();
  });

  prevSong.addEventListener("click", () => {
    loadSong(currentSong - 1);
    playSong();
  });

  loadSong(0);
}

function loadSong(i) {
  currentSong = (i + songs.length) % songs.length;
  bgMusic.src = songs[currentSong].file;
  bgMusic.load();
}

function playSong() {
  bgMusic.play().then(() => {
    playPauseSong.textContent = "⏸";
    if (miniVinyl) miniVinyl.style.animationPlayState = "running";
    if (vinylLarge) vinylLarge.style.animationPlayState = "running";
  }).catch(() => {});
}

function pauseSong() {
  bgMusic.pause();
  playPauseSong.textContent = "▶️";
  if (miniVinyl) miniVinyl.style.animationPlayState = "paused";
  if (vinylLarge) vinylLarge.style.animationPlayState = "paused";
}
