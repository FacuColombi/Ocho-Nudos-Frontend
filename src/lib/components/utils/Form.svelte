<script>
  import Button from "./Button.svelte";
  import Input from "./Input.svelte";
  import bookingController from "../../../logic/bookingController";
  import Message from "./Message.svelte";

  let message = "";
  let bookingCreated = false;

  let partyDetails = {
    type: "PARTY",
    fullName: "",
    email: "",
    phone: "",
    qtyPeople: "",
    location: "",
    date: "",
    comments: ""
  };

  async function sendBooking() {
    bookingCreated = false;

    if(!partyDetails.fullName || !partyDetails.email || !partyDetails.phone || !partyDetails.qtyPeople || !partyDetails.location || !partyDetails.date) {
      message = "Por favor, llena todos los campos";
      return;
    }

    const booking = await bookingController.createBooking(partyDetails);
    if(!booking || booking.error) {
      message = booking?.message || "Ha ocurrido un error";
      return;
    }

    bookingCreated = true;
    message = booking?.message;

    partyDetails = {
      type: "PARTY",
      fullName: "",
      email: "",
      phone: "",
      qtyPeople: "",
      location: "",
      date: "",
      comments: ""
    };
  }

</script>

<div class="flex gap-4">
  <Input bind:value={partyDetails.fullName} label="Nombre" style="" placeholder="Tu Nombre"/>
  <Input bind:value={partyDetails.phone} label="Celular" style="" placeholder="Tu celular"/>
</div>
<div class="flex gap-4">
  <Input bind:value={partyDetails.email} label="Email" type="email" style="" placeholder="tuemail@..."/>
  <Input bind:value={partyDetails.qtyPeople} label="N˚ invitados" type="number" style="" />
</div>
<div class="flex gap-4">
  <Input bind:value={partyDetails.location} label="Ubicación" style="" />
  <Input bind:value={partyDetails.date} label="Día del evento" type="text" style="" />
</div>
<div class="col-span-full">
  <label class="label-text text-base md:text-xl font-light text-white" for="">Comentarios</label>
  <textarea bind:value={partyDetails.comments} placeholder="Deja tu compentario aqui" class="w-full px-4 bg-transparent text-xs md:text-base  text-white border-l-0 border-r-0 border-t-0 rounded-none border-b-2 border-b-custom-primary  sm:mb-5 resize-y max-h-[100px] mt-3"></textarea>
</div>


<Button click={() => {sendBooking()}} text="Enviar" />

<Message {message}/>
