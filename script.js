const toolData = {

  love: {

    title: "♡ Love Calculator",

    icon: "♥",

    question:
      "How much do I love you?",

    sub:
      "Let's calculate something that probably can't be measured.",

    result:
      "LOVE: 999999999999% ♡<br>" +
      "<small>ERROR: The love level is too large to calculate.</small>"

  },


  cute: {

    title: "★ Cuteness Test",

    icon: "★",

    question:
      "Just how cute are you?",

    sub:
      "Scanning Meep's cuteness levels...",

    result:
      "CUTENESS: 247% ♡<br>" +
      "<small>WARNING: Cuteness levels dangerously high.</small>"

  },


  gorgeous: {

    title:
      "✧ Gorgeousness Detector",

    icon:
      "✧",

    question:
      "Are you gorgeous?",

    sub:
      "Running highly scientific analysis...",

    result:
      "GORGEOUSNESS: 9999999% ♡<br>" +
      "<small>ERROR: Number too large to display.</small>"

  },


  miss: {

    title:
      "♡ Miss You Meter",

    icon:
      "♡",

    question:
      "How much do I miss you?",

    sub:
      "Checking distance between my heart and you...",

    result:
      "SEVERE MEEP DEFICIENCY ♡<br>" +
      "<small>Prescription: One Meep hug immediately.</small>"

  }

};



let activeTool = null;



/* OPEN TOOL */

function openTool(type) {

  activeTool = type;

  const data =
    toolData[type];


  document.getElementById(
    "modalTitle"
  ).textContent =
    data.title;


  document.getElementById(
    "modalIcon"
  ).textContent =
    data.icon;


  document.getElementById(
    "modalQuestion"
  ).textContent =
    data.question;


  document.getElementById(
    "modalSub"
  ).textContent =
    data.sub;


  document.getElementById(
    "modalResult"
  ).innerHTML =
    "";


  const button =
    document.getElementById(
      "modalAction"
    );


  if (type === "miss") {

    button.textContent =
      "Check ♡";

  }

  else if (type === "gorgeous") {

    button.textContent =
      "Scan ♡";

  }

  else if (type === "cute") {

    button.textContent =
      "Check ♡";

  }

  else {

    button.textContent =
      "Calculate ♡";

  }


  document
    .getElementById("toolModal")
    .classList.add("show");


  document
    .getElementById("toolModal")
    .setAttribute(
      "aria-hidden",
      "false"
    );

}



/* CLOSE TOOL */

function closeTool() {

  document
    .getElementById("toolModal")
    .classList.remove("show");


  document
    .getElementById("toolModal")
    .setAttribute(
      "aria-hidden",
      "true"
    );

}



/* CALCULATE */

function calculateTool() {

  const result =
    document.getElementById(
      "modalResult"
    );


  const data =
    toolData[activeTool];


  result.innerHTML =
    "calculating... ♡";


  setTimeout(() => {

    result.innerHTML =
      data.result;

  }, 650);

}



/* COMPLIMENT MACHINE */

function newCompliment() {

  const compliments = [

    "You make the world feel a little softer just by being in it. ♡",

    "You're ridiculously pretty. It's honestly unfair. ♡",

    "If being adorable were illegal, you'd be in serious trouble.",

    "You're my favorite notification. Every single time.",

    "You have no idea how much brighter you make my days. ♡",

    "I could compliment you all day and still run out of words.",

    "You're the kind of person I could never get tired of choosing. ♡"

  ];


  const box =
    document.getElementById(
      "compliment"
    );


  const random =
    Math.floor(
      Math.random() *
      compliments.length
    );


  box.textContent =
    compliments[random];

}



/* SECRET MESSAGE */

function revealSecret() {

  const icon =
    document.getElementById(
      "secretIcon"
    );


  icon.textContent =
    "💗";


  const windowBody =
    icon.parentElement;


  const message =
    windowBody.querySelector(
      ".soft"
    );


  message.textContent =
    "Meep... you're my favorite person. " +
    "I hope you never forget that. ♡";


  const button =
    windowBody.querySelector(
      "button"
    );


  button.textContent =
    "I love you too ♡";


  button.onclick = () => {

    message.textContent =
      "There. That's all I wanted to say. " +
      "I love you, always. ♡";

  };

}



/* SCROLL */

function scrollToSection(id) {

  document
    .getElementById(id)
    .scrollIntoView({
      behavior: "smooth"
    });

}



/* CLICK OUTSIDE POPUP */

document
  .getElementById("toolModal")
  .addEventListener(
    "click",
    (event) => {

      if (
        event.target.id ===
        "toolModal"
      ) {

        closeTool();

      }

    }
  );



/* ESCAPE KEY */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeTool();

    }

  }
);
