<script lang="ts">
  import { page } from "$app/stores";
  import type { Route } from "$lib/types";
  import { onMount } from "svelte";

  export let routes: Route[];
</script>

<nav class="flex justify-center">
  {#each routes as route}
    <a
      class="mx-5 my-2 text-white {$page.url.pathname == route.to
        ? 'underline'
        : ''}"
      href={route.to}>{@html route.name}</a
    >
  {/each}
</nav>
