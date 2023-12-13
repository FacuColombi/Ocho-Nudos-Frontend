<script>
  export let text = "default";
  export let type = "button";
  export let style = "";
  export let click = () => {return;};
  
</script>

<button on:click={click}
  class="border-[1px] py-3 px-5 rounded-none bg-transparent border-white text-white normal-case {style}"
  {type}>{text}</button
>

<style>
  
</style>
