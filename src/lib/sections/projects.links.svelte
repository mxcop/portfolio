<script lang="ts">
  import type { ProjectUrls } from "$data/project";
  import Icon from "$lib/icon.svelte";

  export let urls: ProjectUrls | undefined;
  export let achievement: any | undefined = undefined;
  export let visible: boolean;
  export let inline: boolean = false;
</script>


{#if visible}

<nav class="links { inline ? 'inline' : '' }">

  <div class="left">

    {#if achievement}
    <a href={ achievement.url } class="ico-btn achievement">
      <Icon name="award" />
      { achievement.text }<sup>th</sup>
    </a>
    {/if}

  </div>

  <div class="right">

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

  </div>

</nav>

{/if}


<style>

.links {
  width: 100%;
  height: 60px;
  margin: 0 0 0 auto;

  display: flex;
  align-items: center;
}

a {
  margin-left: 8px;
  color: #fffd;
  justify-self: flex-end;
}

.links.inline {
  width: auto;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.achievement {
  max-width: none;
  width: fit-content;
  padding: 0 8px 0 4px;
  margin: 0;

  font-family: Inter;
  font-size: 1.15rem;
  font-weight: 500;
  text-decoration: none;

  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
}

.achievement:hover {
  background-color: #ffffff18;
}

.achievement :global(svg) {
  width: auto;
  height: 24px;
  margin-right: 6px;
}

</style>