<style global>
  @import "tailwindcss/base";

  @import "tailwindcss/components";

  @import "tailwindcss/utilities";

  html {
    height: -webkit-fill-available;
  }
  body {
    @apply font-inter;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(209, 250, 229);
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
