<script>
    import Card from "../shared/Card.svelte";
    import Button from "../shared/Button.svelte";
    import NoteStore from "../stores/NoteStore";

    export let note;
    let showModal = false;
    let valid = false;
    let noteFields = {
        title: "",
        note: "",
    };
    let fieldErrors = {
        title: "",
        note: "",
    };

    const deleteNote = (id) => {
        NoteStore.update(currentNotes => {
            return currentNotes.filter(note => note.id != id);
        });
    };

    const toggleModal = () => {
		showModal = !showModal;
	};

    const editNote = (id) => {
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
            NoteStore.update(currentNotes => {
                let noteToEdit = currentNotes.find(note => note.id === id);
                noteToEdit.title = noteFields.title;
                noteToEdit.note = noteFields.note;
                toggleModal();
                return [...currentNotes];
            });
        }
    };
</script>

{#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="bg">
        <div class="modal">
            <form on:submit|preventDefault = {editNote(note.id)}>
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
                <Button type="delete" on:click = {toggleModal}>Cancel</Button>
                <Button type="create">Save</Button>
            </form>
        </div>
    </div>
{/if}

<Card>
    <div class="note-container">
        <h2>{ note.title }</h2>
        <div class="note-body">
            <p>{ note.note }</p>
        </div>
        <div class="button">
            <Button type="delete" on:click = {() => deleteNote(note.id)}>Delete</Button>
            <Button type="create" on:click = {() => toggleModal()}>Edit</Button>
        </div>
    </div>
</Card>

<style>
    .note-container {
        height: 330px;
        display: flex;
        flex-flow: column;
        word-break: break-word;
        justify-content: space-between;
        padding: 0.5rem;
    }

    h2 {
        margin: 0 auto;
        color: white;
    }

    .note-body {
        color: white;
        margin: 10px 0 30px 0;
        font-size: 14px;
        line-height: 1.5rem;
        vertical-align: top;
    }

    .button {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }


    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        border-radius: 10px;
        width: 350px;
        text-align: center;
        margin: 100px auto;
        background: #36393e;
        font-size: 20px;
    }

    form {
        width: auto;
        margin: auto;
        text-align: left;
    }

    .form-field {
        margin: 13px auto;
    }

    input,
    textarea {
        width: auto;
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
        font-size: 15px;
    }
</style>