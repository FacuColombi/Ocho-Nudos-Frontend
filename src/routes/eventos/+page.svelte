<script>
  import Header from "../../lib/components/utils/Header.svelte";
  import Footer from "../../lib/components/utils/Footer.svelte";
  import Title from "../../lib/components/utils/Title.svelte";
  import Button from "../../lib/components/utils/Button.svelte";
  import Artist from "../../lib/components/utils/Artist.svelte";
</script>

<header class="flex justify-center bg-nav bg-black z-10 items-center w-full">
  <Header navType="cart" class=" bg-transparent" isLogged="Administrador" />
</header>

<main class="bg-black w-full">
  <Title titleContent="Próimos eventos" />
  <section class="w-full flex justify-center py-[10em] ">
    <div class="w-full max-w-[1100px] flex flex-col gap-y-40 mx-3">
      <Artist
        name="Hugo Fattoruso"
        text="Hugo Fattoruso, músico uruguayo, es un virtuoso del piano, acordeón
      y otros instrumentos. Su creatividad ha marcado el panorama musical,
      fusionando ritmos latinoamericanos con el jazz y el rock."
        date="12-12-2023 "
        hour="20:00hs"
        image="hugoFattoruso.webp"
      />

      <Artist
        name="Ruben Rada"
        text="Rubén Rada, icónico músico uruguayo, es un talentoso multiinstrumentista reconocido por su versatilidad en géneros como el candombe, la música popular uruguaya y el jazz. Su voz inconfundible y su habilidad para fusionar estilos han dejado una huella indeleble en la escena musical internacional. "
        date="22-12-2023"
        hour="20:00hs"
        image="rada.jpg"
      />

      <Artist
      name="Gabriel Peluffo"
      text="
      Gabriel Peluffo, músico y cantante uruguayo, es conocido por su carisma en el escenario y su poderosa voz que cautiva al público. Como líder de la banda de rock uruguaya 'Buitres', ha dejado una marca indeleble en la escena musical con sus letras profundas y su entrega apasionada en cada actuación."
      date="10-01-2024"
      hour="21:00hs"
      image="gabrielPeluffo.jpeg"/>
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
