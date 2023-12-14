<script>
  import Button from "../utils/Button.svelte";
  import eventController from "../../../logic/eventController";

    export let artistImg = "";
    export let artistName = "";
    export let artistDay= "";
    export let artistHour = "";
    export let artistDescription = "";
    export let eventId = "";

    async function deleteEvent(id) {
      debugger;
      const response = await eventController.deleteEvent(id);
      if(!response || response?.error) {
        alert("Error al borrar el evento");
        return;
      } 
    }

</script>

<article class="grid grid-cols-1 sm:grid-cols-5 h-[500px] sm:max-h-[200px] gap-3 mt-4">
    <div class="w-full flex  justify-center aspect-square max-h-[200px]">
      <figure
        class="bg-center bg-cover aspect-square max-h-[200px]"
        style="background-image: url({artistImg});"
      ></figure>
    
    </div>
    <div class="col-span-3 fle flex-col sm:flex-row justify-center sm:items-center">
      <div class="flex flex-col sm:flex-row gap-2 md:gap-20">
        <h4 class="text-xl font-bold">{artistName}</h4>
        <p>
          <span class="text-custom-primary mr-2">Dia:</span>
          {artistDay}
        </p>
        <p>
          <span class="text-custom-primary mr-2">Hora:</span>
          {artistHour}
        </p>
      </div>
      <p>
        {artistDescription}
      </p>
    </div>
    <div
      class=" flex sm:flex-col gap-4 sm:justify-center sm:items-center max-h-[200px]"
    >
      <Button click={() => deleteEvent(eventId)}
        text="Borrar"
      
      />
    </div>
  </article>