<script>
  export let question;
  export let selstar = 0;
</script>

<label class="mx-4 font-worksans" for="">{question}</label>
<div class="starContainer flex mx-4 justify-evenly cursor-pointer">
  {#each Array(selstar) as _, i}
    <div
      on:click={() => {
        selstar = i + 1;
      }}
      class="star font-bold text-green-700 text-5xl"
    >
      Star
    </div>
  {/each}
  {#each Array(5 - selstar) as _, i}
    <div
      on:click={() => {
        selstar = selstar + i + 1;
      }}
      class="star "
    >
      Star
    </div>
  {/each}
</div>
