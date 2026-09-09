/* =========================
   START
========================= */

function startLove() {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {

        intro.style.display = "none";
        main.style.display = "block";

        window.scrollTo(0, 0);

        startHearts();

    }, 1000);
}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💞",
        "♡"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}


function startHearts() {

    setInterval(() => {
        createHeart();
    }, 700);

}


/* =========================
   LOVE CALCULATOR
========================= */

function loveMeter() {

    const result =
        document.getElementById("loveResult");

    result.innerHTML =
        "Calculating... ❤️";

    setTimeout(() => {

        result.innerHTML =
            "❤️ 100%";

    }, 1000);

    setTimeout(() => {

        result.innerHTML =
            "❤️ 1,000%";

    }, 2000);

    setTimeout(() => {

        result.innerHTML =
            "❤️ ERROR: Love level exceeded maximum capacity.";

    }, 3200);

    setTimeout(() => {

        result.innerHTML =
            "Final result: I love you more than this calculator can handle. 🥹❤️";

    }, 5000);
}


/* =========================
   CUTENESS
========================= */

function calculateCuteness() {

    const result =
        document.getElementById("cuteResult");

    result.innerHTML =
        "Scanning Meep... 🎀";

    setTimeout(() => {

        result.innerHTML =
            "Cuteness: 247% 🎀";

    }, 1500);

    setTimeout(() => {

        result.innerHTML =
            "WARNING ⚠️ Cuteness levels are dangerously high.";

    }, 3000);

    setTimeout(() => {

        result.innerHTML =
            "Conclusion: You're ridiculously cute. 🥹🎀";

    }, 4500);
}


/* =========================
   GORGEOUSNESS
========================= */

function calculateGorgeous() {

    const result =
        document.getElementById("gorgeousResult");

    result.innerHTML =
        "Scanning... ✨";

    setTimeout(() => {

        result.innerHTML =
            "Analyzing face card...";

    }, 1000);

    setTimeout(() => {

        result.innerHTML =
            "Gorgeousness: 999999% ✨";

    }, 2500);

    setTimeout(() => {

        result.innerHTML =
            "ERROR: Number too large to display.";

    }, 4000);

    setTimeout(() => {

        result.innerHTML =
            "Final result: You're fucking gorgeous. ❤️";

    }, 5500);
}


/* =========================
   MISS YOU
========================= */

function missYou() {

    const result =
        document.getElementById("missResult");

    const answers = [

        "A little... SIKE. I MISS YOU LIKE CRAZY. 😭",

        "Enough to check my phone hoping you messaged me. 🥺",

        "Currently experiencing severe Meep deficiency. 💀",

        "I miss you more than I can explain. ❤️",

        "Diagnosis: I desperately need Meep. 🧸❤️"

    ];

    const random =
        answers[Math.floor(Math.random() * answers.length)];

    result.innerHTML = random;
}


/* =========================
   COMPATIBILITY
========================= */

function compatibility() {

    const result =
        document.getElementById("compatResult");

    result.innerHTML =
        "Consulting the universe... 🔮";

    setTimeout(() => {

        result.innerHTML =
            "Compatibility: 99.99% 💘";

    }, 1800);

    setTimeout(() => {

        result.innerHTML =
            "Actually... recalculating.";

    }, 3200);

    setTimeout(() => {

        result.innerHTML =
            "Compatibility: ∞% ❤️";

    }, 4500);

    setTimeout(() => {

        result.innerHTML =
            "The universe says we're stuck with each other. 😭❤️";

    }, 6000);
}


/* =========================
   COMPLIMENT GENERATOR
========================= */

function compliment() {

    const compliments = [

        "You're genuinely one of the prettiest people I've ever seen. 🌷",

        "Your smile is literally one of my favorite things. ❤️",

        "You're cute without even trying. It's unfair. 😭",

        "I could look at you all day and still think you're gorgeous. ✨",

        "You make ordinary days feel special. 🥹",

        "You're my favorite notification. 📱❤️",

        "How did I get this lucky? Seriously. 😭",

        "You're beautiful inside and out. 💗",

        "You're the kind of person I never want to lose. 🫶",

        "You're my favorite person. No debate. ❤️"

    ];

    const random =
        compliments[Math.floor(Math.random() * compliments.length)];

    document.getElementById("complimentResult")
        .innerHTML = random;
}


/* =========================
   SECRET MESSAGE
========================= */

function secretMessage() {

    const result =
        document.getElementById("secretResult");

    result.innerHTML = `
        <div class="secret-message">
            <div class="secret-heart">💗</div>

            <p>
                Meep, if you're reading this...
            </p>

            <p>
                I hope you know that behind every joke,
                every stupid message, and every "I love you,"
                there's someone who genuinely cares about you
                more than you probably realize.
            </p>

            <p>
                You're special to me.
            </p>

            <strong>
                And I love you. Always. ❤️
            </strong>
        </div>
    `;

}


/* =========================
   CLICK HEARTS
========================= */

document.addEventListener("click", function(event) {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest("button")
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },

            {
                transform: "translateY(-80px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 900);

});
