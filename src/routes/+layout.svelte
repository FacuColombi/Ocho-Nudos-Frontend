<script>
    import "../app.css";
  import SideBar from "../lib/components/utils/SideBar.svelte";
  </script>
  <SideBar/>
  <!-- Background for popups -->
  <div class="backgroundPopup w-full h-[1000vh] absolute z-[100] bg-gray-300 opacity-[.5] hidden">
  </div>
  <slot />
