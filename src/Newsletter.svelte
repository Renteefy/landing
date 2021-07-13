<script>
  import validator from "validator";
  import Toastify from "toastify-js";
  import { Jumper } from "svelte-loading-spinners";
  import axios from "axios";
  let email;
  let loading = false;
  function showToast(message, bgColor) {
    Toastify({
      text: message,
      backgroundColor: bgColor,
      className: "text-black",
    }).showToast();
  }
  function onSignup() {
    console.log(email);
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
        if (res.data.statusCode === 400)
          return showToast("Something went wrong", "red");
        if (res.data.statusCode === 200)
          return showToast("You are in! 🍾", "green");
        return showToast(
          `We might had a problem processing
  this request. We apologize for this inconvience. You can still reach us out at
  renteefy@gmail.com`,
          "yellow"
        );
      });
  }
</script>

<section id="newsletter">
  <div
    class="container w-screen ml-auto p-10 mr-auto max-w-screen-lg bg-green-100 m-4   rounded-lg"
  >
    <div class="title text-xl md:text-3xl font-bold mb-5 ">
      Oh wait! We have a newsletter too!
    </div>
    <div class="subtitle font-worksans">
      Stay up-to-date with all the development with Renteefy. Not just that, you
      will also be the first one to receive financial tips, blog updates and
      special offer announcements
    </div>
    <input
      type="text"
      bind:value={email}
      class="p-3 border-2 border-black outline-none rounded-lg mt-10 w-full bg-transparent"
      placeholder="awesomeperson@company.com"
    />
    {#if !loading}
      <button
        on:click={onSignup}
        class="button bg-gray-800 p-4 text-center mt-4 w-full text-white rounded-lg"
      >
        Sign me up
      </button>
    {:else}
      <Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
    {/if}
  </div>
</section>
