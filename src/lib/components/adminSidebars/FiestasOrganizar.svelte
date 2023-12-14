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
      Fiestas a organizar
    </h3>
    <div class="w-[90%]">
      <section class="w-full flex flex-col gap-5">
          <AdminReserva fullName="Pedro Alfonzo" email="pepeA@gmail.com" qtyPeople="50" phone="099654321" date="01-01-2024" location="Montevideo"  comments="Queremos celebrar el cumpleaños de 15 de nuestra hija, el evento será bastante pequeño."/>
  
          <AdminReserva fullName="Juan Salazar" email="panchoSal@gmail.com" qtyPeople="140" phone="099653222" date="13-02-2024" location="Montevideo" comments="Queriamos festajar con mi esposa nuestro aniversario de 40 años, junto a familia y amigos."/>
          
          <AdminReserva fullName="Susana Perez" email="susyperez@gmail.com" qtyPeople="30" phone="096444321" date="02-03-2024" location="Canelones" comments="Queria hacerle el cumpleaños sorpresa a mi hermana, constara en una fiestae pequeña y comida mas de copetin." />
        
      </section>
    </div>
  </div>
  
  <p class="  text-custom-primary rounded-lg z-50" on:click={toggleSidebar}>
    {user}
  </p>
  
