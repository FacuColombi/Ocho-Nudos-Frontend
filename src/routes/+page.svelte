<script>
  import Header from "../lib/components/utils/Header.svelte";
  import Footer from "../lib/components/utils/Footer.svelte";
  import Button from "../lib/components/utils/Button.svelte";
  let src = "../img/logoCompleto.png";
</script>

<header class="flex justify-center bg-nav absolute w-full">
  <Header navType="home" isLogged="Administrador" class=" bg-transparent" />
</header>

<main class="bg-custom-scondary">
  <!-- HERO SECTION -->

  <section class="h-[100vh] bg-gray-600 flex justify-center items-center">
    <article>
      <h1>
        <figure class="w-80 h-40 bg-cyan-300">
          <img {src} alt="Ocho Nudos" />
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

  <section class="bg-img-menu h-[100vh] bg-gray-500 flex justify-center">
    <div class="max-w-[1100px] w-full items-center flex ">
        <article class="max-w-md flex-col">
            <h2 class="text-5xl mb-4 text-white font-extralight">MENÚ</h2>
            <p class="mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus accusantium iste fuga quasi. Dicta, labore porro. Dolore accusamus veritatis esse. Ex assumenda nulla nesciunt magni saepe odit vitae similique. Maxime, impedit ullam.</p>
            <Button text="Ver menú"/>
        </article>
    </div>
  </section>


  <!-- SKILLS -->

  <section class="h-[100vh] bg-gray-300 flex justify-center ">
    <div class="max-w-[1100px] w-full flex items-center gap-10 text-center">
        <article >
            <h3 class="text-2xl font-extralight flex justify-center">Productos naturales</h3>
            <p>Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore repellendus obcaecati illo autem odio nihil rem a. Tempore!</p>
        </article>
        <article >
            <h3 class="text-2xl font-extralight flex justify-center">Lugar perfecto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore repellendus obcaecati illo autem odio nihil rem a. Tempore!</p>
        </article>
        <article >
            <h3 class="text-2xl font-extralight flex justify-center">Experiencia única</h3>
            <p>Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore repellendus obcaecati illo autem odio nihil rem a. Tempore!</p>
        </article>
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
</style>
