<script>
  import Button from "./Button.svelte";

  export let name = "";
  export let text = "";
  export let date = "";
  export let hour = "";
  export let image = "";
</script>

<article class="grid grid-cols-1 sm:grid-cols-2 gap-5 min-h-[400px]">
  <div class="text-white flex flex-col gap-2 sm:gap-3 md:gap-4 mt-4">
    <h2 class="text-3xl font-extralight">{name}</h2>
    <p>
      {text}
    </p>
    <span>{date}</span>
    <p>{hour}</p>
    <div>
      <Button text="Hacer reserva" />
    </div>
  </div>
  <figure
    class="bg-cover bg-center w-full h-full min-h-[400px]"
    style="background-image: url(src/img/eventos/{image});"
  ></figure>
</article>
