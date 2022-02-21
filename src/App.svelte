<script>
	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import Tabs from "./shared/Tabs.svelte"
	import CreatePollForm from "./components/CreatePollForm.svelte"

	//tabs
	let items = ['Current Polls', 'Add New Polls'];
	let activeItem = 'Current Polls';
	const tabChange = (e) => {
		activeItem = e.detail;
	}
</script>

<Header/>
<main>
<Tabs {items} {activeItem} on:tabChange={tabChange}/>	
{#if activeItem === 'Current Polls'}
	<p>current polls comp</p>
{:else if activeItem === 'Add New Polls'}
	<CreatePollForm />
{/if}
</main>

<Footer />
<style>
main {
	max-width: 960px;
	margin: 40px auto;
}
</style>