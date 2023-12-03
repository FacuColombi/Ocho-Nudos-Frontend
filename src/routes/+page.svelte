<script>
  import Header from "../lib/components/utils/Header.svelte";
  import Footer from "../lib/components/utils/Footer.svelte";
  import Button from "../lib/components/utils/Button.svelte";
  import MenuEvents from "../lib/components/sections/MenuEvents.svelte";
</script>

<header class="flex justify-center bg-nav items-center absolute w-full">
  <Header navType="home" isLogged="Administrador" class=" bg-transparent" />
</header>

<main class="bg-custom-scondary">
  <!-- HERO SECTION -->

  <section class="h-[100vh] bg-gray-600 flex justify-center items-center">
    <article>
      <h1>
        <figure class="w-80 h-40 bg-cyan-300">
          <img  alt="Ocho Nudos" />
        </figure>
      </h1>
    </article>
  </section>

  <!-- QUIK ACCESS -->

  <section
    class="w-full bg-custom-scondary flex justify-center items-center min-h-[180px]"
  >
    <article
      class="max-w-[1100px] w-full flex gap-20 justify-center items-center"
    >
      <Button
        text="Hace una reserva"
        style="text-lg font-light py-4 px-7"
        type="button"
      />
      <Button
        text="Marcas amigas"
        style="text-lg font-light py-4 px-7"
        type="button"
      />
    </article>
  </section>

  <!-- MENU -->

  <MenuEvents
    title="MENÚ"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus accusantium iste fuga quasi. Dicta, labore porro. Dolore accusamus veritatis esse. Ex assumenda nulla nesciunt magni saepe odit vitae similique. Maxime, impedit ullam."
    btnText="Ver menú"
  />

  <!-- <section class="bg-img-menu h-[100vh] bg-gray-500 flex justify-center">
    <div class="max-w-[1100px] w-full items-center flex ">
        <article class="max-w-md flex-col">
            <h2 class="text-5xl mb-4 text-white font-extralight">MENÚ</h2>
            <p class="mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus accusantium iste fuga quasi. Dicta, labore porro. Dolore accusamus veritatis esse. Ex assumenda nulla nesciunt magni saepe odit vitae similique. Maxime, impedit ullam.</p>
            <Button text="Ver menú"/>
        </article>
    </div>
  </section> -->

  <!-- SKILLS -->

  <section class="h-[100vh] bg-gray-300 flex justify-center">
    <div class="max-w-[1100px] w-full flex items-center gap-10 text-center">
      <article>
        <h3 class="text-2xl font-extralight flex justify-center">
          Productos naturales
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
          repellendus obcaecati illo autem odio nihil rem a. Tempore!
        </p>
      </article>
      <article>
        <h3 class="text-2xl font-extralight flex justify-center">
          Lugar perfecto
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
          repellendus obcaecati illo autem odio nihil rem a. Tempore!
        </p>
      </article>
      <article>
        <h3 class="text-2xl font-extralight flex justify-center">
          Experiencia única
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
          repellendus obcaecati illo autem odio nihil rem a. Tempore!
        </p>
      </article>
    </div>
  </section>

  <section class="h-[100vh] bg-gray-800">
    <div class="grid gallery-custom-grid md:grid-cols-4 w-full h-full">
      <figure class="bg-red-400 ">
      </figure>
      <figure class="bg-yellow-400">
      </figure>
      <figure class="bg-green-400">
      </figure>
      <figure class="bg-blue-400">
      </figure>
      <figure class="bg-pink-400">
      </figure>
      <figure class="bg-orange-400">
      </figure>
      <figure class="bg-purple-400">
      </figure>
      <figure class="bg-gray-400">
      </figure>
      <figure class="bg-violet-400">
      </figure>
      <figure class="bg-amber-800">
      </figure>
      <figure class="bg-teal-600">
      </figure>
      <figure class="bg-lime-300">
      </figure>
    </div>
  </section>
</main>

<footer
  class="bg-custom-scondary min-h-[100px] border-t-[1px] border-white flex justify-center"
>
  <Footer
    srcInstaIcon="../img/icons/instagram.svg"
    srcFacebookIcon="../img/icons/facebook.svg"
  />
</footer>

<style>
  .bg-nav {
    background: linear-gradient(#0a0a0a, transparent);
  }

  .bg-img-menu {
    background-image: url(../img/02-10\ imagen\ 2.jpg);
  }

  .gallery-custom-grid{
    grid-template-areas: 
    "a a a b"
    "a a a c"
    "a a a d"
    "e e f f"
    "g g f f"
    "g g h h"
    "i i i i"
    "i i i i"
    "j k l l"
    ;
  }

  .gallery-custom-grid figure:nth-of-type(1){
    grid-area: a;
  }
  .gallery-custom-grid figure:nth-of-type(2){
    grid-area: b;
  }
  .gallery-custom-grid figure:nth-of-type(3){
    grid-area: c;
  }
  .gallery-custom-grid figure:nth-of-type(4){
    grid-area: d;
  }
  .gallery-custom-grid figure:nth-of-type(5){
    grid-area: e;
  }
  .gallery-custom-grid figure:nth-of-type(6){
    grid-area: f;
  }
  .gallery-custom-grid figure:nth-of-type(7){
    grid-area: g;
  }
  .gallery-custom-grid figure:nth-of-type(8){
    grid-area: h;
  }
  .gallery-custom-grid figure:nth-of-type(9){
    grid-area: i;
  }
  .gallery-custom-grid figure:nth-of-type(10){
    grid-area: j;
  }
  .gallery-custom-grid figure:nth-of-type(11){
    grid-area: k;
  }
  .gallery-custom-grid figure:nth-of-type(12){
    grid-area: l;
  }
</style>
