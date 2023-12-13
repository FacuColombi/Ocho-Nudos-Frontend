<script>
  import Header from "../../lib/components/utils/Header.svelte";

  import MenuYVinos from "../../lib/components/sections/MenuYVinos.svelte";


</script>

<header class="flex justify-center bg-nav bg-black z-10 items-center w-full">
  <Header class=" bg-transparent" isLogged="Administrador" />
</header>

<MenuYVinos title="Nuesta carta" pdf="src/img/Escolaridad Facundo Colombi AP y DW.pdf" />


