<script>
  export let text = "default";
  export let type = "button";
  export let style = "";
</script>

<button
  class="border-[1px] py-3 px-5 rounded-none bg-transparent border-white text-white normal-case {style}"
  {type}>{text}</button
>

<style>
  button:hover {
    background-color: transparent;
    border-color: white;
  }
</style>
