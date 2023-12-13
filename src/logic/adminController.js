
import fetchController from './fetchController.js';


const adminController = (() => {
    
    async function login(userDetails) {
        try{
            if(!userDetails.email || !userDetails.password);

            const res = await fetchController.execute("http://localhost:3000/users/login", "POST", userDetails);
            if(!res) throw new Error("Error in login");

            const response = JSON.parse(res);
            if(!response?.data?.email) throw new Error("Error in data login");

            //Save user logged in to local storage
            localStorage.setItem("userLogged", JSON.stringify(response?.data));

            //Redirect to home
            window.location.href = "/";

            return {status: "OK", data: response?.data};

        }catch(error){
            return error;
        }
    }

    async function logout(){
        try{
            localStorage.removeItem("userLogged");
            window.location.href = "/";
        }catch(error){
            return error;
        }
    }

    async function checkLogin(){
        try{
            const userLogged = localStorage.getItem("userLogged");
            if(!userLogged) throw new Error("User not logged in");

            return {status: "OK", data: userLogged};
        }catch(error){
            return error;
        }
    }

    return {
        login,
        logout,
        checkLogin
    }
})();

export default adminController;