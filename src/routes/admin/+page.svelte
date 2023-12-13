<script>
  import Button from "../../lib/components/utils/Button.svelte";
  import Input from "../../lib/components/utils/Input.svelte";
  import adminController from "../../logic/adminController.js";
  import { onMount } from 'svelte';

  let userDetails = {
    email: '',
    password: ''
  };

  onMount(async () => {
    //Check if user is logged in
    let user = await adminController.checkLogin();
    if(user && user.status == "OK") window.location.href = "/";
  });

  async function login(){
    adminController.login(userDetails);
  }

  
</script>

<section class="bg-black absolute right-[30%] top-[100px] z-50 w-[600px] h-[600px] py-10 px-10">
    <h3 class="text-3xl font-extralight text-custom-primary text-center my-10">Iniciar sesión</h3>
    <Input bind:value={userDetails.email} label="Email"  type="email" placeholder="test@gma..."/>
    <Input bind:value={userDetails.password} label="Contraseña"  type="password" placeholder="*******"/>

    <Button click={() => {login();}} text="Iniciar sesión" style="text-black mt-10 mr-5"/>

  </section>