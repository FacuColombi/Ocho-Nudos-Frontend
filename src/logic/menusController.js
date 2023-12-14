
import fetchController from './fetchController.js';


const menusController = (() => {
    
    async function uploadMenu(files, type){
        debugger;
        let formData = new FormData();
        formData.append("menu_pdf", files[0], files[0].name);
        formData.append("type_pdf", type);

        const response = await fetchController.execute("https://ocho-nudos-backend.onrender.com/upload/pdf", "POST", formData, true);
        return response;
    }



    return {
        uploadMenu
    }
})();

export default menusController;