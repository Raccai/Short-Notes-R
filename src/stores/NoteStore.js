import { writable } from "svelte/store";

const NoteStore = writable([
    {
        title: "Welcome to SimpleNotes!",
        note: "Here you can type notes to remind yourself of things, or simply write things for fun! To make your own note, click the 'Create Note' tab **your Notes are limited to 150 characters and your title is limited to 30**"
    },
]);

export default NoteStore;