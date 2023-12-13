<script>
  import Header from "../lib/components/utils/Header.svelte";
  import Footer from "../lib/components/utils/Footer.svelte";
  import Button from "../lib/components/utils/Button.svelte";
  import MenuEvents from "../lib/components/sections/MenuEvents.svelte";
  import logoCompleto from "../img/logoCompleto.png";
  import menuBackG from "../img/menu-image.jpg";
  import Input from "../lib/components/utils/Input.svelte";
  import Reserva from "../lib/components/popups/Reserva.svelte";
  import Form from "../lib/components/utils/Form.svelte";
  import popupController from "../logic/popupsController.js";


</script>

<header class="flex justify-center bg-nav z-20 items-center absolute w-full">
  <Header navType="home" class=" bg-transparent"  isLogged="Administrador"/>
</header>

<main class="bg-custom-scondary">

  <Reserva/>
  <!-- HERO SECTION -->

  <section
    class="h-[100vh] top-0 bottom-0 left-0 right-0 relative bg-gray-600 flex justify-center items-center"
  >
    <div class="absolute top-0 left-0 overflow-hidden w-full h-full">
      <video
        autoplay
        loop
        muted
        src="src/img/8nudosVideo.MOV"
        class="w-full h-full object-cover"
      ></video>
    </div>
    <article class="w-full flex justify-center items-center z-10">
      <h1>
        <figure>
          <img src={logoCompleto} alt="Ocho Nudos" />
        </figure>
      </h1>
    </article>
  </section>

  <!-- QUIK ACCESS -->

  <section
    class="w-full bg-custom-scondary flex justify-center items-center min-h-[180px]"
  >
    <article
      class="max-w-[1100px] w-full flex gap-10 sm:gap-20 justify-center items-center"
    >
      <Button click={() => {popupController.showPopup("hacerReserva")}}
        text="Hace una reserva"
        style="text-sm px-3 sm:text-lg font-light py-4 sm:px-6"
        type="button"
      />
      <Button
        text="Marcas amigas"
        style="text-sm px-3 sm:text-lg font-light py-4 sm:px-6"
        type="button"
      />
    </article>
  </section>

  <!-- MENU -->

  <section
    class="section-bg bg-center bg-cover h-[100vh] flex justify-center"
    style="background-image: url(src/img/menu-image.jpg); background-attachment:fixed"
  >
    <MenuEvents
      image="menu"
      title="MENÚ"
      text="Nuestro menú es un viaje culinario que combina sabores auténticos con ingredientes frescos y cuidadosamente seleccionados. Desde platos clásicos hasta creaciones innovadoras, cada opción en nuestro menú es un tributo a la pasión por la buena comida. "
      btnText="Ver menú"
    />
  </section>
  <!-- SKILLS -->

  <section
    class="h-[100vh] bg-gray-300 flex justify-center bg-center bg-cover"
    style=" background-image: url(src/img/skils-image.jpg); background-attachment:fixed"
  >
    <div class="flex justify-center bg-black w-full bg-opacity-[0.3]">
      <div
        class="flex-col md:flex-row justify-center max-w-[1100px] w-full flex items-center gap-10 text-center text-white"
      >
        <article class="max-w-[400px]">
          <h3 class="text-lg lg:text-2xl font-extralight flex justify-center">
            Productos naturales
          </h3>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
            repellendus obcaecati illo autem odio nihil rem a. Tempore!
          </p>
        </article>
        <article class="max-w-[400px]">
          <h3 class="text-lg lg:text-2xl font-extralight flex justify-center">
            Lugar perfecto
          </h3>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
            repellendus obcaecati illo autem odio nihil rem a. Tempore!
          </p>
        </article>
        <article class="max-w-[400px]">
          <h3 class="text-lg lg:text-2xl font-extralight flex justify-center">
            Experiencia única
          </h3>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
            repellendus obcaecati illo autem odio nihil rem a. Tempore!
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="h-[100vh] bg-gray-800">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full h-full">
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery1.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery2.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery3.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery4.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery5.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery6.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery7.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery8.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery9.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery10.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery11.jpg);"></figure>
      <figure class="bg-cover bg-center" style="background-image: url(src/img/gallery/gallery12.jpg);"></figure>
    </div>
  </section>

  <!-- EVENTS -->

  <section
    class="section-bg bg-center bg-cover h-[100vh] flex justify-center"
    style="background-image: url(src/img/events-image.jpg); background-attachment:fixed"
  >
    <MenuEvents
      image="menu"
      title="EVENTOS"
      text="Sumérgete en una experiencia única en nuestro restaurante, donde la música cobra vida. Descubre nuestros eventos llenos de emoción con espectáculos en vivo de música que deleitan tus sentidos. Cada evento es una celebración de la buena comida y la excelente compañía."
      btnText="Ver menú"
    />
  </section>

  <!-- GOOGLE REVIEWS -->

  <section
    class="section-bg bg-center bg-cover h-[100vh] flex justify-center"
    style="background-image: url(src/img/reviews-image.jpg); background-attachment:fixed"
  >
    <div class="bg-black w-full bg-opacity-[0.5]">
      <h2
        class="text-center text-5xl text-custom-primary font-extralight mt-20"
      >
        Reseñas
      </h2>
      <div class="w-full h-[80vh] flex justify-center items-center">
        <article
          class="h-[450px] text-sm sm:text-base sm:h-[400px] mx-10 max-w-[900px] w-full bg-black border border-custom-primary flex justify-center item text-white"
        >
          <div
            class="flex flex-col justify-center items-start gap-3 mt-5 w-[80%] h-[80%]"
          >
            <div class="flex justify-start items-center gap-4">
              <figure
                class="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] overflow-hidden rounded-full bg-cover bg-center"
                style="background-image: url(src/img/skils-image.jpg);"
              ></figure>
              <h3 class="text-xl font-extralight">Juana <br /> Martinez</h3>
            </div>
            <div>
              <p>
                Ocho Nudos es simplemente sublime. La ubicación, con vistas al
                mar y a solo unas cuadras del puerto, crea un ambiente mágico
                para disfrutar de una comida excepcional. Cada plato es una obra
                maestra de sabores y presentación, reflejando una dedicación a
                la calidad y la frescura. El personal es amable y atento,
                haciendo que te sientas como en casa desde el primer momento.
                Este lugar sin duda se ha convertido en un destino obligado cada
                vez que visitamos Piriápolis.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- FEST -->

  <section
    class="section-bg bg-bottom bg-cover h-[100vh] flex justify-center"
    style="background-image: url(src/img/fest-imagen.jpg); background-attachment:fixed"
  >
    <div
      class="bg-black w-full bg-opacity-[0.5] flex justify-center items-center"
    >
      <div
        class=" max-w-[90%] xl:max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center"
      >
        <div class="text-white flex flex-col gap-5">
          <h3 class="text-2xl sm:text-5xl font-extralight leading-[1.2em]">¿Organizamos tu fiesta?</h3>
          <p class="leading-[1.8em] text-sm md:text-base">
            Nuestro equipo experto se encarga de cada detalle para que tu fiesta
            sea inolvidable. Desde cumpleaños hasta eventos especiales, cuidamos
            cada aspecto para que tú simplemente disfrutes. Con un toque de
            creatividad y dedicación, creamos experiencias únicas que perduran
            en el tiempo.
          </p>
        </div>
        <form action="">
          <Form />
        </form>
      </div>
    </div>
  </section>


  <!-- Login Pop Up -->
