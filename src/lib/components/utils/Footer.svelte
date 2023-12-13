<script>
  import Button from "./Button.svelte";
  export let srcInstaIcon = "";
  export let srcFacebookIcon = "";
</script>

<div class="max-w-[1100px] w-full text-white pb-10 flex flex-col sm:flex-row mx-[5%] xl:mx-0 justify-between">
  <article class="my-8">
    <div class="mb-4">
      <h3 class="text-lg text-white font-light">Contactanos</h3>
      <div class="mt-1 flex gap-2">
        <img class="text-white" src={srcInstaIcon} alt="Instagram Icon" />
        <img src={srcFacebookIcon} alt="Facebook Icon" />
      </div>
      <p class="text-white text-base">097 444 070</p>
    </div>

    <div>
      <h3 class="text-lg font-light  init">Dirección</h3>
      <p class="mt-1">
        Rbla. de los Ingleses esquina, 20200 Piriapolis <br /> Departamento de Maldonado
      </p>
    </div>
  </article>
  <article class="my-8">
      <Button text="Trabaje con nosotros" type="button" style="text-xs md:text-sm"/>
  </article>

</div>