<script>
  import adminController from "../../../logic/adminController";
  import AdminReserva from "../sections/AdminReserva.svelte";
  import Button from "../utils/Button.svelte";



  export let user = "";

  let isOpen = false;

  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>

<div
  class="{isOpen
    ? 'translate-x-0'
    : 'translate-x-full'} fixed top-0 right-0 h-full w-[95%] bg-black text-white transition-transform duration-300 ease-in-out z-50 border-l-2 border-custom-primary flex flex-col items-center"
>
  <img
    class="block w-[25px] h-[25px] absolute top-8 left-10"
    on:click={toggleSidebar}
    src="src/img/icons/xmark.svg"
    alt=""
  />

  <h3
    class="text-3xl text-custom-primary font-extralight text-center mt-[4em] mb-8"
  >
    Listado de reservas
  </h3>
  <div class="w-[90%]">
    <section class="w-full flex flex-col gap-5">
        <AdminReserva fullName="Manuel Acosta" email="manuelA@gmail.com" qtyPeople="5" phone="099654321" date="12-12-2023" hour="21"  comments="Queremos una mesa afuera con vista al mar, necesitarmos mantas
        si es posible, muchas gracias."/>

        <AdminReserva fullName="Juan Martinez" email="juanM@gmail.com" qtyPeople="4" phone="099653222" date="12-12-2023" hour="21" comments="Queremos una mesa afuera con vista al mar"/>
        
        <AdminReserva fullName="Martina Fernandez" email="martinaF@gmail.com" qtyPeople="8" phone="096444321" date="12-18-2023" hour="20" />
      
    </section>
  </div>
</div>

<p class="  text-custom-primary rounded-lg z-50" on:click={toggleSidebar}>
  {user}
</p>


