<script>
  import validator from "validator";
  import Toastify from "toastify-js";
  import { Jumper } from "svelte-loading-spinners";
  import axios from "axios";
  let email;
  let loading = false;
  let skipNewsletter = false;
  export let showNewsletter = false;
  function showToast(message, bgColor) {
    Toastify({
      text: message,
      backgroundColor: bgColor,
      className: "text-black",
    }).showToast();
  }
  function onSignup() {
    //console.log(email);
    let chkEmail =
      email === null || email === "" || email === undefined
        ? 0
        : validator.isEmail(email)
        ? 200
        : 400;

    if (chkEmail !== 200) {
      return showToast(
        "Email seems wrong, please check and enter a valid email",
        "red"
      );
    } else {
      loading = true;
    }
    axios
      .post("https://api.renteefy.com/email/registerEmail", { email: email })
      .then((res) => {
        loading = false;
        //console.log(res.data.statusCode);
        if (res.data.status === 400 && res.data.message === "redundant") {
          skipNewsletter = true;
          return showToast("You have signed up already!", "green");
        }
        if (res.data.statusCode === 200) {
          skipNewsletter = true;
          return showToast("You are in! 🍾", "green");
        }
        return showToast(
          `We might had a problem processing
  this request. We apologize for this inconvience. You can still reach us out at
  renteefy@gmail.com`,
          "black"
        );
      });
  }
</script>

{#if skipNewsletter}
  <section>
    <div
      class="container w-screen p-5 mr-auto max-w-screen-lg  m-4   rounded-lg"
    >
      <div
        class="title text-xl md:text-3xl font-bold mb-5 flex justify-between "
      >
        We need your help!
        <div
          class="close cursor-pointer"
          on:click={() => {
            showNewsletter = false;
          }}
        >
          <img src="https://img.icons8.com/windows/32/000000/delete-sign.png" />
        </div>
      </div>
      <div class="subtitle font-worksans">
        We currently are in the very initial stages of our project. Would you be
        interested in filling a survey for us? We promise it is not going to
        take a lot of your time and help us understand what the users need
        better.
      </div>

      <button
        on:click={() => {
          window.location.href = "/#/survey";
        }}
        class="button bg-gray-800 p-4 text-center mt-4 w-full text-white rounded-lg"
      >
        Yeah, sure (recommended ❤️)
      </button>
      <button
        on:click={() => {
          skipNewsletter = false;
          showNewsletter = false;
        }}
        class="button bg-gray-100 p-4 text-center mt-2 w-full text-black rounded-lg"
      >
        No, Thank you
      </button>
    </div>
  </section>
{/if}

{#if showNewsletter && !skipNewsletter}
  <section>
    <div
      class="container w-screen p-5 mr-auto max-w-screen-lg  m-4   rounded-lg"
    >
      <div
        class="title text-xl md:text-3xl font-bold mb-5 flex justify-between "
      >
        Join our Newsletter!
        <div
          class="close cursor-pointer"
          on:click={() => {
            showNewsletter = false;
          }}
        >
          <img src="https://img.icons8.com/windows/32/000000/delete-sign.png" />
        </div>
      </div>
      <div class="subtitle font-worksans">
        Stay up-to-date with all the development with Renteefy. Not just that,
        you will also be the first one to receive financial tips, blog updates
        and special offer announcements
      </div>
      <input
        type="text"
        bind:value={email}
        class="p-3 border-2 text-sm border-black outline-none rounded-lg mt-10 w-full bg-transparent"
        placeholder="awesomeperson@company.com"
      />
      {#if !loading}
        <button
          on:click={onSignup}
          class="button bg-gray-800 p-4 text-center mt-4 w-full text-white rounded-lg"
        >
          Sign me up
        </button>
        <button
          on:click={() => {
            skipNewsletter = true;
          }}
          class="button bg-gray-100 p-4 text-center mt-2 w-full text-black rounded-lg"
        >
          Nah, I'll Pass
        </button>
      {:else}
        <Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
      {/if}
    </div>
  </section>
{/if}
