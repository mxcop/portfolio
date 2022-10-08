<script lang="ts">
  import Preview from "../lib/sections/preview.svelte";
  import Projects from "../lib/sections/projects.svelte";

  export let data: any;
</script>


<div class="content">
  <Preview />
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