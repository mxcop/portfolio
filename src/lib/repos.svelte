<script lang="ts">
  import RepoCard from "./repos.card.svelte";
  import { onReposUpdated, type OctoRepo } from "./repos";
  import { onMount } from "svelte";

  export let repos: OctoRepo[];

  $: data = repos;

  onMount(() => {
    onReposUpdated((new_repos: OctoRepo[]) => data = new_repos);
  });
</script>


<div class="repos">
  {#each data as repo}
    <RepoCard {repo} />
  {/each}
</div>


<style>

.repos {
  padding: 0px 16px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>