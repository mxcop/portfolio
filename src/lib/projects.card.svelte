<script lang="ts">
  import { hide, langIconUrl } from "../data/languages";
  import type { Project } from "../data/project";

  export let repo: Project;

  $: languages = Object.keys(repo.languages!);
</script>


<article class="card">

  <div class="header" style={ 
    (repo.enchanted ? '' : '--enchanted: none;') + 
    (repo.banner ? `min-height: 182px; background-image: url('${ repo.banner }')` : '') 
  }>

    {#if repo.banner}
      <nav class="links">

        {#if repo.steam_url}
        <a href={ repo.steam_url } class="ico-btn">
          <img src="src/assets/svg/steam.svg" alt="Steam Store Page">
        </a>
        {/if}

        {#if repo.github}
        <a href={ repo.url } class="ico-btn">
          <img src="src/assets/svg/github.svg" alt="Github Repo">
        </a>
        {/if}

      </nav>
    {/if}

    <div class="id">
      <h3>
        <a class="owner" href={ repo.owner.url }>{ repo.owner.name }</a> / <a class="repo" href={ repo.url }>{ repo.name }</a>
      </h3>
    </div>

    {#if repo.stargazers_count}
      <i class="stargazers">
        <img src="https://api.iconify.design/fluent:star-12-filled.svg" alt="Stargazers"> <p>{ repo.stargazers_count }</p>
      </i>
    {/if}

    {#if !repo.banner}
      <nav class="links inline">
        {#if repo.github}
        <a href={ repo.url } class="ico-btn">
          <img src="src/assets/svg/github.svg" alt="Github Repo">
        </a>
        {/if}
      </nav>
    {/if}
  </div>

  <div class="body">
    {#if repo.desc}
      <div class="description">
        { repo.desc }
      </div>
    {/if}
    
    <footer>
      <p class="time">
        { repo.created ? new Date(repo.created).toDateString().substring(3) : 'unknown' } —— { repo.updated ? new Date(repo.updated).toDateString().substring(3) : new Date().toDateString().substring(3) }
      </p>
      <ul>
        {#each languages as lang}
          {#if !hide(repo.languages, lang)}
            <li><img
              src="src/assets/svg/langs/{ langIconUrl(lang, true) }.svg"
              alt={lang}
            /></li>
          {/if}
        {/each}
      </ul>
    </footer>
  </div>

</article>


<style lang="scss">

.card {
  position: relative;
  border-radius: 12px;
  width: 100%;
  max-width: 460px;
  height: fit-content;
  margin: 24px 16px;

  footer {
    padding: 16px;
    max-width: 100%;
    display: flex;
    align-items: flex-start;

    .time {
      margin: 4px 0 0 0;
      font-size: 12px;
      white-space: nowrap;
      color: #fff5;
      height: 8px;
    }

    ul {
      display: flex;
      list-style: none;
      font-size: 12px;
      padding-left: 2px;
      margin: 0 0 0 auto;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      li:nth-child(1) {
        margin-left: 16px;
      }

      li {
        margin-left: 12px;
        white-space: nowrap;

        img {
          width: 22px;
          height: 22px;
          opacity: .8;
        }
      }
    }
  }
}

.header {
  padding: 0px 16px 0 16px;
  display: flex;
  flex-wrap: wrap;
  border: 1.5px solid #fff2;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: #0006;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .links {
    width: 100%;
    height: 60px;
    margin: 0 0 0 auto;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      margin-left: 8px;
    }

    a img {
      filter: invert(100%);
      opacity: .8;
    }

    &.inline {
      width: auto;
    }
  }

  .id {
    display: flex;
    flex: auto;
    z-index: 2;
    margin-top: auto;

    .owner {
      font-weight: 400;
    }

    .repo {
      font-family: 600;
    }
  }

  .stargazers {
    margin-left: 16px;
    margin-top: auto;
    display: flex;
    align-items: center;
    font-family: IBM Plex Mono, monospace;
    font-style: normal;

    img {
      width: 20px;
      height: 20px;
      margin: 0 6px 1px 0;
      filter: invert(80%);
    }

    p {
      display: flex;
      align-items: center;
      color: #ddd;
    }
  }
}

.body {
  .description {
    padding: 16px 16px 8px 16px;
  }
}

// Enchanted animation :
.header:after {
  content: '';
  display: var(--enchanted);
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg, #0000, #e100ff, #0000,#a200ff, #0000, #ff00d9, 
    #0000, #a200ff,#0000, #ff00d9);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 40s linear infinite;
  opacity: .2;
  filter: blur(50px);

  @keyframes steam {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 800% 0;
    }
  }
}

</style>