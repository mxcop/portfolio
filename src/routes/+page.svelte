<script lang="ts">
  import Repos from "$lib/repos.svelte";

  export let data: any;
</script>

<div>
  <Repos repos={data.repos} />
</div>

<style>
  @import '../css/fonts.css';
  @import './+page.css';
</style>