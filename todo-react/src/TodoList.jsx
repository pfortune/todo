import Todo from './Todo.jsx';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
