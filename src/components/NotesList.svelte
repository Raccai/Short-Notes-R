<script>
    import { scale, fade } from "svelte/transition";
    import { flip } from "svelte/animate";
    import NoteStore from "../stores/NoteStore";
    import NoteDetail from "./NoteDetail.svelte";
</script>

<div class="notes-list">
    {#each $NoteStore as note (note.id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <NoteDetail {note}/>
        </div>
    {/each}
</div>

<style>
    .notes-list {
        color: white;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 380px;
        justify-content: center;
        margin: 0 auto;
        gap: 1rem;
    }
</style>