<script lang="ts">
  import AppBar from "$components/core/AppBar.svelte";
  import SideNav from "$components/core/SideNav.svelte";
  import type { Route } from "$lib/types";
  import "../app.css";
  import Error from "./+error.svelte";

  const routes: Route[] = [
    {
      name: "Home",
      icon: "mdi-arrow-up",
      to: "/",
    },
    {
      name: "Skills &amp; Technologies",
      icon: "mdi-memory",
      to: "#skills-tech",
    },
    {
      name: "My Works",
      icon: "mdi-apps-box",
      to: "#showcase",
    },
  ];

  const social = [
    {
      icon: "mdi-github",
      link: "https://github.com/paulexconde/",
    },
  ];

  let scrollY: number;
</script>

<svelte:window bind:scrollY />

<SideNav {routes} links={social} />

<main
  style:background={`linear-gradient(rgba(39, 41, 50, ${
    scrollY * 0.002
  }), rgba(39, 41, 50, ${
    scrollY * 0.002
  })), url("./images/bg.jpg") no-repeat fixed center/cover`}
>
  <AppBar {routes} links={social} />
  <slot />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
