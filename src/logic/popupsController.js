const popupController = (() => {

    function showPopup(popupToShow) {
        switch(popupToShow) {
            case "hacerReserva":
                showBackgroundPopup();
                document.querySelector("#popupReserva")?.classList.remove("hidden");
                break;

            case "crearEventoDesktop":
                showBackgroundPopup();
                document.querySelector("#createEventDesktop")?.classList.remove("translate-x-full");
                document.querySelector("#createEventDesktop")?.classList.add("translate-x-0");
                break;
            
            case "mostrarEventos":
                showBackgroundPopup();
                document.querySelector("#eventosList")?.classList.remove("translate-x-full");
                document.querySelector("#eventosList")?.classList.add("translate-x-0");
                break;
            case "modificarCartas":
                showBackgroundPopup();
                document.querySelector("#modificarCartas")?.classList.remove("translate-x-full");
                document.querySelector("#modificarCartas")?.classList.add("translate-x-0");
                break;

            case "modificarVinos":
                showBackgroundPopup();
                document.querySelector("#modificarVinos")?.classList.remove("translate-x-full");
                document.querySelector("#modificarVinos")?.classList.add("translate-x-0");
                break;
        }
    }

    function closePopup(popupToClose) {
        switch(popupToClose) {
            case "hacerReserva":
                hideBackgroundPopup();
                document.querySelector("#popupReserva")?.classList.add("hidden");
                break;
            
            case "crearEventoDesktop":
                hideBackgroundPopup();
                document.querySelector("#createEventDesktop")?.classList.remove("translate-x-0");
                document.querySelector("#createEventDesktop")?.classList.add("translate-x-full");
                break;
            case "mostrarEventos":
                hideBackgroundPopup();
                document.querySelector("#eventosList")?.classList.remove("translate-x-0");
                document.querySelector("#eventosList")?.classList.add("translate-x-full");
                break;
            case "modificarCartas":
                hideBackgroundPopup();
                document.querySelector("#modificarCartas")?.classList.remove("translate-x-0");
                document.querySelector("#modificarCartas")?.classList.add("translate-x-full");
                break;
            case "modificarVinos":
                hideBackgroundPopup();
                document.querySelector("#modificarVinos")?.classList.remove("translate-x-0");
                document.querySelector("#modificarVinos")?.classList.add("translate-x-full");
                break;
        }
    }

    function showBackgroundPopup() {
        document.querySelector(".backgroundPopup")?.classList.remove("hidden");

        // Hide scrollbar
        document.body.style.overflow = 'hidden';
    }

    function hideBackgroundPopup() {
        document.querySelector(".backgroundPopup")?.classList.add("hidden");

        // show scrollbar
        document.body.style.overflow = 'auto';
    }

    return {
        showPopup,
        closePopup
    }
})();

export default popupController;