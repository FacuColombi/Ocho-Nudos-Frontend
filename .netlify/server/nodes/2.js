

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d30e9572.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c26a6efa.js"];
export const stylesheets = ["_app/immutable/assets/2.746e084c.css"];
export const fonts = [];
