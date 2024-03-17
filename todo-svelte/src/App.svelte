<div class="container">
  <div class="box has-text-centered">
    <div class="title"> Simple Todo List</div>
    <div class="subtitle">Fun things to do</div>
  </div>
</div>

<div class="section box">
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label for="todo" class="label">What should I do?</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input bind:value={todoText} id="todo" class="input" type="text" on:keydown={handleKeyDown} placeholder="Type something...">
        </p>
      </div>
      <button on:click={addTodo}  class="button">Add Todo</button>
    </div>
  </div>
</div>

<div class="section box">
  <div class="title is-6">Things yet to do</div>
  <table class="table is-fullwidth">
    <thead>
      <th>Task</th>
    </thead>
    <tbody>
      {#each todoItems as todoItem}
      <tr>
        <td>{todoItem}</td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>

<script>
  let todoText = "";
  let todoItems = [];

  function addTodo() {
    if (todoText !== "") {
      todoItems.push(todoText);
    todoItems = [...todoItems];
    todoText = ""
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }
</script>