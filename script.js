/* =========================
   OPEN WEBSITE
========================= */

function openSite() {

    const opening =
        document.getElementById("opening");

    const main =
        document.getElementById("main");

    opening.style.opacity = "0";

    opening.style.transition =
        "opacity .6s ease";

    setTimeout(() => {

        opening.style.display = "none";

        main.style.display = "block";

        window.scrollTo(0, 0);

    }, 600);
}


/* =========================
   LOVE
========================= */

function calculateLove() {

    const result =
        document.getElementById("loveAnswer");

    result.innerHTML =
        "Calculating... ❤️";

    setTimeout(() => {

        result.innerHTML =
            "Love level: 100%";

    }, 800);

    setTimeout(() => {

        result.innerHTML =
            "Recalculating... 1,000%";

    }, 1600);

    setTimeout(() => {

        result.innerHTML =
            "ERROR: Love level exceeds calculator capacity. 💀❤️";

    }, 2600);

    setTimeout(() => {

        result.innerHTML =
            "Final answer: I love you more than this thing can measure. 🥹❤️";

    }, 4000);
}


/* =========================
   CUTENESS
========================= */

function calculateCute() {

    const result =
        document.getElementById("cuteAnswer");

    result.innerHTML =
        "Scanning Meep... 🎀";

    setTimeout(() => {

        result.innerHTML =
            "Cuteness: 247%";

    }, 1000);

    setTimeout(() => {

        result.innerHTML =
            "WARNING: Cuteness levels dangerously high. ⚠️";

    }, 2200);

    setTimeout(() => {

        result.innerHTML =
            "Conclusion: You're ridiculously cute. 🎀❤️";

    }, 3500);
}


/* =========================
   GORGEOUS
========================= */

function calculateGorgeous() {

    const result =
        document.getElementById("gorgeousAnswer");

    result.innerHTML =
        "Scanning... ✨";

    setTimeout(() => {

        result.innerHTML =
            "Analyzing...";

    }, 900);

    setTimeout(() => {

        result.innerHTML =
            "Gorgeousness: 999999%";

    }, 1800);

    setTimeout(() => {

        result.innerHTML =
            "ERROR: Number too large to display.";

    }, 2800);

    setTimeout(() => {

        result.innerHTML =
            "Final result: You're fucking gorgeous. ❤️";

    }, 4000);
}


/* =========================
   MISS YOU
========================= */

function calculateMiss() {

    const result =
        document.getElementById("missAnswer");

    const answers = [

        "Diagnosis: Severe Meep deficiency. 🥺",

        "I miss you an absolutely unreasonable amount. 😭",

        "Currently experiencing critical Meep withdrawal. 💀",

        "I miss you every time you're not around. ❤️",

        "Prescription: One Meep hug immediately. 🧸"

    ];

    const random =
        answers[
            Math.floor(
                Math.random() * answers.length
            )
        ];

    result.innerHTML = random;
}


/* =========================
   COMPLIMENT MACHINE
========================= */

function compliment() {

    const compliments = [

        "You're genuinely one of the prettiest people I've ever seen. 🌷",

        "Your smile is one of my favorite things in this world. ❤️",

        "You're cute without even trying. It's actually unfair. 😭",

        "I could look at you all day and still think you're gorgeous. ✨",

        "You make normal days feel special. 🥹",

        "You're my favorite notification. 📱❤️",

        "How did I get this lucky? Seriously. 😭",

        "You're beautiful inside and out. 💗",

        "You're someone I never want to lose. 🫶",

        "You're my favorite person. No debate. ❤️",

        "You're the prettiest Meep to ever Meep. 🎀",

        "I hope you know how fucking special you are to me. ❤️"

    ];

    const random =
        compliments[
            Math.floor(
                Math.random() * compliments.length
            )
        ];

    document.getElementById(
        "complimentResult"
    ).innerHTML = random;
}


/* =========================
   SECRET
========================= */

function secretMessage() {

    const result =
        document.getElementById("secretResult");

    result.innerHTML = `

        <div class="secret-message">

            <div class="secret-gif">

                <iframe
                    src="https://giphy.com/embed/4UmpyDI90dl9hVSBzm"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>

            <p>
                Meep...
            </p>

            <p>
                If you're reading this,
                I hope you know that behind every
                stupid joke, every random message,
                and every "I love you,"
                there's someone who genuinely cares
                about you more than you probably realize.
            </p>

            <p>
                You are so incredibly special to me.
            </p>

            <strong>
                I love you. Always. ♡
            </strong>

        </div>

    `;
}
