<script>
  export let navType = "";
  export let isLogged = "";
</script>

{#if navType == "home"}
  <div class="flex justify-between w-full max-w-[1100px] py-6 bg-nav">
    <figure>
      <img src="" alt="Logo de la marca" />
    </figure>

    <ul class="hidden sm:flex gap-0 text-white font-light md:gap-3">
      <li><a class="active" href=" ">Home</a></li>
      <li><a href=" ">Menú</a></li>
      <li><a href=" ">Vinos</a></li>
      <li><a href=" ">Eventos</a></li>
      <li><a href=" ">Contacto</a></li>
    </ul>
  </div>
  {#if isLogged}
    <span class="hidden sm:block pr-8 py-6 text-custom-primary pl-4 font-light">
      {isLogged}
    </span>
  {/if}
  <div class=" black sm:hidden py-6 pr-8">
    HambMenu
  </div>
{:else if navType === "cart"}
  <div class="flex justify-between w-full max-w-[1100px] py-6">
    <figure>
      <img src="" alt="Logo de la marca" />
    </figure>

    <ul class="flex gap-2 text-white font-light ">
      <li><a href=" ">Home</a></li>
      <li><a class="active" href=" ">Menú</a></li>
      <li><a href=" ">Vinos</a></li>
      <li><a href=" ">Eventos</a></li>
      <li><a href=" ">Contacto</a></li>
    </ul>
  </div>
  {#if isLogged}
    <span class="py-6 text-custom-primary pl-4 font-light">
      {isLogged}
    </span>
  {/if}
{:else if navType === "wines"}
  <div class="flex justify-between w-full max-w-[1100px] py-6">
    <figure>
      <img src="" alt="Logo de la marca" />
    </figure>

    <ul class="flex gap-2 text-white font-light ">
      <li><a href=" ">Home</a></li>
      <li><a href=" ">Menú</a></li>
      <li><a class="active" href=" ">Vinos</a></li>
      <li><a href=" ">Eventos</a></li>
      <li><a href=" ">Contacto</a></li>
    </ul>
  </div>
  {#if isLogged}
    <span class="py-6  text-custom-primary pl-4 font-light">
      {isLogged}
    </span>
  {/if}
{:else if navType == "events"}
  <div class="flex justify-between w-full max-w-[1100px] py-6">
    <figure>
      <img src="" alt="Logo de la marca" />
    </figure>

    <ul class="flex gap-2 text-white font-light ">
      <li><a href=" ">Home</a></li>
      <li><a href=" ">Menú</a></li>
      <li><a href=" ">Vinos</a></li>
      <li><a class="active" href=" ">Eventos</a></li>
      <li><a href=" ">Contacto</a></li>
    </ul>
  </div>
  {#if isLogged}
    <span class="py-6  text-custom-primary pl-4 font-light">
      {isLogged}
    </span>
  {/if}
{:else if navType == "contact"}
  <div class="flex justify-between w-full max-w-[1100px] py-6">
    <figure>
      <img src="" alt="Logo de la marca" />
    </figure>

    <ul class="flex gap-2 text-white font-light ">
      <li><a href=" ">Home</a></li>
      <li><a href=" ">Menú</a></li>
      <li><a href=" ">Vinos</a></li>
      <li><a href=" ">Eventos</a></li>
      <li><a class="active" href=" ">Contacto</a></li>
    </ul>
  </div>
  {#if isLogged}
    <span class="py-6  text-custom-primary pl-4 font-light">
      {isLogged}
    </span>
  {/if}
{:else}
  <div class="flex justify-between w-full max-w-[1100px] py-6">
    <figure>
      <img src="" alt="Logo de la marca" />
    </figure>

    <ul class="flex gap-2 text-white font-light ">
      <li><a href=" ">Home</a></li>
      <li><a href=" ">Menú</a></li>
      <li><a href=" ">Vinos</a></li>
      <li><a href=" ">Eventos</a></li>
      <li><a href=" ">Contacto</a></li>
    </ul>
  </div>
  {#if isLogged}
    <span class="py-6  text-custom-primary pl-4 font-light">
      {isLogged}
    </span>
  {/if}
{/if}

<style>

  ul li {
    padding: 0 .6rem;
    text-align: center;
  }

  ul a {
    transition: 0.4s;
  }

  ul a:hover {
    font-weight: 600;
  }

  .active {
    font-weight: 600;
  }

  a:after {
    display: block;
    content: "";
    border-bottom: solid 3px #b6814f;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  .active::after {
    display: block;
    content: "";
    border-bottom: solid 3px #b6814f;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform: scaleX(1);
  }

  a:hover:after {
    transform: scaleX(1);
  }
</style>
