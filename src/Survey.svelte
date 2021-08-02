<script>
  import axios from "axios";
  import Toastify from "toastify-js";
  import Ratingbar from "./Ratingbar.svelte";

  let questions = [
    { question: "This is a question", type: "shortanswer", answer: "" },
    { question: "This is a question", type: "biganswer", answer: "" },
    { question: "this is question", type: "5star", selstar: 0 },
  ];
  function showToast(message, bgColor) {
    Toastify({
      text: message,
      backgroundColor: bgColor,
      className: "text-black",
    }).showToast();
  }
  function submitSurvey() {
    axios
      .post("https://api.renteefy.com/survey/storeSurvey", { data: questions })
      .then((res) => {
        if (res.data.statusCode === 200) {
          showToast("Submitted! Thank You! Now Redirecting... 😁", "green");
          setTimeout(() => {
            window.location.href = "https://renteefy.com";
          }, 1000);
        } else {
          showToast("Something went wrong", "red");
        }
      });
  }
</script>

<div class="flex flex-1 justify-center">
  <div class="max-w-screen-lg flex flex-col justify-center bg-white ">
    <div class="top">
      <div
        class="title flex justify-center items-center mt-8 m-4 text-5xl font-black "
      >
        <img src="asset/icon.png" class=" w-10 h-10 mx-4  max-w-xs" alt="" />
        Renteefy
      </div>
      <div class="title flex justify-center m-2 mt-0 text-2xl font-normal ">
        Survey
      </div>
    </div>
    <div class="card m-4 font-worksans">
      We are to happy to have you here. This is a quick survery that will help
      us gauge our audience, help us position ourselves better and work on the
      features that are in demand. We thank you in advance for being here and
      spending sometime making us better
    </div>
    {#each questions as question}
      {#if question.type === "shortanswer"}
        <label class="mx-4 font-worksans" for="">{question.question}</label>
        <input
          bind:value={question.answer}
          type="text"
          class="bg-gray-100 p-3 m-4 rounded-lg"
        />
      {:else if question.type === "5star"}
        <Ratingbar
          question={question.question}
          bind:selstar={question.selstar}
        />
      {:else if question.type === "biganswer"}
        <label class="mx-4 font-worksans" for="">{question.question}</label>
        <textarea
          bind:value={question.answer}
          type="text"
          class="bg-gray-100 p-3 m-4 rounded-lg"
        />
      {/if}
    {/each}
    <div
      class="button p-4 bg-pink-600 text-white text-center m-3 mt-9 rounded-lg cursor-pointer"
      on:click={submitSurvey}
    >
      Submit
    </div>
  </div>
</div>
