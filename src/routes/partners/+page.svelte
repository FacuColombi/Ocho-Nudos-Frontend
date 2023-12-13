<script>
  import Header from "../../lib/components/utils/Header.svelte";
  import Footer from "../../lib/components/utils/Footer.svelte";
  import Title from "../../lib/components/utils/Title.svelte";
</script>

<header class="flex justify-center bg-nav bg-black z-10 items-center w-full">
  <Header navType="" class=" bg-transparent" isLogged="Administrador" />
</header>

<main class="bg-black pb-20">
  <Title titleContent="Macas amigas" />

  <section class="section-bg bg-center bg-cover flex justify-center mt-10">
    <div class=" max-w-[90%] xl:max-w-[1100px] w-full items-center flex mt-10">
      <article class="flex flex-col items-start text-white gap-10">
        <h2
          class="text-2xl text-custom-primary font-extralight text-center pt-[2.8em]"
        >
          Bodega Garzón
        </h2>
        <p>
          Bodega Garzón es una bodega uruguaya reconocida internacionalmente por
          su excelencia en la producción de vinos. Fundada en 2008 por Alejandro
          Bulgheroni, un empresario argentino, se encuentra ubicada en el
          departamento de Maldonado, Uruguay. La bodega se destaca por su
          compromiso con la calidad, la sostenibilidad y la innovación en la
          producción vitivinícola. Utiliza tecnologías avanzadas y prácticas
          sostenibles para cultivar variedades de uvas únicas en la región,
          beneficiándose de un clima favorable y suelo propicio para la
          viticultura.
        </p>
        <figure class="min-h-[600px] w-full gridPartners">
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/Garzonimg6.png);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/Garzonimg3.jpeg);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/Garzonimg1.jpeg);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/Garzonimg2.gif);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/Garzonimg4.jpeg);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/Garzonimg5.jpeg);"
          ></div>
        </figure>
      </article>
    </div>
  </section>
  <section class="section-bg bg-center bg-cover flex justify-center mt-10">
    <div class=" max-w-[90%] xl:max-w-[1100px] w-full items-center flex mt-10">
      <article class="flex flex-col items-start text-white gap-10">
        <h2
          class="text-2xl text-custom-primary font-extralight text-center pt-[2.8em]"
        >
          Estrella Galicia
        </h2>
        <p>
          Estrella Galicia es una reconocida marca cervecera con raíces
          profundas en Galicia, España. Fundada en 1906 por José María Rivera
          Corral en la ciudad de La Coruña, la historia de Estrella Galicia se
          ha caracterizado por su compromiso con la calidad, la tradición y la
          innovación. A lo largo de más de un siglo, la cervecera ha mantenido
          su producción en Galicia, conservando y perfeccionando la artesanía
          cervecera que la caracteriza. Su crecimiento y evolución la han
          llevado a convertirse en un referente en el mercado cervecero español
          y a expandir su presencia internacional.
        </p>
        <figure class="min-h-[600px] w-full gridPartners">
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/estrellagalicia5.webp);"
          ></div>
          <div
            class="bg-cover bg-let"
            style="background-image: url(src/img/partners/estrellagalicia6.jpeg);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/estrellagalicia1.jpeg);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/estrellagalicia2.jpeg);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/estrellagalicia4.webp);"
          ></div>
          <div
            class="bg-cover bg-center"
            style="background-image: url(src/img/partners/estrellagalicia3.webp);"
          ></div>
        </figure>
      </article>
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

<style>
  @media screen and (min-width: 720px) {
    .gridPartners {
      gap: 0.5em;
      display: grid;
      grid-template-areas:
        "a b c c"
        "a b d d"
        "e f d d";
    }
  }

  @media screen and (max-width: 719px) {
    .gridPartners {
      gap: 0.5em;
      display: grid;
      grid-template-areas:
        "a a b b"
        "a a b b"
        "e e f f"
        "c c c c"
        "d d d d"
        "d d d d";
    }
  }

  .gridPartners > div:nth-of-type(1) {
    grid-area: a;
  }
  .gridPartners > div:nth-of-type(2) {
    grid-area: b;
  }
  .gridPartners > div:nth-of-type(3) {
    grid-area: c;
  }
  .gridPartners > div:nth-of-type(4) {
    grid-area: d;
  }
  .gridPartners > div:nth-of-type(5) {
    grid-area: e;
  }
  .gridPartners > div:nth-of-type(6) {
    grid-area: f;
  }
</style>
