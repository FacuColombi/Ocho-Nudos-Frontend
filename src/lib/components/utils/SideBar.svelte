<script>
    import adminController from "../../../logic/adminController";
    import popupController from "../../../logic/popupsController";

    export let user = "";

    let isOpen = false;
  
    function toggleSidebar() {
      isOpen = !isOpen;
    }
  </script>
  
  <div class="{isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-[500px] bg-black text-white transition-transform duration-300 ease-in-out z-50">
    <div class="flex w-full justify-between items-center pr-12">
      <h3 class="pt-8 px-8 text-2xl font-extralight mb-10">
        Hola, <span class="text-custom-primary">{user}</span>
      </h3>

      <img class="block w-[25px] h-[25px]" on:click={toggleSidebar} src="src/img/icons/xmark.svg" alt="">
    </div>
    <ul class="py-6 z- text-xl font-extralight flex flex-col">
      <li><a href="#" class="block px-8 py-8 border-t-[1px] border-b-[1px] hover:bg-gray-900">Listado de reservas</a></li>
      <li><a href="#" class="block px-8 py-8 border-b-[1px] hover:bg-gray-900">Fiestas a organizar</a></li>
      <li><a on:click={() => {popupController.showPopup("mostrarEventos")}} href="#" class="block px-8 py-8 border-b-[1px] hover:bg-gray-900">Eventos</a></li>
      <li><a on:click={() => {popupController.showPopup("crearEventoDesktop")}} href="#" class="block px-8 py-8 border-b-[1px] hover:bg-gray-900">Agregar Evento</a></li>
      <li><a on:click={() => {popupController.showPopup("modificarVinos")}} href="#" class="block px-8 py-8 border-b-[1px] hover:bg-gray-900">Carta de vinos</a></li>
      <li><a on:click={() => popupController.showPopup("modificarCartas")} href="#" class="block px-8 py-8 border-b-[1px] hover:bg-gray-900">Modificar carta</a></li>
      <li><a on:click={() => adminController.logout()} href="#" class="block px-8 py-8 border-b-[1px] text-custom-primary hover:bg-gray-900">Cerrar sesión</a></li>
    </ul>
  </div>
  


    <p class="  text-custom-primary rounded-lg z-50" on:click={toggleSidebar}>{user}</p>