<script lang="ts">
  import { page } from "$app/stores";
  import type { Route } from "$lib/types";

  export let routes: Route[];
  export let links: Array<any> = [];
</script>

<nav class="hidden md:lg:flex md:lg:justify-center md:lg:items-center">
  {#each routes as route}
    <a
      class="mx-5 my-2 text-white {$page.url.pathname == route.to
        ? 'underline'
        : ''}"
      href={route.to}>{@html route.name}</a
    >
  {/each}

  {#each links as link}
    <a href={link.link} target="_blank">
      <span class="mdi {link.icon} mdi-24px text-white">&nbsp;</span>
    </a>
  {/each}
</nav>
