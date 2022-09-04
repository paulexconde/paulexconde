<script lang="ts">
  import Hero from "$components/home/Hero.svelte";
  import ShowCase from "$components/home/ShowCase.svelte";
  import Skills from "$components/home/Skills.svelte";
</script>

<svelte:head>
  <title>PJ Exconde</title>
</svelte:head>

<Hero />

<Skills />

<ShowCase />

<!-- {#each Array(50) as n, index}
  <div class="text-white">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea quis
    saepe obcaecati, aperiam at dolore, aliquid quas quam eos quos. Aut unde
    voluptatum esse minus tempora quia, voluptas dolorem.
  </div>
{/each} -->
