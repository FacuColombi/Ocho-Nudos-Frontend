<script>
    import "../app.css";
  import SideBar from "../lib/components/utils/SideBar.svelte";
  import MobileSidebar from "../lib/components/utils/MobileSideBar.svelte";
  import ModificarCartas from "../lib/components/adminSidebars/ModificarCartas.svelte";
  import ModificarVinos from "../lib/components/adminSidebars/ModificarVinos.svelte";

  </script>
  <SideBar/>
  <MobileSidebar/>
  <ModificarCartas />
  <ModificarVinos/>
  <!-- Background for popups -->
  <div class="backgroundPopup w-full h-[1000vh] absolute z-[100] bg-gray-300 opacity-[.5] hidden">
  </div>
  <slot />
