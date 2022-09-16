<script lang="ts">
  import type { OctoRepo } from "./repos";

  export let repo: OctoRepo;

  $: languages = Object.keys(repo.languages);
</script>


<article class="card">

  <div class="header">
    <div class="id">
      <h3>
        <a class="owner" href={ repo.owner.url }>{ repo.owner.name }</a> / <a class="repo" href={ repo.url }>{ repo.name }</a>
      </h3>
    </div>

    <div class="stargazers">
      <p>{ repo.stargazers_count }</p>
    </div>
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
          <li>{ lang }</li>
        {/each}
      </ul>
    </footer>
  </div>

</article>


<style lang="scss">

.card {
  background-color: #333;
  border-radius: 6px;
  border: 2px solid #444;
  width: 460px;
  height: fit-content;
  margin: 24px 10px;
  overflow: hidden;

  footer {
    padding: 16px;

    ul {
      display: flex;
      list-style: none;
      font-size: 12px;
      padding-left: 2px;
      margin: 0;
      overflow: hidden;

      li {
        margin-right: 24px;
        white-space: nowrap;
      }
    }
  }
}

.header {
  padding: 0px 16px;
  display: flex;

  .id {
    display: flex;
    flex: auto;

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

    p {
      display: flex;
      align-items: center;
    }
  }
}

.body {
  background-color: #222;

  .description {
    padding: 16px 16px 8px 16px;
  }
}

</style>