<script>
  export let text = "default";
  export let type = "button";
  export let style = "";
</script>

<button
  class="btn rounded-none bg-transparent border-white text-white {style}"
  {type}>{text}</button
>

<style>
  button:hover {
    background-color: transparent;
    border-color: white;
  }
</style>
