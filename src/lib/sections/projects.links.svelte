<script lang="ts">
  import type { ProjectUrls } from "$data/project";
  import Icon from "$lib/icon.svelte";

  export let urls: ProjectUrls | undefined;
  export let visible: boolean;
  export let inline: boolean = false;
  export let github: boolean = true;
</script>


{#if visible}

<nav class="links { inline ? 'inline' : '' }">

  {#if urls?.steam}
  <a href={ urls.steam } class="ico-btn">
    <Icon name="sites/steam" />
  </a>
  {/if}

  {#if urls?.download}
  <a href={ urls.download } class="ico-btn">
    <Icon name="download" />
  </a>
  {/if}

  {#if urls?.itch}
  <a href={ urls.itch } class="ico-btn">
    <Icon name="sites/itch" strokeWidth="1" />
  </a>
  {/if}

  {#if urls?.repo}
  <a href={ urls.repo } class="ico-btn">
    <Icon name="sites/github" />
  </a>
  {/if}

</nav>

{/if}


<style>

.links {
  width: 100%;
  height: 60px;
  margin: 0 0 0 auto;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}

a {
  margin-left: 8px;
  color: #fffd;
}

.links.inline {
  width: auto;
}

</style>