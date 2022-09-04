<script lang="ts">
  import ShowCaseCard from "./ShowCaseCard.svelte";

  const showcases = [
    {
      name: "SSD ERP Web App",
      image: "./showcases/ssd-erp.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, perspiciatis.",
      stack: ["Python", "JavaScript", "Django", "Vue", "Nuxt"],
    },
    {
      name: "Hyundai Iloilo Web App",
      image: "./showcases/hil.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, perspiciatis.",
      stack: ["Python", "JavaScript", "Django", "Vue", "Nuxt"],
    },
    {
      name: "Studio Buhi Web App",
      image: "./showcases/sb-erp.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, perspiciatis.",
      stack: ["Python", "JavaScript", "Django", "Vue", "Nuxt"],
    },
  ];
</script>

<main>
  <section>
    <div class="mdi mdi-apps mdi-48px text-white text-center" />
    <h1 class="text-white text-xl font-bold text-center">My Works</h1>
  </section>
  <section class="flex justify-center mt-5">
    <div class="grid grid-cols-2 gap-4">
      {#each showcases as showcase}
        <ShowCaseCard {...showcase} />
      {/each}
    </div>
  </section>
</main>
