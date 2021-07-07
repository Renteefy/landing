<script>
  let openID = 0;
  const questionsandanswers = [
    {
      question: "What is Renteefy?",
      answer:
        "Renteefy is a peer to peer renting platform. Think eBay but for renting. You can either list your product/service or rent out a product/service. The goal of this project is to inculcate the renting mentality.",
      id: 1,
    },
    {
      question: "Is Renting profitable?",
      answer:
        "Renting is a great source of passive income. If done right, you can break-even or even make profits on the product/service which you wish to offer.",
      id: 2,
    },
    {
      question: "How will I complete payments for the listing I am renting?",
      answer:
        "Since we are just starting up, we do not support in app payments just yet. We recommend using secure online payments like Google Pay/PayTM/PhonePe/other upi to make your payments to the respective owner. This can be discussed with the owner of the listing on the app's in app messaging.",
      id: 3,
    },
    {
      question: "What if my product is stolen/damaged?",
      answer:
        "We understand your concern with the safety of your product. Presently, the only way to insure the safety is to physically verify who you are giving your product to. In case of damage products, we are working on a insurance mechanism to help recover the losses for the damage. Our present system offers e-KYC in form of aadhar that helps filter out scammers and frauds. Nonetheless, please take caution while renting your products. As we advance, the renting environment will grow safer.",
      id: 4,
    },
  ];
</script>

<section id="faq">
  <div
    class=" container ml-auto mr-auto   max-w-screen-lg m-4 mt-7 mb-7  p-4 pt-8 rounded-lg bg-gray-50 md:flex md:flex-col"
  >
    <div
      class="title font-bold text-xl md:text-3xl w-full md:mx-4 text-center mb-2 md:mb-4"
    >
      Frequently asked questions
    </div>
    {#each questionsandanswers as qna}
      {#if qna.id === openID}
        <div
          class="question border border-gray-300 p-4 md:mx-10 rounded-lg flex my-2 justify-between"
        >
          <div class="flex-1">
            <div class="title font-bold">{qna.question}</div>
            <div class="title">{qna.answer}</div>
          </div>
          <div class="open cursor-pointer">
            <img src="https://img.icons8.com/windows/32/000000/minus.png" />
          </div>
        </div>
      {:else}
        <div
          class="question border  border-gray-300 p-4 md:mx-10 rounded-lg flex my-2 justify-between"
        >
          <div>
            <div class="title">{qna.question}</div>
            <div class="title hidden">{qna.answer}</div>
          </div>
          <div
            class="open cursor-pointer "
            on:click={() => {
              openID = qna.id;
            }}
          >
            <img src="https://img.icons8.com/windows/32/000000/add--v1.png" />
          </div>
        </div>
      {/if}
    {/each}
    <div class="title text-center text-xl md:text-3xl mt-10">
      Still have a question?
    </div>
    <div
      class="subtitle text-center text-lg  max-w-lg mr-auto ml-auto mt-5 mb-10"
    >
      If you can not find your question the FAQs, you can always reach us out.
      We would reply at the earliest!
    </div>
  </div>
</section>
