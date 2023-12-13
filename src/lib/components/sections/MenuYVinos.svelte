<script>
  import Footer from "../utils/Footer.svelte";
  import Title from "../utils/Title.svelte";
  export let title = "";
  export let pdf = "";
  export let styles = "";
</script>

<main class="bg-black w-full">
  <section class="flex justify-center">
    <div
      class="flex flex-col justify-center items-center w-full max-w-[1100px] mx-5 {styles}"
    >
      <Title titleContent={title}/>

      <div class="w-full relative my-[3.6em] flex flex-col items-center">
        <div
          class="h-[1.6em] sm:h-[1.9em] top-[-5px] w-full bg-black md:h-11 md:h-11 absolute"
        ></div>
        <embed class="w-[90%] md:w-[65%] min-h-[100vh]" src={pdf} type="" />
      </div>
    </div>
  </section>
</main>
<footer
  class="bg-custom-scondary min-h-[100px] border-t-[1px] border-white flex justify-center"
>
  <Footer
    srcInstaIcon="src/img/icons/instagram.svg"
    srcFacebookIcon="src/img/icons/facebook.svg"
  />
</footer>
