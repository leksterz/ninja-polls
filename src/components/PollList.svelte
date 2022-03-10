<script>
    import PollStore from "../stores/PollStore";
    import Poll from "./PollDetails.svelte";
    export let polls = [];

    PollStore.subscribe((data) => {
        polls = data;
    });
</script>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>

<div class="poll-list">
    {#each polls as poll (poll.id)}
        <div>
            <Poll {poll} on:vote />
        </div>
    {/each}
</div>
