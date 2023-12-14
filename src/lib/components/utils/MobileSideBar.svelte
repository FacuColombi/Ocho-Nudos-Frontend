<script>
    import { onMount } from "svelte";
    import adminController from "../../../logic/adminController";

    export let user = "";

    let isOpen = false;

    let isLoggedIn = false;

    onMount(async () => {
      isLoggedIn = await adminController.checkLogin();

    });

    function toggleSidebar() {
      isOpen = !isOpen;
    }
</script>
  
  
  
  <div class="{isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full max-w-[300px]  w-[90%] bg-black text-white transition-transform duration-300 ease-in-out z-50">
    <div class="flex w-full justify-end items-center py-10 pr-8">
   

      <img class="block w-[25px] h-[25px]" on:click={toggleSidebar} src="src/img/icons/xmark.svg" alt="">
    </div>
    <ul class="py-6 text-xl font-extralight flex flex-col">
      <li><a href="/" class="block px-8 py-4 border-t-[1px] border-b-[1px] hover:bg-gray-900">Home</a></li>
      <li><a href="/menu" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Menú</a></li>
      <li><a href="/vinos" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Vinos</a></li>
      <li><a href="/eventos" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Eventos</a></li>
      <li><a href="#footerSection" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Contacto</a></li>
      {#if isLoggedIn}
        <li><a href="#" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Listado de resevas</a></li>
        <li><a href="#" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Fiestas a organizar</a></li>
        <li><a href="#" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Eventos</a></li>
        <li><a href="#" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Futuros candidatos</a></li>
        <li><a href="#" class="block px-8 py-4 border-b-[1px] hover:bg-gray-900">Modificar carta</a></li>
        <li><a on:click={() => adminController.logout()} href="#" class="block px-8 py-4 border-b-[1px] text-custom-primary hover:bg-gray-900">Cerrar sesión</a></li>
      {/if}
    </ul>
  </div>
  


    <p class="  text-custom-primary rounded-lg z-50" on:click={toggleSidebar}>{user}</p>

    <div
    class="absolute top-6 right-4 z-30 w-10 h-10 sm:hidden"
    on:click={toggleSidebar}
  >
    <img class="h-10 w-10" src="src/img/icons/burger-menu-svgrepo-com.svg" alt="">
  
</div>
  