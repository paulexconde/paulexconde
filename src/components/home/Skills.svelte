<script lang="ts">
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Django Web Framework",
    "Vue",
    "Nuxt",
    "Svelte",
    "SvelteKit",
    "PostgreSQL",
    "Prisma ORM",
  ];
</script>

<div id="skills-tech">
  <main>
    <section>
      <div class="mdi mdi-memory mdi-48px text-white text-center" />
      <h1 class="text-white text-xl font-bold text-center">
        Skills &amp; Technologies
      </h1>
    </section>
    <section class="flex justify-center mt-5">
      <div class="grid grid-cols-2 gap-4">
        {#each skills as skill}
          <div class="bg-dark rounded-md flex items-center">
            <span class="mx-2 mdi mdi-check-decagram mdi-24px text-primary" />
            <span class="text-white mx-2">{skill}</span>
          </div>
        {/each}
      </div>
    </section>
  </main>
</div>
