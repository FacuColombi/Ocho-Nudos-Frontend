<script>
  export let label = "Label";
  export let type = "text";
  export let placeholder = "";
  export let style = "";
  export let value = "";

  const handleInput = event => {
		value = event.target.value;
	};
</script>

<div class="form-control w-full ">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label py-0 md:py-2">
    <span class="label-text text-base md:text-xl font-light text-white">{label}</span>
  </label>
  <input
    value={value}
    {type}
    {placeholder}
    on:input={handleInput}
    class="input w-full bg-transparent text-xs md:text-base border-l-0 border-r-0 border-t-0 rounded-none border-b-2 border-b-custom-primary mb-1 h-8 md:h-12 sm:mb-5 {style}"
  />
</div>

<style>
  input:focus {
    outline: none;
  }
</style>
