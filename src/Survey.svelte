<script>
  import YesorNo from "./YesorNo.svelte";

  import axios from "axios";
  import Toastify from "toastify-js";
  import Ratingbar from "./Ratingbar.svelte";
  import { Jumper } from "svelte-loading-spinners";
  let loading = false;

  let questions = [
    {
      question: "Hey! Let's start off with your name",
      type: "shortanswer",
      answer: "",
    },
    { question: "Cool! What's your email?", type: "shortanswer", answer: "" },
    {
      question: "Are you familiar with the concept of Renteefy?",
      type: "yesorno",
      answer: "",
      option: {
        yes: "Oh yeah! 😎 ",
        no: "Not quiet sure 🧐",
      },
    },
    {
      question:
        "Renteefy is a rental marketplace where you can lend or borrow items or services for a specific period of time. Do you think this platform is beneficial to you? ",
      type: "yesorno",
      answer: "",
      option: {
        yes: "Yes! I think i know just how to use this product",
        no: "No, personally I don't feel a need for this",
      },
    },
    {
      question:
        "If given a chance to rent out any item from your current household, what would that item be?",
      type: "shortanswer",
      answer: "",
    },
    {
      question:
        "Similarly given a chance to rent out a service, what would that service be?",
      type: "shortanswer",
      answer: "",
    },
    {
      question:
        "Okay now put yourself in the reciever's shoes, are you willing to rent an item instead of buying it?",
      type: "yesorno",
      answer: "",
      option: {
        yes: "Oh yeah! 😎 ",
        no: "Not quiet sure 🧐",
      },
    },
    {
      question:
        "What will your immediate concerns be when you give your product or service to someone else ",
      type: "shortanswer",
      answer: "",
    },
    {
      question:
        "Do you like the idea and concept of Renteefy? Are you looking forward to the launch of Renteefy?",
      type: "yesorno",
      answer: "",
      option: {
        yes: "I'm looking forward to the launch of Renteefy ",
        no: "Not yet, but I will start using it when people around me start using it",
      },
    },
    {
      question: "Anything else you would want us to know or ask?",
      type: "biganswer",
      answer: "",
    },
    // { question: "this is question", type: "5star", selstar: 0 },
  ];
  function showToast(message, bgColor) {
    Toastify({
      text: message,
      backgroundColor: bgColor,
      className: "text-black",
    }).showToast();
  }
  function submitSurvey() {
    console.log(questions);
    loading = true;
    axios
      .post("https://api.renteefy.com/survey/storeSurvey", { data: questions })
      .then((res) => {
        console.log(res.data);
        if (res.data.statusCode === 200) {
          showToast("Submitted! Thank You! Now Redirecting... 😁", "green");
          setTimeout(() => {
            window.location.href = "https://renteefy.com";
          }, 5000);
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
      {:else if question.type === "yesorno"}
        <form class="my-4">
          <YesorNo
            question={question.question}
            bind:answer={question.answer}
            yes={question.option.yes}
            no={question.option.no}
          />
        </form>
      {/if}
    {/each}
    {#if loading}
      <Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
    {:else}
      <div
        class="button p-4 bg-pink-600 text-white text-center m-3 mt-9 rounded-lg cursor-pointer"
        on:click={submitSurvey}
      >
        Submit
      </div>
    {/if}
  </div>
</div>
