// @ts-nocheck
// @ts-nocheck
import { writable } from 'svelte/store';
import { browser } from "$app/environment";

// Create writable store for cart items
export const eventsStore = writable((browser && sessionStorage.getItem("events") && sessionStorage.getItem("events") != "undefined") ? JSON.parse(sessionStorage.getItem("events")) : []);

// Create writable for store cart in session storage
if (browser){
    eventsStore.subscribe(events => {
        sessionStorage.setItem("events", JSON.stringify(events));
    });
}