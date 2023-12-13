
import fetchController from './fetchController.js';


const bookingController = (() => {
    
    const BASE_URL = 'http://localhost:3000/bookings';

    async function getBookings() {
        try {
            const response = await fetchController.execute(BASE_URL);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async function createBooking(booking) {
        try {

            const response = await fetchController.execute(BASE_URL, 'POST', booking);
            if(!response) throw new Error('Error al crear la reserva');

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async function changeStatus(booking) {
        try {
            const response = await fetchController.execute(BASE_URL, 'PUT', booking);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getBookings,
        createBooking,
        changeStatus
    }
})();

export default bookingController;