<script>
  import Introduction from "./Introduction.svelte";
  import Tailwind from "./components/Tailwind.svelte";
  import Headroom from "svelte-headroom";
  export let name;
</script>

<section id="whatisrenteefy">
  <div class="container ml-auto mr-auto max-w-screen-lg m-4  mt-24 rounded-lg">
    <div
      class="question text-center md:mb-10 md:mt-10  font-inter font-extrabold text-4xl"
    >
      What is Renteefy?
    </div>
    <div class="answerContainer flex flex-wrap md:flex-nowrap md:mb-10 ">
      <div class="card p-4 flex-1 ">
        <div class="image mb-10 w-full ">
          <img
            class="w-full rounded-lg"
            src="asset/whatisrenteefy1.png"
            alt=""
          />
        </div>
        <div class="title md:text-2xl font-bold">List your Items on Rent</div>
        <div class="subtitle font-worksans">
          Renteefy is a community centered marketplace which allows you to list
          your items (like books, electric appliances, home decor etc) or
          services (like tutoring classes, household, coding etc) for rent
        </div>
      </div>
      <div class="card p-4 flex-1 ">
        <div class="image mb-10 w-full ">
          <img
            class="w-full rounded-lg"
            src="asset/whatisrenteefy2.png"
            alt=""
          />
        </div>
        <div class="title md:text-2xl font-bold">
          List your Services on Rent
        </div>
        <div class="subtitle font-worksans">
          Don't stop at Items, you can rent your Skills too. Renteefy can help
          you freelance or hire freelancers at modest rates to get your job done
          quickly. From cooking to coding, Renteefy is a platform for everyone
        </div>
      </div>

      <div class="card p-4 flex-1  ">
        <div class="image  mb-10 w-full ">
          <img
            class="w-full rounded-lg"
            src="asset/whatisrenteefy3.png"
            alt=""
          />
        </div>
        <div class="title md:text-2xl font-bold">Rent instead of buy</div>
        <div class="subtitle font-worksans">
          Are you in a situation where you want something for just a certain
          amount of time? Rent it out with Renteefy. Or Maybe you have unused
          items lying around and it's in working condition. List it on Renteefy
          and make money out of it
        </div>
      </div>
    </div>
  </div>
</section>
