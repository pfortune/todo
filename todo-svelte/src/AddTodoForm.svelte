<script>
    export let addTodo;
    let todoText = "";

    function handleAddTodo() {
        if (todoText.trim() !== "") {
            addTodo(todoText.trim());
            todoText = ""; 
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleAddTodo();
            event.preventDefault(); 
        }
    }
</script>

<div class="field is-horizontal">
    <div class="field-label is-normal">
        <label for="todo" class="label">What should I do?</label>
    </div>
    <div class="field-body">
        <div class="field">
        <p class="control">
            <input bind:value={todoText}  on:keydown={handleKeyDown} id="todo" class="input" type="text" placeholder="Type something...">
        </p>
        </div>
        <button  on:click={handleAddTodo} class="button is-info">Add Todo</button>
    </div>
</div>