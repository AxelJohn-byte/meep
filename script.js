function openWin(id) {
    const windows = document.querySelectorAll('.window');
    windows.forEach(win => win.classList.remove('active'));

    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }
}

function closeWin(id) {
    document.getElementById(id).classList.remove('active');
    if (id !== 'win-desktop') {
        openWin('win-desktop');
    }
}

// Love Calculator Animation
function runCalc() {
    const fill = document.getElementById('pf1');
    const res = document.getElementById('res1');
    fill.style.width = '100%';
    setTimeout(() => {
        res.style.display = 'block';
        triggerConfetti();
    }, 1500);
}

// Cuteness Meter Animation
function runCuteness() {
    const fill = document.getElementById('pf2');
    const res = document.getElementById('res2');
    fill.style.width = '100%';
    setTimeout(() => {
        res.style.display = 'block';
        triggerConfetti();
    }, 1500);
}

// Gorgeousness Detector Animation
function runGorgeous() {
    const fill = document.getElementById('pf3');
    const res = document.getElementById('res3');
    fill.style.width = '100%';
    setTimeout(() => {
        res.style.display = 'block';
        triggerConfetti();
    }, 1500);
}

// Miss You Meter Trigger
function runMissYou() {
    document.getElementById('res4').style.display = 'block';
    triggerConfetti();
}

// Compliments Machine Logic
const compliments = [
    "You make the world brighter just by being in it. ♡",
    "Your smile is my absolute favorite thing in the world. 😊",
    "You are 100% cute even when you're mad! 😤💖",
    "Talking to you is the highlight of my day, always. ✨",
    "You have the sweetest, kindest heart. 🌸",
    "You are doing amazing, and I am so proud of you! 💕"
];
let compIndex = 0;

function nextCompliment() {
    compIndex = (compIndex + 1) % compliments.length;
    document.getElementById('compliment-text').innerText = compliments[compIndex];
}

// Runaway "NO" Button Logic
function dodgeBtn() {
    const btn = document.getElementById('no-game-btn');
    const x = Math.random() * 140 - 70;
    const y = Math.random() * 80 - 40;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

// Confetti Particle Burst
function triggerConfetti() {
    confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
    });
}

// Real-time Clock Updates
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();
