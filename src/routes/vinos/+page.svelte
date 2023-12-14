<script>
    import Header from "../../lib/components/utils/Header.svelte";
    import Footer from "../../lib/components/utils/Footer.svelte";
    import MenuYVinos from "../../lib/components/sections/MenuYVinos.svelte";
    import SideBar from "../../lib/components/utils/SideBar.svelte";

    const base_url = "http://localhost:3000";

  </script>
  
  <header class="flex justify-center bg-nav bg-black z-10 items-center w-full">
    <Header navType="wines" class=" bg-transparent" isLogged="Administrador" />
  </header>
  
  <MenuYVinos title="Nuestos vinos" pdf="{base_url}/public/pdf/Wines/pdfWine.pdf" />
  
  
  