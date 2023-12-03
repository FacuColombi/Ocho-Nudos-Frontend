<script>
  import Button from "../utils/Button.svelte";
  export let title = "";
  export let text = "";
  export let btnText = "";
</script>

<section class="bg-img-menu h-[100vh] bg-gray-500 flex justify-center">
  <div class="max-w-[1100px] w-full items-center flex">
    <article class="max-w-md flex-col">
      <h2 class="text-5xl mb-4 text-white font-extralight">{title}</h2>
      <p class="mb-4 text-white">{text}</p>
      <Button text={btnText} />
    </article>
  </div>
</section>
