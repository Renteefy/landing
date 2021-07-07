<script>
  let email;
  let message;
  let name;
  import Toastify from "toastify-js";
  import axios from "axios";
  import validator from "validator";
  import { Jumper } from "svelte-loading-spinners";
  let loading = false;

  function showToast(message, bgColor) {
    Toastify({
      text: message,
      backgroundColor: bgColor,
      className: "text-black",
    }).showToast();
  }
  function sendMessage() {
    let chkEmail =
      email === null || email === "" || email === undefined
        ? 0
        : validator.isEmail(email)
        ? 200
        : 400;
    let chkName = name === null || name === "" ? 400 : 200;
    let chkMessage = message === null || message === "" ? 400 : 200;

    if (chkEmail !== 200) {
      showToast(
        "Email seems wrong, please check and enter a valid email",
        "red"
      );
      return;
    } else if (chkName !== 200) {
      showToast("Name can not be empty", "red");
      return;
    } else if (chkMessage !== 200) {
      showToast("Message can not be empty", "red");
      return;
    } else {
      loading = true;
    }
    axios
      .post("https://api.renteefy.com/email/contact", {
        email: email,
        message: message,
        name: name,
      })
      .then((res) => {
        loading = false;
        if (res.status === 429) return showToast("Something went wrong", "red");
        if (res.data.statusCode === 200)
          return showToast(
            "Sucessfully sent message. We will reply ASAP",
            "green"
          );
        return showToast(
          `We might had a problem processing
  this request. We apologize for this inconvience. You can still reach us out at
  renteefy@gmail.com`,
          "red"
        );
      });
  }
</script>

<section id="contactus">
  <div
    class="container ml-auto mr-auto max-w-screen-lg bg-gray-100 m-4 mt-14 mb-10 grid grid-cols-1 md:grid-cols-2 rounded-lg"
  >
    <div class="titleContainer p-10">
      <div class="title font-extrabold text-4xl md:text-5xl my-4">
        Contact us
      </div>
      <div class="title font-worksans my-8">
        <div class="loltext mb-4">
          We would love to hear from you! Reach us out, we will reply as soon as
          possible!
        </div>
        <label> Name</label>
        <input
          bind:value={name}
          type="text"
          placeholder="John Doe"
          class="w-full p-3 m-1 rounded-lg"
        />
        <label> Email</label>
        <input
          type="text"
          bind:value={email}
          class="w-full p-3 m-1 rounded-lg"
          placeholder="johndoe@gmail.com"
        />
        <label> Message</label>
        <textarea
          type="text"
          bind:value={message}
          class="w-full p-3 m-1 rounded-lg"
          placeholder="Wohoho!"
        />
      </div>
      <div class="next w-auto inline-block mt-5 ">
        {#if !loading}
          <button
            on:click={sendMessage}
            class="button  bg-gray-800 p-4 text-center text-white rounded-lg"
          >
            Send Message
          </button>
        {:else}
          <Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
        {/if}
      </div>
    </div>

    <div class="img">
      <img
        class="object-cover w-full h-full  rounded-xl "
        src="https://freight.cargo.site/w/1250/i/d8eacd40a68a2ba9f15f0309217e9e5b6f8d0597732b73dfd73ea0869a23782b/0056.png"
        alt=""
      />
    </div>
  </div>
</section>
