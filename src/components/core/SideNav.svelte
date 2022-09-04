<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Route } from "$lib/types";

  export let routes: Route[];
  export let links: Array<any> = [];

  let scrollY: number;
</script>

<svelte:window bind:scrollY />

{#if scrollY >= 500}
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

      {#each links as link}
        <li>
          <a href={link.link} target="_blank" class="text-white">
            <span class="mdi {link.icon} mdi-24px">&nbsp;</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
