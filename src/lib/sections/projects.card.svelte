<script lang="ts">
  import Icon from '@iconify/svelte';
  import { hide, svgs } from "../../data/languages";
  import type { Project } from "../../data/project";
  import Links from "./projects.links.svelte";

  export let repo: Project;

  function date(s: string | undefined, end: boolean): string {
    if (s) {
      if (s.includes('-')) return new Date(s).toDateString().substring(3);
      return s;
    }
    if (end) return new Date().toDateString().substring(3);
    return "unknown";
  }

  $: languages = Object.keys(repo.languages ?? {});
</script>


<article class="card">

  <div class="header" style={ 
    (repo.enchanted ? '' : '--enchanted: none;') + 
    (repo.banner ? `--min-height: 190px; --min-height-sm: 140px; background-image: url('${ repo.banner }')` : '--min-height: auto; --min-height-sm: auto;') 
  }>

    <Links urls={repo.urls} achievement={repo.achievement} visible={repo.banner !== undefined} />

    <div class="info">
      <div class="id">
        <h3>
          <a class="owner" href={ repo.owner?.url }>{ repo.owner?.name }</a> / <a class="repo" style={ !repo.urls?.repo && !repo.urls?.main ? 'text-decoration: none;' : undefined } href={ repo.urls?.repo || repo.urls?.main }>{ repo.name }</a>
        </h3>
      </div>
  
      {#if repo.stargazers_count}
        <i class="stargazers">
          <Icon icon="link:star" />
          <p>{ repo.stargazers_count }</p>
        </i>
      {/if}

      {#if !repo.github}
        <i class="stargazers">
          <p class="private-tag">Private</p>
        </i>
      {/if}
  
      <Links urls={repo.urls} visible={repo.banner === undefined} inline={true} />
    </div>
  </div>

  <div class="body">
    {#if repo.desc}
      <div class="description">
        { repo.desc }
      </div>
    {/if}
    
    <footer>
      <p class="time">
        { date(repo.created, false) } —— { date(repo.updated, true) }
      </p>
      <ul>
        {#each languages as lang}
          {#if !hide(repo.languages, lang)}
            <li><Icon icon={ 'lang:' + svgs[lang] } stroke="none" /></li>
          {/if}
        {/each}
      </ul>
    </footer>
  </div>

</article>


<style lang="scss">

// Project Card
.card {
  position: relative;
  border-radius: 12px;
  width: 100%;
  max-width: 460px;
  height: fit-content;
  margin: 24px 16px;

  @media only screen and (max-width: 372px) {
    min-width: 100%;
  }

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

      @media only screen and (max-width: 530px) {
        font-size: 10px;
      }
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

        :global(svg) {
          width: 22px;
          height: 22px;
          opacity: .8;
        }
      }
    }
  }
}

// Project Card Header
.header {
  padding: 0px 16px 0 16px;
  display: flex;
  flex-wrap: wrap;
  border: 1.5px solid #fff2;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: #0006;
  background-size: auto 102%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  overflow: hidden;

  min-height: var(--min-height);

  @media only screen and (max-width: 530px) {
    min-height: var(--min-height-sm);
  }

  .info {
    display: flex;
    flex: auto;
    margin-top: auto;
    align-items: center;

    @media only screen and (max-width: 530px) {
      font-size: 0.8em;
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
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      font-family: IBM Plex Mono, monospace;
      font-style: normal;

      :global(svg) {
        width: 20px;
        height: 20px;
        margin: 0 2px 2px 0;
        color: #daaa3f;
      }

      p {
        display: flex;
        align-items: center;
        color: #ddd;
        margin-right: 2px;
      }

      .private-tag {
        border-radius: 14px;
        background-color: #0008;
        backdrop-filter: blur(32px);
        color: #bbb;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        margin-bottom: 16px;
        padding: 2px 8px;
        white-space: nowrap;
        font-family: "Inter", monospace;
      }
    }
  }
}

// Project Card Body
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