<script lang="ts">
  import RepoCard from "./projects.card.svelte";
  import { onReposUpdated, type OctoRepo } from "../data/repos";
  import { onMount } from "svelte";
  import projectData from "../data/projects";
  import { repoToProject, type Project } from "../data/project";

  export let repos: OctoRepo[];

  $: projects = <Array<Project>>[];

  /**
   * Get the projects to display.
   */
  function getProjects() {

    const keys = Object.keys(projectData);
    const result = [];

    // Merge all the static projects with the dynamic github repos.
    for (let i = 0; i < keys.length; i++) {
      const find = repos.find(p => p.name == keys[i]);
      result.push(repoToProject(projectData[keys[i]], find, keys[i]));
    }

    projects = result;
  }

  onMount(() => {
    getProjects();
    onReposUpdated((new_repos: OctoRepo[]) => { repos = new_repos; getProjects(); });
  });
</script>


<section class="repos">
  <div class="title">My Projects</div>
  {#each projects as project}
    <RepoCard repo={project} />
  {/each}
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
  position: relative;
  width: 100%;
  text-align: center;
  font-family: IBM Plex Mono, monospace;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #ddd;
}

</style>