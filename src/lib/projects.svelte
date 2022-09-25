<script lang="ts">
  import RepoCard from "./projects.card.svelte";
  import { onReposUpdated, type OctoRepo } from "../data/repos";
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
  <div class="title">My Projects</div>
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
  position: relative;
  width: 100%;
  text-align: center;
  font-family: IBM Plex Mono, monospace;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #ddd;
}

.title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 800px;
  top: -50px;
  left: 0;
  filter: blur(200px) saturate(150%);
  opacity: .05;
  background-image: radial-gradient(at 27% 37%,#3a8bfd 0,transparent 50%),radial-gradient(at 97% 21%,#9772fe 0,transparent 50%),radial-gradient(at 52% 99%,#fd3a4e 0,transparent 50%),radial-gradient(at 30% 59%,#5afc7d 0,transparent 50%),radial-gradient(at 67% 66%,#ecbc68 0,transparent 30%),radial-gradient(at 33% 50%,#8ca8e8 0,transparent 50%),radial-gradient(at 79% 53%,#eea5ba 0,transparent 50%);
}

</style>