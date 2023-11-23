<script>
  import Button from "../lib/components/utils/Button.svelte";
  import Input from "../lib/components/utils/Input.svelte";
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
<div>
  <Input label="Comentarios" style="w-full" />
</div>

<Button text="Enviar" />
