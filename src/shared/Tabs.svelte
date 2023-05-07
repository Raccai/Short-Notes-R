<script>
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher();

    export let activeTab;
    export let tabs;
</script>

<div class="tabs">
    <ul>
        {#each tabs as tab}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => dispatcher("changeTab", tab)}>
                <div class:active = {tab === activeTab}>{tab}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 20px;
        font-size: 15px;
        color: #ffffff;
        cursor: pointer;
    }

    .active {
        /* border-bottom: 2px solid #da62c4; */
        border-bottom: 2px dashed #FFC72C;
        color: #FFC72C;
        padding-bottom: 5px;
    }
</style>