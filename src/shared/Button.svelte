<script>
    export let type = "delete"
</script>

<button class={type} on:click>
    <slot></slot>
</button>

<style>
    button{
        border-radius: 5px;
        font-weight: bold;
        padding: 5px 10px;
        border: none;
    }

    .create {
        color: #36393e;
        background: #FFC72C;
    }

    .create:is(:hover, :focus) {
        outline: 2px solid #FFC72C;
        color: white;
        background-color: #36393e;
    }

    .create:active {
        outline: none;
        background-color: #FFC72C;
        color: #36393e;
    }

    .delete {
        color: white;
        background: #e42b46;
    }

    .delete:is(:hover, :focus) {
        outline: 2px solid #e42b46;
        color: white;
        background-color: #36393e;
    }

    .delete:active {
        outline: none;
        background-color: #e42b46;
        color: white;
    }
</style>