</main>

<footer
  class="bg-custom-scondary min-h-[100px] border-t-[1px] border-white flex justify-center"
>
  <Footer
    srcInstaIcon="src/img/icons/instagram.svg"
    srcFacebookIcon="src/img/icons/facebook.svg"
  />
</footer>

<style>
  .bg-nav {
    background: linear-gradient(#0a0a0a, transparent);
  }

  .bg-img-menu {
    background-image: url(../img/02-10\ imagen\ 2.jpg);
  }

  .gallery-custom-grid {
    grid-template-areas:
      "a a a b"
      "a a a c"
      "a a a d"
      "e e f f"
      "g g f f"
      "g g h h"
      "i i i i"
      "i i i i"
      "j k l l";
  }

  .gallery-custom-grid figure:nth-of-type(1) {
    grid-area: a;
  }
  .gallery-custom-grid figure:nth-of-type(2) {
    grid-area: b;
  }
  .gallery-custom-grid figure:nth-of-type(3) {
    grid-area: c;
  }
  .gallery-custom-grid figure:nth-of-type(4) {
    grid-area: d;
  }
  .gallery-custom-grid figure:nth-of-type(5) {
    grid-area: e;
  }
  .gallery-custom-grid figure:nth-of-type(6) {
    grid-area: f;
  }
  .gallery-custom-grid figure:nth-of-type(7) {
    grid-area: g;
  }
  .gallery-custom-grid figure:nth-of-type(8) {
    grid-area: h;
  }
  .gallery-custom-grid figure:nth-of-type(9) {
    grid-area: i;
  }
  .gallery-custom-grid figure:nth-of-type(10) {
    grid-area: j;
  }
  .gallery-custom-grid figure:nth-of-type(11) {
    grid-area: k;
  }
  .gallery-custom-grid figure:nth-of-type(12) {
    grid-area: l;
  }
</style>
