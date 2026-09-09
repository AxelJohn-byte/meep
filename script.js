/* =========================
   START WEBSITE
========================= */

function startLove() {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {
        intro.style.display = "none";
        main.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startHearts();

    }, 1000);
}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘", "♡"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.getElementById("hearts").appendChild(heart);

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
   LOVE METER
========================= */

function loveMeter() {

    const fill = document.getElementById("meterFill");
    const text = document.getElementById("meterText");

    fill.style.width = "100%";

    text.innerHTML = "100%... wait. That's not enough. 😭❤️";

    setTimeout(() => {

        text.innerHTML =
            "ERROR: Love level exceeded the maximum. 💀❤️";

    }, 3500);

    setTimeout(() => {

        text.innerHTML =
            "I guess you'll just have to trust me when I say: A LOT. 🥹💗";

    }, 6000);
}


/* =========================
   RANDOM HEART ON CLICK
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
