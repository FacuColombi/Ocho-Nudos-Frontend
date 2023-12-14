<script>
  import adminController from "../../../logic/adminController";
  import Button from "../utils/Button.svelte";
  import Input from "../utils/Input.svelte";
  import AdminEvent from "../sections/AdminEvent.svelte";
  import eventController from "../../../logic/eventController";
  import Message from "../utils/Message.svelte"
  import popupController from "../../../logic/popupsController";

  export let user = "";
  let message = "";

  let eventDetails = {
    name: "",
    date: "",
    hour: "",
    desc: "",
    event_img: ""
  };
  

  let isOpen = false;

  function toggleSidebar() {
    isOpen = !isOpen;
  }

  async function createEvent(){

    message = "";

    if(eventDetails.name === "" || eventDetails.date === "" || eventDetails.hour === "" || eventDetails.desc === "" || !eventDetails.event_img){
      message = "Rellena todos los campos";
      return;
    }

    const response = await eventController.addEvent(eventDetails);
    if(!response || response.error){
      message = response?.message || "Error al crear el evento";
      return;
    }

    message = "Evento creado correctamente";
    eventDetails = {
      name: "",
      date: "",
      hour: "",
      desc: "",
      event_img: ""
    };
  }
</script>

<div id="createEventDesktop"
  class=" 
     translate-x-full fixed top-0 right-0 z-[9999] h-full w-[95%] bg-black text-white transition-transform duration-300 ease-in-out  border-l-2 border-custom-primary flex flex-col items-center"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    class="block w-[25px] h-[25px] absolute top-8 left-10"
    on:click={() => {popupController.closePopup("crearEventoDesktop");}}
    src="src/img/icons/xmark.svg"
    alt=""
  />

  <h3
    class="text-3xl text-custom-primary font-extralight text-center mt-[4em] mb-8"
  >
    Eventos
  </h3>
  <div class="w-[90%]">
    <section class="w-full flex flex-col gap-2 mt-4">
      <Input bind:value={eventDetails.name} label="Nombre artista" type="text" placeholder="TuNommbre..." />
      <div class="grid grid-cols-5 w-full gap-x-4">
        <Input bind:value={eventDetails.date}
          label="Día"
          type="text"
          placeholder="dd-mm-aaaa"
          divStyle="col-span-3"
        />
        <Input bind:value={eventDetails.hour}
          label="Hora"
          type="text"
          placeholder="hh:mm"
          divStyle="col-span-2"
        />
      </div>
      <div class="col-span-full">
        <label
          class="label-text text-base md:text-xl font-light text-white"
          for="">Descripción</label
        >
        <textarea bind:value={eventDetails.desc}
          placeholder="Deja tu compentario aqui"
          class="w-full px-4 bg-transparent text-xs md:text-base text-white border-l-0 border-r-0 border-t-0 rounded-none border-b-2 border-b-custom-primary sm:mb-5 resize-y max-h-[100px] mt-3"
        ></textarea>
      </div>
      <input bind:files={eventDetails.event_img}
        type="file"
        class="file-input file-input-ghost border-custom-primary border-[1px] w-full max-w-xs"
      />

      <Button click={() => createEvent()} text="Añadir" style="max-w-[120px] mt-4 md:mt-10" />

      <Message message={message}/>

    </section>
  </div>
</div>

<p class="  text-custom-primary absolute rounded-lg z-50" on:click={toggleSidebar}>
  {user}
</p>
