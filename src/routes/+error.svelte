<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="error-page flex justify-center">
  <h1 class="fixed bottom-1/2 text-5xl text-white font-bold">
    {$page.status}: {$page.error.message}
  </h1>
</div>

<style>
  .error-page {
    height: 100vh;
  }
</style>
