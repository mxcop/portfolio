<script lang="ts">
  import Languages from "$lib/languages.svelte";
  import Preview from "$lib/preview.svelte";
  import Projects from "$lib/projects.svelte";
  import type { Language } from "../data/languages";
  import { onMount } from "svelte";

  export let data: any;

  let langs: Array<Language> = [];

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
    }).sort((a, b) => b.val - a.val).filter((lang) => lang.name != 'ShaderLab' && lang.name != 'Batchfile');
    langs = top_languages;
  });
</script>


<div class="content">
  <Preview />
  <Languages languages={langs} />
  <Projects repos={data.repos} />
</div>


<style lang="scss">
  @import './+page.css';

  .content {
    flex-grow: 1;
    height: 100%;
    overflow: visible;
  }
</style>