<script>

</script>


<section class="preview">
  <article class="first window" />
  <article class="second window" />
  <article class="third window" />
</section>


<style lang="scss">

@media only screen and (max-width: 940px) {
  .preview {
    height: 640px !important;

    .window {
      &.first {
        z-index: 1 !important;
        height: 360px;

        top: calc(50% - 360px) !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;

        background-image: url('src/assets/img/codex.png');
      }

      &.second {
        z-index: 1 !important;
        width: 640px;

        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;

        background-image: url('src/assets/img/barnstorm.jpg');
      }

      &.third {
        z-index: 1 !important;

        top: calc(50% + 340px) !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;

        background-image: url('src/assets/img/emberry.png');
      }
    }
  }
}

.preview {
  position: relative;
  padding: 0px 16px;
  margin-top: 32px;
  width: 100%;
  height: 520px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 520px;
    background-image: radial-gradient(at 27% 37%,#3a8bfd 0,transparent 50%),radial-gradient(at 97% 21%,#9772fe 0,transparent 50%),radial-gradient(at 52% 99%,#fd3a4e 0,transparent 50%),radial-gradient(at 30% 59%,#5afc7d 0,transparent 50%),radial-gradient(at 67% 66%,#ecbc68 0,transparent 30%),radial-gradient(at 33% 50%,#8ca8e8 0,transparent 50%),radial-gradient(at 79% 53%,#eea5ba 0,transparent 50%);
    -moz-transform: scaleX(-1) translate(50%, -50%);
    -o-transform: scaleX(-1) translate(50%, -50%);
    -webkit-transform: scaleX(-1) translate(50%, -50%);
    transform: scaleX(-1) translate(50%, -50%);
    filter: blur(200px) saturate(150%);
    opacity: .3;
  }

  .window {
    position: absolute;

    width: 480px;
    height: 320px;

    background-color: #111;
    border: 1px solid #404040;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    background-size: cover;

    &.first {
      z-index: 2;
      height: 360px;

      top: calc(50% - 80px);
      left: calc(50% - 180px);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      background-image: url('src/assets/img/codex.png');
    }

    &.second {
      z-index: 1;
      width: 640px;

      top: calc(50% - 20px);
      left: calc(50% + 80px);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      background-image: url('src/assets/img/barnstorm.jpg');
    }

    &.third {
      z-index: 3;

      top: calc(50% + 80px);
      left: 50%;
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      background-image: url('src/assets/img/emberry.png');
    }
  }
}

</style>