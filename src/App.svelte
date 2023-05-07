<script>
  	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
  	import CreateNoteForm from "./components/CreateNoteForm.svelte";
	import NotesList from "./components/NotesList.svelte";

	let tabs = ["Your Notes", "Create Note"];
	let activeTab = "Your Notes";
	let allNotes = [];

	const changeTab = (e) => {
		activeTab = e.detail;
	};

	const addNote = (e) => {
		const note = e.detail;
		allNotes = [note, ...allNotes];
		activeTab = "Your Notes";
	};
</script>

<Header />
<main>
	<Tabs {tabs} {activeTab} on:changeTab = {changeTab}></Tabs>
	{#if activeTab === "Your Notes"}
		<NotesList/>
	{:else}
		<CreateNoteForm on:addNote = {addNote}/>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 500px;
		margin: 0 auto;
	}
</style>