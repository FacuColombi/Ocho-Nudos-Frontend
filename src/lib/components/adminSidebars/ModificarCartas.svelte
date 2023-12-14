<script>
    import adminController from "../../../logic/adminController";
    import AdminMenus from "../sections/AdminMenus.svelte";
    import Button from "../utils/Button.svelte";
    import popupController from "../../../logic/popupsController";

    const base_url = "https://ocho-nudos-backend.onrender.com/";
  </script>
  
  <div id="modificarCartas"
    class="
    translate-x-full fixed top-0 right-0 h-full w-[95%] bg-black text-white transition-transform duration-300 ease-in-out z-50 border-l-2 border-custom-primary z-[9999] flex flex-col items-center"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      class="block w-[25px] h-[25px] absolute top-8 left-10"
      on:click={() => popupController.closePopup("modificarCartas")}
      src="src/img/icons/xmark.svg"
      alt=""
    />
  
    <h3
      class="text-3xl text-custom-primary font-extralight text-center mt-[2em] md:mt-[4em] mb-4 md:mb-8"
    >
      Modificar cartas
    </h3>
    <div class="w-[90%]">
      <AdminMenus
      title="Menú actual"
      srcMenu={`${base_url}public/pdf/Menu/pdfMenu.pdf`}
      subTitle="Cambie el menú"
      subText="Para cambiar el menú lo que debe hacer es colocar el pdf de la nueva carta en  input que se encuentra aquí abajo. Una vez puesto el archivo hacer click en modificar."
    />
  
    </div>
  </div>
