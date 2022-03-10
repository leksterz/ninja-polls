<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";

	//tabs
	let items = ["Current Polls", "Add New Polls"];
	let activeItem = "Current Polls";
	const tabChange = (e) => {
		activeItem = e.detail;
	};

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = "Current Polls";
	};

	const handleVote = (e) => {
		const { id, option } = e.detail;
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
		if (option === "a") {
			upvotedPoll.votesA++;
		}
		if (option === "b") {
			upvotedPoll.votesB++;
		}

		polls = copiedPolls;
	};
</script>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<PollList on:vote={handleVote} />
	{:else if activeItem === 'Add New Polls'}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>

<Footer />
