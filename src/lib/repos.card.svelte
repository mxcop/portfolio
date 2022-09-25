<script lang="ts">
    import { hide, langIconUrl } from "../data/languages";
  import type { Project } from "../data/project";
  //import type { OctoRepo } from "./repos";

  export let repo: Project;

  $: languages = Object.keys(repo.languages!);
</script>


<article class="card">

  <div class="header" style={ repo.banner ? `padding: 128px 16px 0 16px; background-image: url('${ repo.banner }')` : undefined }>
    <div class="id">
      <h3>
        <a class="owner" href={ repo.owner.url }>{ repo.owner.name }</a> / <a class="repo" href={ repo.url }>{ repo.name }</a>
      </h3>
    </div>

    {#if repo.stargazers_count}
      <div class="stargazers">
        <i>⭐</i> <p>{ repo.stargazers_count }</p>
      </div>
    {:else if repo.steam_url}
      <div class="steamlink">
        <a href={ repo.steam_url }>
          <img src="https://api.iconify.design/cib:steam.svg" alt="Steam Link">
        </a>
      </div>
    {/if}
  </div>

  <nav>

  </nav>

  <div class="body">
    {#if repo.desc}
      <div class="description">
        { repo.desc }
      </div>
    {/if}
    
    <footer>
      <ul>
        <li>{ repo.created ? new Date(repo.created).toDateString().substring(3) : 'unknown' } —— { repo.updated ? new Date(repo.updated).toDateString().substring(3) : new Date().toDateString().substring(3) }</li>
        {#each languages as lang}
          {#if !hide(repo.languages, lang)}
            <li><img
              src="https://api.iconify.design/{ langIconUrl(lang) }.svg"
              alt={lang}
            /></li>
          {/if}
          <!-- <li>{ lang }</li> -->
        {/each}
      </ul>
    </footer>
  </div>

</article>


<style lang="scss">

.card {
  border-radius: 12px;
  //border: 2px solid #444;
  width: 460px;
  height: fit-content;
  margin: 24px 10px;
  background-color: #0004;
  overflow: hidden;

  footer {
    padding: 16px;

    ul {
      display: flex;
      list-style: none;
      font-size: 12px;
      padding-left: 2px;
      margin: 0;

      li:nth-child(2) {
        margin-left: auto;
      }

      li:nth-child(1) {
        margin-left: 0;
        margin-right: 24px;
      }

      li {
        margin-left: 12px;
        white-space: nowrap;

        img {
          width: 22px;
          height: 22px;
          margin-top: -4px;
          filter: invert(30%);
        }
      }
    }
  }
}

.header {
  padding: 0px 16px 0 16px;
  display: flex;
  border: 1.5px solid #fff2;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-size: contain;
  background-position: center;
  position: relative;

  .id {
    display: flex;
    flex: auto;
    z-index: 2;

    .owner {
      font-weight: 400;
    }

    .repo {
      font-family: 600;
    }
  }

  .stargazers {
    margin-left: 16px;
    display: flex;
    font-family: IBM Plex Mono, monospace;

    i {
      font-style: normal;
      margin: 17px 4px 0 0;
    }

    p {
      display: flex;
      align-items: center;
      color: #ddd;
    }
  }

  .steamlink {
    margin-left: 16px;
    display: flex;
    align-items: center;
    font-family: IBM Plex Mono, monospace;

    a {
      display: flex;
      align-items: center;
    }

    a img {
      width: 24px;
      height: 24px;
      filter: invert(80%);
    }
  }
}

.body {
  background-color: #1a1a1a;

  .description {
    padding: 16px 16px 8px 16px;
  }
}

</style>