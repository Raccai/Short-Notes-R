<script>
    import { NoteStore } from "../stores/NoteStore";
    import Button from "../shared/Button.svelte";
    // import { generateID } from "../shared/randomIdGem";
    import { createEventDispatcher } from "svelte";

    let dispatcher = createEventDispatcher();
    let type = "create";
    let valid = false;
    let noteFields = {
        title: "",
        note: "",
    };
    let fieldErrors = {
        title: "",
        note: "",
    };

    const submitHandler = () => {
        valid = true;

        //validate title
        if (noteFields.title.trim().length < 5){
            fieldErrors.title = "Title must be at least 5 characters long";
            valid = false;
        } else {
            fieldErrors.title = "";
        }

        //validate note
        if (noteFields.note.trim().length < 5){
            fieldErrors.note = "Note must be at least 5 characters long";
            valid = false;
        } else {
            fieldErrors.note = ""
        }

        if (valid){
            let note = {...noteFields, id: Math.random()};
            NoteStore.update(currentNotes => {
                return [note, ...currentNotes];
            })
            dispatcher("addNote");
        }
    };
</script>

<form on:submit|preventDefault = {submitHandler}>
    <div class="form-field">
        <label for="title">Title:</label>
        <input type="text" class="input-title" maxlength="30" bind:value={noteFields.title}>
        <div class="error">{fieldErrors.title}</div>
    </div>
    <div class="form-field">
        <label for="title">Note:</label>
        <textarea class="input-note" cols="30" rows="7" maxlength="150" bind:value={noteFields.note}></textarea>
        <div class="error">{fieldErrors.note}</div>
    </div>
    <Button {type}>Create</Button>
</form>

<style>
    form {
        width: 500px;
        margin: auto;
        text-align: center;
    }

    .form-field {
        margin: 13px auto;
    }

    input,
    textarea {
        width: 100%;
        border-radius: 5px;
    }

    textarea {
        resize: none;
    }

    label {
        color: #ffffff;
        margin: 0 0 10px 0;
        text-align: left;
    }

    .error {
        color: #e42b46;
        font-weight: bold;
    }
</style>