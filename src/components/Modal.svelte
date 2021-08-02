<script>
  import NewsletterModal from "./NewsletterModal.svelte";
  let showNewsletter = false;

  setTimeout(() => {
    showNewsletter = true;
  }, 1000);
</script>

{#if showNewsletter}
  <div
    class="modalContainer backdrop-filter backdrop-blur-sm fixed z-10 left-0 top-0 h-full w-full overflow-auto flex justify-center items-center bg-opacity-50 bg-black"
  >
    <div
      class="modalContent w-min flex justify-center items-center  rounded-lg  bg-white"
    >
      <NewsletterModal bind:showNewsletter />
    </div>
  </div>
{/if}
