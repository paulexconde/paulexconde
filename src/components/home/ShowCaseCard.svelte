<script lang="ts">
  export let name: string;
  export let image: string;
  export let description: string;
  export let stack: Array<any>;

  let showContent: boolean = false;
</script>

<div
  on:mouseover={() => (showContent = true)}
  on:focus
  on:mouseleave={() => (showContent = false)}
  class="showcase-card rounded-md text-white w-96 h-56 hover:cursor-pointer"
  style:background="url('{image}') no-repeat center center/cover"
>
  {#if showContent}
    <section
      class="flex flex-col justify-center items-center bg-dark opacity-80 rounded h-full"
    >
      <h1 class="text-2xl m-2">{name}</h1>
      <p class="text-sm m-2 text-center">{description}</p>
      <div class="text-sm m-2 text-center">
        <span>Stack:</span>
        <span>{stack.join(", ")}</span>
      </div>
    </section>
  {/if}
</div>

<style>
  .showcase-card:hover {
    @apply bg-dark;
    background-color: bg-dark;
  }
</style>
