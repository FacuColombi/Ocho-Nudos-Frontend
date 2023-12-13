<script>
  import Button from "../utils/Button.svelte";
  export let title = "";
  export let text = "";
  export let btnText = "";
  export let image = "";


</script>


  <div class="flex justify-center bg-black w-full bg-opacity-[0.3]">
  <div class=" max-w-[90%] xl:max-w-[1100px] w-full items-center flex">
    <article class="max-w-md flex-col">
      <h2 class="text-5xl mb-4 text-white font-extralight">{title}</h2>
      <p class="mb-4 text-white">{text}</p>
      <Button text={btnText} />
    </article>
  </div>
  </div>


