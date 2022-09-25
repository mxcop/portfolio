<script lang="ts">
  import { langIconUrl, type Language } from "../data/languages";

  export let languages: Array<Language>;

  function prettyBytes(bytes: number): string {
    if (bytes < 1000) return `${ bytes }b`;
    if (bytes < 1000000) return `${ Math.round(bytes / 100) / 10 }Kb`;
    if (bytes < 1000000000) return `${ Math.round(bytes / 100000) / 10 }Mb`;
    return `${ Math.round(bytes / 100000000) / 10 }Gb`;
  }
</script>


<section class="languages">
  <div class="title">What I've been writing</div>
  <ol>
    {#each languages as lang}
      <li>
        <img style="opacity: { Math.max(lang.val / 25000, 0.3) };" src="src/assets/svg/langs/{ langIconUrl(lang.name, true) }.svg" alt={ lang.name }>
        <p   style="opacity: { Math.max(lang.val / 25000, 0.3) };">{ prettyBytes(lang.val) }</p>
      </li>
    {/each}
  </ol>
  
  <!-- {#each data as repo}
    <RepoCard {repo} />
  {/each} -->
</section>


<style>

.languages {
  padding: 0px 16px;
  margin-top: 80px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  width: 100%;
  text-align: center;
  font-family: IBM Plex Mono, monospace;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #fffd;
}

ol {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 0;
}

li {
  padding: 16px 16px 0px 16px;
}

img {
  width: 48px;
  height: 48px;
}

p {
  width: 100%;
  height: 15px;
  font-family: IBM Plex Mono, monospace;
  font-size: 0.9rem;
  text-align: center;
  color: #ddd;
}

</style>