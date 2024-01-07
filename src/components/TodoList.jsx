import TodoItem from "./TodoItem";
import '../style/ui.css'

export default function TodoList({ todos, toggleTodo, deleteTodo, deleteAll, editTodo }) {
  return (
    <ul
      className="list task-list"
    >
      <h1 className="header">Lista de Tarefas</h1>
      {todos.length === 0 && "Nenhuma tarefa. Adicione alguma"}
      {todos.map((todo) => (
        <>
          <TodoItem
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </>
      ))}
      {todos.length > 0 && <button class="ui button red" onClick={deleteAll}>Deletar Tudo</button>}
    </ul>
  );
}
