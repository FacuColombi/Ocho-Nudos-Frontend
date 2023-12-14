<script>
  import Button from "../../lib/components/utils/Button.svelte";
  import Input from "../../lib/components/utils/Input.svelte";
  import adminController from "../../logic/adminController.js";
  import { onMount } from "svelte";

  let userDetails = {
    email: "",
    password: "",
  };

  onMount(async () => {
    //Check if user is logged in
    let isLoggedIn = await adminController.checkLogin();
    if (isLoggedIn) window.location.href = "/";
  });

  async function login() {
    adminController.login(userDetails);
  }
</script>

<section class="bg-black grid grid-cols-5 h-[100vh] items-center">
  <div class="py-8 px-6 w-full h-full col-span-4 sm:col-span-3 md:col-span-2 flex justify-center items-center h-full">
    <article class="py-8 px-6 w-full">
      <h3
        class="text-3xl font-extralight text-custom-primary text- my-10"
      >
        Iniciar sesión
      </h3>
      <Input
        bind:value={userDetails.email}
        label="Email"
        type="email"
        placeholder="test@gma..."
      />
      <Input
        bind:value={userDetails.password}
        label="Contraseña"
        type="password"
        placeholder="*******"
      />

      <Button
        click={() => {
          login();
        }}
        text="Iniciar sesión"
        style="text-black mt-10 mr-5"
      />
    </article>
  </div>
  <div class="bg-center bg-cover w-full h-full col-span-1 sm:col-span-2 md:col-span-3"
  style="background-image: url(src/img/localDeNoche.jpg);"></div>
</section>
