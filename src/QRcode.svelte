<script>
  import Newsletter from "./Newsletter.svelte";

  import Socials from "./Socials.svelte";
</script>

<div class="flex flex-1 justify-center flex-col items-center">
  <div class="max-w-screen-lg flex flex-col justify-center bg-white ">
    <div class="top">
      <div
        class="title flex justify-center items-center mt-8 m-4 text-5xl font-black "
      >
        <img src="asset/icon.png" class=" w-10 h-10 mx-4  max-w-xs" alt="" />
        Renteefy
      </div>
    </div>
    <div class="flex bg-gray-100 p-5 rounded-lg flex-wrap mt-10 ">
      <div
        class="font-bold text-2xl  md:text-3xl max-w-screen-sm leading-none mt-10"
      >
        You saw a QR code, we see a <br />
        <span class="bg-pink-600 leading-loose  text-white p-1 "
          >potential early adopter
        </span>
        <p class="font-worksans font-normal text-base md:text-xl mt-5">
          You are a daredevil for scanning random QR codes on the street. Thank
          you for making an effort. A quick introduction, we are a small startup
          which is trying to make a platform for peer to peer renting of assets
          and services. So basically, we are trying to monetise those devices
          and books that has been gathering dust in the corner of your room for
          ages (except for that sock hehe). We need people like you to launch us
          from the ground. If you see yourself being a part of a million dollar
          start up, check our website out!
        </p>
      </div>
      <img
        src="asset/hi.png"
        class=" w-2/3 m-2 ml-auto mr-auto md:mr-0 md:w-1/3"
        alt=""
      />
    </div>
  </div>

  <Newsletter />

  <a
    href="https://renteefy.com"
    class="text-xl text-center m-5 w-full max-w-screen-lg hover:bg-pink-600 border transition border-pink-600 rounded-lg p-5 mt-5 hover:text-white font-bold "
    >Check Renteefy Out</a
  >
  <Socials />
</div>
