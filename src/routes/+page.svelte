<script lang="ts">
  import Repos from "$lib/repos.svelte";
  import { onMount } from "svelte";

  export let data: any;

  let langs = [];

  onMount(() => {
    const repos = JSON.parse(localStorage.getItem("repos")!) as any[];
    const languages = repos.map((repo) => repo.languages as any).reduce((pre, cur) => {
      return { ...pre, ...cur };
    });
    const top_languages = Object.keys(languages).map((lang) => {
      return {
        name: lang,
        val: languages[lang]
      }
    }).sort((a, b) => b.val - a.val).filter((lang) => lang.name != 'ShaderLab');
    console.log(top_languages);
  });
</script>

<div class="sidebar">
  <section class="cycle">
    Eat<br>
    Sleep<br>
    <span>Have Fun</span><br>
    Repeat<br>
  </section>
</div>

<div class="content">
  <Repos repos={data.repos} />
</div>

<style lang="scss">
  @import './+page.css';

  .sidebar {
    position: fixed;
    left: 0;
    width: 250px;
    height: calc(100vh - 160px);

    display: flex;
    flex-direction: column-reverse;
    z-index: 3;

    .cycle {
      margin: 20px;
      font-weight: 1000;
      font-size: 2rem;
      color: #fff2;

      user-select: none;
      -webkit-user-select: none;

      span {
        color: #fff5;
      }
    }
  }

  .content {
    flex-grow: 1;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>