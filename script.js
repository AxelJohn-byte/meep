<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Meep's World ♡</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div class="site-shell">

    <!-- TOP BROWSER BAR -->
    <header class="browser-bar">
      <div class="browser-title">
        <span class="tiny-heart">♡</span>
        <span>meep.love</span>
      </div>

      <div class="browser-buttons">
        <button>−</button>
        <button>□</button>
        <button>×</button>
      </div>
    </header>

    <div class="browser-address">
      <span>←</span>
      <span>↻</span>

      <div class="address-field">
        ♡ https://meep.love
      </div>

      <span>☆</span>
      <span>♡</span>
    </div>


    <!-- HERO -->
    <section class="hero">

      <div class="hero-art">
        <div class="pixel-cat">
          ૮ ˶ᵔ ᵕ ᵔ˶ ა
        </div>

        <div class="heart-outline">
          ♡
        </div>

        <div class="spark s1">✦</div>
        <div class="spark s2">✧</div>

        <div class="cd">
          ◉
        </div>
      </div>


      <div class="welcome-window window">

        <div class="window-head">
          <span>♡ Welcome</span>
          <span>− □ ×</span>
        </div>

        <div class="window-body center">

          <p class="eyebrow">
            A LITTLE CORNER OF THE INTERNET
          </p>

          <h1>
            Meep's<br>
            <span>World ♡</span>
          </h1>

          <p class="intro">
            A tiny website made especially for you.
          </p>

          <button
            class="main-btn"
            onclick="scrollToSection('love-tools')">
            Enter ♡
          </button>

        </div>
      </div>

    </section>


    <!-- LOVE LETTER -->
    <section class="letter window">

      <div class="window-head">
        <span>♡ A Little Letter</span>

        <button
          class="close-look"
          onclick="this.closest('section').classList.toggle('folded')">
          −
        </button>
      </div>


      <div class="letter-body">

        <div>

          <p>Dear Meep,</p>

          <p>
            I know I probably don't say it enough,
            but you're genuinely one of the most beautiful
            people I've ever met.
          </p>

          <p>
            And I'm not only talking about how you look.
            I love your smile, your laugh, your personality,
            the way you talk, and all those little things
            that make you who you are.
          </p>

          <p>
            You make even the simplest days feel special.
          </p>

          <p>
            So I made this little website because saying
            <b>"I love you"</b> never feels like enough.
          </p>

          <p class="signature">
            I love you, Meep. ♡
          </p>

        </div>


        <div class="letter-sticker">

          <div class="mini-bear">
            ૮₍ ˃ ⤙ ˂ ₎ა
          </div>

          <span>
            made with love
          </span>

        </div>

      </div>

    </section>



    <!-- LOVE TOOLS -->
    <section
      id="love-tools"
      class="section">

      <div class="section-title">
        <span>♡</span>

        <h2>
          Love Tools
        </h2>

        <span>♡</span>
      </div>


      <div class="tools-grid">


        <!-- LOVE -->
        <button
          class="tool-card"
          onclick="openTool('love')">

          <span class="tool-icon">
            ♥
          </span>

          <strong>
            Love Calculator
          </strong>

          <small>
            How much do I love you?
          </small>

          <span class="arrow">
            ›
          </span>

        </button>



        <!-- CUTENESS -->
        <button
          class="tool-card"
          onclick="openTool('cute')">

          <span class="tool-icon star">
            ★
          </span>

          <strong>
            Cuteness Test
          </strong>

          <small>
            Just how cute are you?
          </small>

          <span class="arrow">
            ›
          </span>

        </button>



        <!-- GORGEOUS -->
        <button
          class="tool-card"
          onclick="openTool('gorgeous')">

          <span class="tool-icon sparkle">
            ✧
          </span>

          <strong>
            Gorgeousness Detector
          </strong>

          <small>
            Scanning for gorgeous...
          </small>

          <span class="arrow">
            ›
          </span>

        </button>



        <!-- MISS YOU -->
        <button
          class="tool-card"
          onclick="openTool('miss')">

          <span class="tool-icon">
            ♡
          </span>

          <strong>
            Miss You Meter
          </strong>

          <small>
            How much do I miss you?
          </small>

          <span class="arrow">
            ›
          </span>

        </button>

      </div>

    </section>



    <!-- TWO WINDOWS -->
    <section class="two-col">


      <!-- COMPLIMENT MACHINE -->
      <div class="window message-window">

        <div class="window-head">
          <span>
            ✉ Compliment Machine
          </span>

          <span>
            ×
          </span>
        </div>


        <div class="window-body center">

          <p class="soft">
            Need a reminder of how amazing you are?
          </p>

          <button
            class="secondary-btn"
            onclick="newCompliment()">

            Tell me something ♡

          </button>


          <div
            id="compliment"
            class="result-box">

            Press the button whenever you need
            someone to tell you how amazing you are. ♡

          </div>

        </div>

      </div>



      <!-- SECRET -->
      <div class="window secret-window">

        <div class="window-head">

          <span>
            ♡ Secret Message
          </span>

          <span>
            ×
          </span>

        </div>


        <div class="window-body center">

          <div
            class="secret-lock"
            id="secretIcon">

            ♡

          </div>


          <p class="soft">
            There is something hidden here...
          </p>


          <button
            class="secondary-btn"
            onclick="revealSecret()">

            Open secret ♡

          </button>

        </div>

      </div>

    </section>



    <!-- LITTLE CARDS -->
    <section class="little-things">


      <div class="tiny-card">

        <span>💿</span>

        <b>
          Our playlist
        </b>

        <small>
          songs that remind me of you
        </small>

      </div>


      <div class="tiny-card">

        <span>✉</span>

        <b>
          Love mail
        </b>

        <small>
          a message waiting for you
        </small>

      </div>


      <div class="tiny-card">

        <span>☆</span>

        <b>
          Favorite person
        </b>

        <small>
          yeah, it's you
        </small>

      </div>

    </section>



    <!-- FINAL -->
    <section class="final-message">

      <div class="clouds">
        ✦　♡　✧　♡　✦
      </div>

      <h2>
        Meep...
      </h2>

      <p>
        If you ever forget how loved you are,
        <br>
        come back here. I'll always remind you.
      </p>

      <div class="final-heart">
        ♡
      </div>

      <small>
        made with love for Meep
      </small>

    </section>



    <footer>

      <span>
        ♡ meep's world
      </span>

      <span>
        best viewed with love
      </span>

    </footer>

  </div>



  <!-- POPUP -->
  <div
    class="modal"
    id="toolModal"
    aria-hidden="true">


    <div class="modal-window window">


      <div class="window-head">

        <span id="modalTitle">
          ♡
        </span>

        <button onclick="closeTool()">
          ×
        </button>

      </div>


      <div class="window-body center modal-content">


        <div
          id="modalIcon"
          class="big-icon">

          ♡

        </div>


        <h3 id="modalQuestion">
          How much do I love you?
        </h3>


        <p id="modalSub">
          Let's find out.
        </p>


        <button
          class="main-btn"
          id="modalAction"
          onclick="calculateTool()">

          Calculate ♡

        </button>


        <div
          id="modalResult"
          class="modal-result">

        </div>


      </div>

    </div>

  </div>


  <script src="script.js"></script>

</body>
</html>
