<script>
  import Button from "./Button.svelte";
  import Input from "./Input.svelte";
</script>

<div class="flex gap-4">
  <Input label="Nombre" style="" />
  <Input label="Celular" style="" />
</div>
<div class="flex gap-4">
  <Input label="Email" type="email" style="" />
  <Input label="N˚ invitados" type="number" style="" />
</div>
<div class="flex gap-4">
  <Input label="Ubicación" style="" />
  <Input label="Día del evento" type="date" style="" />
</div>
<div class="col-span-full">
  <label class="label-text text-base md:text-xl font-light text-white" for="">Comentarios</label>
  <textarea placeholder="Deja tu compentario aqui" class="w-full px-4 bg-transparent text-xs md:text-base  text-white border-l-0 border-r-0 border-t-0 rounded-none border-b-2 border-b-custom-primary  sm:mb-5 resize-y max-h-[100px] mt-3"></textarea>
</div>


<Button text="Enviar" />
