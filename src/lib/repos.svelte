<script lang="ts">
  import RepoCard from "./repos.card.svelte";
  import { onReposUpdated, type OctoRepo } from "./repos";
  import { onMount } from "svelte";
  import projectData from "../data/projects";
  import { repoToProject, type Project } from "../data/project";

  export let repos: OctoRepo[];

  $: repos = repos;
  $: projects = <Array<Project>>[];

  function getProjects() {

    const keys = Object.keys(projectData);
    const result = [];

    for (let i = 0; i < keys.length; i++) {
      const find = repos.find(p => p.name == keys[i]);
      result.push(repoToProject(projectData[keys[i]], find, keys[i]));
      // if (find) {
      //   result.push(find);
      // }
    }

    console.log('update', result);
    projects = result;
  }

  onMount(() => {
    getProjects();
    onReposUpdated((new_repos: OctoRepo[]) => { repos = new_repos; getProjects(); });
  });
</script>


<section class="repos">
  <div class="title">Github Projects</div>
  {#each projects as project}
    <RepoCard repo={project} />
  {/each}
  <!-- {#each data as repo}
    <RepoCard {repo} />
  {/each} -->
</section>


<style>

.repos {
  padding: 0px 16px;
  margin-top: 80px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.title {
  width: 100%;
  text-align: center;
  font-family: IBM Plex Mono, monospace;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #ddd;
}

</style>