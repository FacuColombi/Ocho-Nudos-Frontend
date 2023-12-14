<script>
  import Button from "../utils/Button.svelte";

  export let type = "";
  export let fullName = "";
  export let email = "";
  export let qtyPeople = "";
  export let phone = "";
  export let date = "";
  export let hour = "";
  export let comments = "";
  export let location = "";


</script>

<article
  class="grid grid-cols-1 sm:grid-cols-5 h-[500px] sm:max-h-[160px] gap-3 mt-4"
>
  <div class="flex flex-col justify-around">
    <h3>{fullName}</h3>

    <p>{email}</p>
  </div>

  <div class="col-span-3 flex flex-col justify-around">
    <div class="flex gap-10">
      <p><span class="text-custom-primary">Comensales:</span>{qtyPeople}</p>
      <p><span class="text-custom-primary">Tel:</span>{phone}</p>
      <p><span class="text-custom-primary">Día:</span>{date}</p>
      {#if location}
      <p><span class="text-custom-primary">localidad:</span>{location}hs</p>
      {:else}
      <p><span class="text-custom-primary">Hora:</span>{hour}hs</p>
      {/if}
    </div>
    <p>
        {comments}
    </p>
  </div>
  <div class="flex flex-col justify-around max-w-[120px]">
    <Button text="Aceptar" />
    <Button text="Cancelar" style="bg-white" textColor="text-black" />
  </div>
</article>
