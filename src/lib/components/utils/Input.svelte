<script>
  export let label = "Label";
  export let type = "text";
  export let placeholder = "";
  export let style = "";
</script>

<div class="form-control w-full ">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label">
    <span class="label-text text-xl font-light text-white">{label}</span>
  </label>
  <input
    {type}
    {placeholder}
    class="input w-full border-l-0 border-r-0 border-t-0 rounded-none border-b-2 border-b-custom-primary mb-5 {style}"
  />
</div>

<style>
  input:focus {
    outline: none;
  }
</style>
