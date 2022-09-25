<script>
  $: age = () => {
    var ageDifMs = Date.now() - Date.parse("11 Aug 2002 00:00:00 GMT");
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
</script>


<nav>
  <img src="src/assets/img/max.jpg" alt="My Face :P">
  <div class="info">
    <h3>Max Coppen</h3>
    <p>Born 2002 ⠿ { age() }</p>
  </div>
  <a class="quote" href="https://www.theguardian.com/science/2021/feb/23/dare-mighty-things-hidden-message-found-on-nasa-mars-rover-parachute">
    Dare<br>
    <span class="middle">Mighty</span><br>
    <span class="bottom">Things</span>
  </a>
</nav>

<main>
  <slot />
</main>


<style lang="scss">
  @import '../css/fonts.css';

  nav {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 100vw;
    max-width: 1080px;
    height: 160px;
    padding: 20px;

    display: flex;
    z-index: 3;

    img {
      z-index: 3;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #fff3;

      image-rendering: optimizeQuality;
      margin-right: 20px;

      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }

    .info {
      z-index: 3;
      h3 {
        font-size: 24px;
        margin: 8px 0;
      }

      p {
        font-family: IBM Plex Mono, monospace;
        font-size: 16px;
        font-weight: bold;
        color: #888;
        margin: 0;
      }
    }

    // Hide the quote on small screens.
    @media only screen and (max-width: 940px) {
      .quote {
        display: none;
      }
    }

    .quote {
      height: fit-content;
      margin: 12px 0 0 auto;
      text-align: right;
      text-decoration: none;
      font-size: 1.25rem;
      font-weight: 1000;
      line-height: 28px;
      color: #fff3;
      cursor: pointer;

      .middle {
        color: #fff7;
      }

      &:hover {
        .bottom {
          text-decoration: underline !important;
        }
      }
    }
  }

  main {
    position: relative;
    width: 100%;
    max-width: 1080px;
  }
</style>