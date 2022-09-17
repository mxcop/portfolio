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
</nav>

<slot>

</slot>

<style lang="scss">
  @import '../css/fonts.css';

  nav {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 160px;
    padding: 20px;

    display: flex;
    z-index: 3;

    img {
      width: 120px;
      height: 120px;
      border-radius: 25%;
      //border: 2px solid #555;

      image-rendering: optimizeQuality;
      margin-right: 20px;
    }

    .info {
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
  }
</style>