<script>
  import heroImg from "../../../img/logo.png";
  import hamburgImg from "../../../img/icons/burger-menu-svgrepo-com.svg";
  import SideBar from "./SideBar.svelte";
  import adminController from "../../../logic/adminController";
  import { onMount } from "svelte";

  let isLogged = false;

  onMount(async () => {
    const response = await adminController.checkLogin();
    if(response?.status == "OK") isLogged = true;
  });
</script>

  <div class="flex justify-between items-center w-full max-w-[1100px] py-6 bg-nav">
    <figure>
      <img class="w-full h-auto max-w-[100px]" src={heroImg} alt="Logo de la marca" />
    </figure>

    <ul class="hidden sm:flex gap-0 text-white font-light md:gap-3">
      <li><a class="active" href="../">Home</a></li>
      <li><a href="/menu">Menú</a></li>
      <li><a href=" ">Vinos</a></li>
      <li><a href=" ">Eventos</a></li>
      <li><a href=" ">Contacto</a></li>
    </ul>
  </div>
  {#if isLogged}
    <span  class="hidden cursor-pointer sm:block pr-8 text-custom-primary pl-4 font-light">
      <SideBar user="Administrador" />
    </span>
  {/if}
  <div class=" black sm:hidden py-6 pr-8">
    <img class="max-h-[60px]" src={hamburgImg} alt="">
  </div>


<style>

  ul li {
    padding: 0 .6rem;
    text-align: center;
  }

  ul a {
    transition: 0.4s;
  }

  ul a:hover {
    font-weight: 600;
  }

  .active {
    font-weight: 600;
  }

  a:after {
    display: block;
    content: "";
    border-bottom: solid 3px #b6814f;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  .active::after {
    display: block;
    content: "";
    border-bottom: solid 3px #b6814f;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform: scaleX(1);
  }

  a:hover:after {
    transform: scaleX(1);
  }
</style>
