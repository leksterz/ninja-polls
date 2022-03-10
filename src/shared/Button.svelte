<script>
    // use exports for props
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 5px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 50, 0.2);
    }
    .primary {
        background: #d91b42;
        color: white;
    }
    .secondary {
        background: rgb(41, 157, 8);
        color: whitesmoke;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        color: #d91b42;
        background: whitesmoke;
        border: 2px solid #d91b42;
    }
    .secondary.inverse {
        color: rgb(41, 157, 8);
        background: whitesmoke;
        border: 2px solid rgb(41, 157, 8);
    }
</style>

<button class={type} class:flat class:inverse on:click>
    <slot />
</button>
