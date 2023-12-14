<script>
  import Header from "../../lib/components/utils/Header.svelte";

  import MenuYVinos from "../../lib/components/sections/MenuYVinos.svelte";

  const base_url = "https://ocho-nudos-backend.onrender.com";
</script>

<header class="flex justify-center bg-nav bg-black z-10 items-center w-full">
  <Header class=" bg-transparent" isLogged="Administrador" />
</header>

<MenuYVinos title="Nuesta carta" pdf="{base_url}/public/pdf/Menu/pdfMenu.pdf" />


