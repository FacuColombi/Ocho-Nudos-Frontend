const popupController = (() => {

    function showPopup(popupToShow) {
        switch(popupToShow) {
            case "hacerReserva":
                showBackgroundPopup();
                document.querySelector("#popupReserva")?.classList.remove("hidden");
                break;
        }
    }

    function closePopup(popupToClose) {
        switch(popupToClose) {
            case "hacerReserva":
                hideBackgroundPopup();
                document.querySelector("#popupReserva")?.classList.add("hidden");
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