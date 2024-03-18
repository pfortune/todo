<script>
  import { v4 as uuidv4 } from 'uuid';
  import Title from './Title.svelte';
  import TodoList from './TodoList.svelte';
  import AddTodoForm from './AddTodoForm.svelte';

  let todoText = "";
  let todoItems = [];
  let todo = {};
  let doneItems = [];

  function addTodo(todoText) {
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
</script>

<div class="container">
  <Title title="Simple Todo List" subTitle="Fun Things To Do"/>

  <div class="section box">
    <AddTodoForm {addTodo} />
  </div>

  <TodoList items="{todoItems}" caption="Things yet to do" deleteHandler={deleteTodo} />

  <TodoList items="{doneItems}" caption="Things that are done" />

</div>