<script>
  export let question;
  export let answer = "";
  export let yes;
  export let no;
</script>

<label class="mx-4  font-worksans " for="">{question}</label>
<div class="font-worksans ml-4 my-3 flex flex-col">
  <div class="m-2">
    <input
      type="radio"
      name="select"
      bind:group={answer}
      value="yes"
      id={Math.random()}
      checked
      class="p-4"
    />
    {yes}
  </div>
  <div class="m-2">
    <input
      type="radio"
      class="p-4"
      name="select"
      id={Math.random()}
      bind:group={answer}
      value="no"
    />
    {no}
  </div>
</div>
