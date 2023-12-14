<script>
  import adminController from "../../../logic/adminController";
  import AdminEvent from "../sections/AdminEvent.svelte";
  import Button from "../utils/Button.svelte";
  import Input from "../utils/Input.svelte";
  import popupController from "../../../logic/popupsController";
  import eventController from "../../../logic/eventController";
  import { onMount } from "svelte";
  import { eventsStore } from "../../../logic/Stores/eventsStore";

  let isOpen = true;

  const base_url = "http://localhost:3000/";

  onMount(async () => {
      const response = await eventController.getEvents();
      if(!response || response.error){
        popupController.closePopup("mostrarEventos");
        return;
      }

      eventsStore.set(response.data);
  });

  function toggleSidebar() {
    isOpen = !isOpen;
  }

</script>

  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div id="eventosList"
    class="translate-x-full fixed top-0 right-0 h-full w-[95%] bg-black text-white transition-transform duration-300 ease-in-out z-[99999] border-l-2 border-custom-primary flex flex-col items-center"
  >

  <img
    class="block w-[25px] h-[25px] absolute top-8 left-10"
    on:click={() => {popupController.closePopup("mostrarEventos")}}
    src="src/img/icons/xmark.svg"
    alt=""
  />

  <h3
    class="text-3xl text-custom-primary font-extralight text-center mt-[4em] mb-8"
  >
    Eventos
  </h3>
  
    {#if $eventsStore.length < 1}
      <p class="text-2xl text-center mt-8">No hay eventos</p>
    {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
    class="block w-[25px] h-[25px] absolute top-8 left-10"
    on:click={() => {popupController.closePopup("mostrarEventos")}}
    src="src/img/icons/xmark.svg"
    alt=""
  />

  
  <div class="w-[90%]">
    <section class="w-full flex flex-col gap-5  overflow-scroll">

      {#each $eventsStore as event}
        <AdminEvent 
        artistImg={base_url + event.imgName}
        artistName={event.artistName}
        artistDay={event.date}
        artistHour={event.hour}
        artistDescription={event.description}
        eventId = {event._id}
        />
        
      {/each}
    </section>
  </div>
    {/if}

  </div>

