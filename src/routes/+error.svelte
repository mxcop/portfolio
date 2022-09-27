<script>
  import { page } from '$app/stores';
  import Icon from '$lib/icon.svelte';
</script>


<div class="content">

  <h2>Oops! Looks like something went wrong...</h2>
  <h2 style="color: #777">Here's some coffee for the troubles</h2>
  <Icon name="coffee" />
  <!-- <img src="src/assets/svg/coffee.svg" alt="Sorry for the troubles!"> -->
  <p>Please try again later :D</p>

  <footer>
    <i>{$page.status}: {$page.error?.message}</i>
  </footer>
  
</div>


<style lang="scss">
  @import './+page.css';

  .content {
    flex-grow: 1;
    padding-top: 64px;
    height: 100%;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 4px 0 0 0;
      text-align: center;
      font-size: 1.5rem;
    }

    :global(svg) {
      width: 64px;
      height: 64px;

      margin-top: 16px;
      color: #ddd;
    }

    i {
      color: #555;
    }
  }
</style>