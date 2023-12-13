<script>
  import fetchController from "../../../logic/fetchController";
  import popupController from "../../../logic/popupsController";
  import Button from "../utils/Button.svelte";
  import Input from "../utils/Input.svelte";
  import bookingController from "../../../logic/bookingController";
  import Message from "../utils/Message.svelte";
  

  let showError = false;
  let message = "";
  let bookingCreated = false;

  let bookingDetails = {
    type: "BOOKING",
    fullName: "",
    email: "",
    phone: "",
    qtyPeople: "",
    hour: "",
    date: "",
    comments: ""
  };

  async function sendBooking() {
    bookingCreated = false;

    if(!bookingDetails.fullName || !bookingDetails.email || !bookingDetails.phone || !bookingDetails.qtyPeople || !bookingDetails.hour || !bookingDetails.date) {
      showError = true;
      message = "Por favor, llena todos los campos";
      return;
    }

    const booking = await bookingController.createBooking(bookingDetails);
    if(!booking || booking.error) {
      showError = true;
      message = booking?.message || "Ha ocurrido un error";
      return;
    }

    showError = false;
    bookingCreated = true;
    message = booking?.message;

    bookingDetails = {
      type: "BOOKING",
      fullName: "",
      email: "",
      phone: "",
      qtyPeople: "",
      hour: "",
      date: "",
      comments: ""
    };

    setTimeout(() => {
      popupController.closePopup("hacerReserva");
    }, 2000);
  }

</script>


<form id="popupReserva"
  class="bg-black fixed md:min-w-[600px] lg:min-w-[800px] w-[700px] h-[740px] py-6 px-3 md:px-6 m-auto z-[9999999] top-[0px] bottom-[0px] right-[0px] left-[0px] hidden"
>



<h3 class="text-xl md:text-3xl font-extralight text-custom-primary text-center my-5 md:my-10">
    Has tu reserva
</h3>
<img on:click={() => {popupController.closePopup("hacerReserva")}} src="src/img/icons/xmark.svg" class="absolute cursor-pointer top-8 right-8 w-[30px] h-[30px]" alt="">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4"> 
    <Input
      bind:value={bookingDetails.fullName}
      label="Nombre completo"
      type="text"
      placeholder="tunombre..."
    />
    <Input
      bind:value={bookingDetails.email}
      label="Email"
      type="email"
      placeholder="tuemail@...."
    />
    <Input
      bind:value={bookingDetails.phone}
      label="Teléfono"
      type="text"
      placeholder="09900..."
    />
    <Input
      bind:value={bookingDetails.qtyPeople}
      label="Cantidad de personas"
      type="text"
      placeholder="Número de personas"
    />
    <Input
      bind:value={bookingDetails.date}
      label="Fecha de la reserva"
      type="text"
      placeholder="Número de personas"
    />
    <Input
      bind:value={bookingDetails.hour}
      label="Hora"
      type="text"
      placeholder="Hora de la reserva"
    />
    <div class="col-span-full">
        <label class="label-text text-base md:text-xl font-light text-white" for="">Comentarios</label>
        <textarea bind:value={bookingDetails.comments} placeholder="Deja tu compentario aqui" class="w-full px-4 bg-transparent text-xs md:text-base  text-white border-l-0 border-r-0 border-t-0 rounded-none border-b-2 border-b-custom-primary  sm:mb-5 resize-y max-h-[100px] mt-3"></textarea>
    </div>
  </div>
  {#if showError}
    <Message message={message}/>
  {/if}
  {#if bookingCreated}
    <Message className={"text-green-200"} message={message}/>
  {/if}


  <Button click={() => {sendBooking()}}
    text="Enviar"
    style="text-black mt-10 mr-5  text-sm md:text-base"
  />

  </form>