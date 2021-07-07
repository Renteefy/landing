<script>
  import Socials from "./Socials.svelte";
  import Newsletter from "./Newsletter.svelte";
  import Contactus from "./Contactus.svelte";
  import Faq from "./Faq.svelte";
  import Features from "./Features.svelte";
  import WhatIsRenteefy from "./WhatIsRenteefy.svelte";
  import Introduction from "./Introduction.svelte";
  import Tailwind from "./components/Tailwind.svelte";
  import Headroom from "svelte-headroom";
  import Modal from "./components/Modal.svelte";
  let openMenu = false;
</script>

<Tailwind />
<Headroom>
  <div
    class="m-4 mt-0 p-4  md:flex items-center justify-evenly max-w-screen-lg mr-auto ml-auto bg-white "
  >
    <div class="flex justify-between ">
      <div class="title font-black font-inter text-xl sm:text-2xl">
        Renteefy
      </div>
      <nav class="flex md:hidden">
        {#if !openMenu}
          <img
            on:click={() => (openMenu = !openMenu)}
            src="https://img.icons8.com/material-rounded/32/000000/menu--v1.png"
          />
        {:else}
          <img
            on:click={() => (openMenu = !openMenu)}
            src="https://img.icons8.com/windows/32/000000/macos-close.png"
          />
        {/if}
      </nav>
    </div>
    {#if openMenu}
      <nav class="flex flex-col">
        <a
          href="#whatisrenteefy"
          class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
          >About</a
        >
        <a
          href="#features"
          class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
          >Features</a
        >
        <a
          href="#faq"
          class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
          >FAQs</a
        >
        <a
          href="#contactus"
          class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
          >Contact us</a
        >
        <a
          href="#newsletter"
          class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
          >Newsletter</a
        >
      </nav>
    {/if}
    <nav class="hidden md:flex">
      <a
        href="#whatisrenteefy"
        class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
        >About</a
      >
      <a
        href="#features"
        class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
        >Features</a
      >
      <a
        href="#faq"
        class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
        >FAQs</a
      >
      <a
        href="#contactus"
        class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
        >Contact us</a
      >
      <a
        href="#newsletter"
        class="navigation hover:bg-pink-600 hover:text-white mx-4 rounded-lg p-2"
        >Newsletter</a
      >
    </nav>
  </div>
</Headroom>

<Modal />
<div class="spacer pt-14" />
<Introduction />

<!-- <hr class="divider max-w-screen-lg ml-auto mr-auto" /> -->
<WhatIsRenteefy />

<hr class="divider max-w-screen-lg ml-auto mr-auto" />
<Features />

<hr class="divider max-w-screen-lg ml-auto mr-auto" />
<Faq />

<hr class="divider max-w-screen-lg ml-auto mr-auto" />
<Contactus />

<hr class="divider max-w-screen-lg ml-auto mr-auto" />
<Newsletter />

<Socials />
