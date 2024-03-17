<script>
  import { v4 as uuidv4 } from 'uuid';
  import Title from './Title.svelte';
  import TodoList from './TodoList.svelte';

  let todoText = "";
  let todoItems = [];
  let todo = {};
  let doneItems = [];

  function addTodo() {
    todo = {
      id: uuidv4(),
      text: todoText,
      date: new Date().toLocaleString("en-IE"),
    }
    if (todoText !== "") {
      todoItems.push(todo);
      todoItems = [...todoItems];
      todoText = ""
    }
  }

  function deleteTodo(id) {
    const foundIndex = todoItems.findIndex(todo => todo.id === id);
    if (foundIndex !== -1) {
      const [done] = todoItems.splice(foundIndex, 1);
      doneItems.push(done);
      todoItems = [...todoItems];
      doneItems = [...doneItems];
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
      event.preventDefault();
    }
  }
</script>

<div class="container">
  <Title title="Simple Todo List" subTitle="Fun Things To Do"/>

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

  <TodoList items="{todoItems}" caption="Things yet to do" deleteHandler={deleteTodo} />

  <TodoList items="{doneItems}" caption="Things that are done" />

</div>