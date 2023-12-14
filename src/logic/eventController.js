
import fetchController from './fetchController.js';
import { eventsStore } from './Stores/eventsStore.js';
import { get } from 'svelte/store';

const eventController = (() => {

    async function getEvents() {
        const response = await fetchController.execute('https://ocho-nudos-backend.onrender.com/events');
        return response;
    }

    async function addEvent(eventDetails) {
        var formdata = new FormData();
        formdata.append("event_img", eventDetails?.event_img[0], eventDetails?.event_img[0]?.name);
        formdata.append("desc", eventDetails?.desc);
        formdata.append("date", eventDetails?.date);
        formdata.append("hour", eventDetails?.hour);
        formdata.append("name", eventDetails?.name);

        const response = await fetchController.execute('https://ocho-nudos-backend.onrender.com/events', "POST", formdata, true);

        if (response && !response.error) {
            // Update the store
            const newEvents = await getEvents();
            eventsStore.set(newEvents?.data || []);
        }

        return response;
    }


    async function updateEvent(event) {
        const response = await fetchController.execute('https://ocho-nudos-backend.onrender.com/events', "PUT", event);
        return response;
    }

    async function deleteEvent(idToDelete) {
        
        const response = await fetchController.execute('https://ocho-nudos-backend.onrender.com/events', "DELETE", {id:idToDelete});
        if (response && !response.error) {
            debugger;
            // Update the store
            const events = get(eventsStore);
            const updatedEvents = events.filter(event => event._id != idToDelete);
            eventsStore.set(updatedEvents);
        }

        return response;
    }

    return {
        getEvents,
        addEvent,
        updateEvent,
        deleteEvent
    }
})();

export default eventController;