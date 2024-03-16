<div class="section box">
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label for="todo" class="label">What should I do?</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input bind:value={todoText} id="todo" class="input" type="text" placeholder="Type something...">
        </p>
      </div>
      <button on:click={addTodo} class="button">Add Todo</button>
    </div>
  </div>
</div>

<script>
  let todoText;
  function addTodo() {
    console.log(todoText)
  }
</script>