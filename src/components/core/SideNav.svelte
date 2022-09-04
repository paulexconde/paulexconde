<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Route } from "$lib/types";

  export let routes: Route[];
</script>

<nav
  transition:fade
  class="fixed bottom-1/2 z-10 bg-primary shadow-md shadow-dark rounded-r-md w-12 p-2 "
>
  <ul>
    {#each routes as route}
      <li>
        <a class="text-white" href={route.to}>
          <span class="mdi {route.icon} mdi-24px" />
        </a>
      </li>
    {/each}
  </ul>
</nav>
