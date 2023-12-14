<script>
  import Button from "../utils/Button.svelte";
  import menusController from "../../../logic/menusController";
  import Message from "../utils/Message.svelte";
    export let title = "";
    export let srcMenu = "";
    export let subTitle = "";
    export let subText = "";
    export let typeMenu = "MENU";

    let files = null;
    let message = "";

    async function uploadFile() {
      debugger;
        const response = await menusController.uploadMenu(files, typeMenu);
        if(!response || response?.error){
            message = response?.message || "Error al subir el archivo";
            return;
        }

        message = "Archivo subido correctamente";

        setTimeout(() => {
            message = "";
        }, 3000);
    }

</script>

<section class="w-full grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-4">
    <div class="flex flex-col items-center justify-center">
        <h3 class="text-lg md:text-2xl  font-extralight text-center pt-[1em] md:pt-[2.8em] border-b-[1px] border-custom-primary inline-block px-4">
            {title}
        </h3>
        <div class="w-full relative my-[.8em] md:my-[1.6em] flex flex-col items-center">
            <div
              class="h-[1.6em] sm:h-[1.9em] top-[-5px] w-full bg-black md:h-11 md:h-11 absolute"
            ></div>
            <embed class="w-[200px] md:w-[340px] h-[300px] md:h-[500px]" src="{srcMenu}" type="" />
          </div>
    </div>

    <article class="flex flex-col gap-4 w-[92%] md:w-[80%] lg:w-[60%]">
        <h3 class="text-2xl  font-extralight text-center pt-[1em] md:pt-[2.8em] border-b-[1px] border-custom-primary inline-flex  mb- md:mb-10 ">
        {subTitle}
        </h3>
        <div class="flex flex-col gap-3 md:gap-10" >
            <p>
                {subText}
            </p>
        <input bind:files={files} type="file" class="file-input file-input-ghost border-custom-primary border-[1px]  w-full max-w-xs block" />
        <Button click={() => {uploadFile()}} text="Modificar" style="max-w-[140px]" />
        </div>
        <Message {message}/>
    </article>
  </section>