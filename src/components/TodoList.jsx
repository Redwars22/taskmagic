import TodoItem from "./TodoItem";
import '../style/ui.css'
import Trashbin from './Trashbin'

export default function TodoList({ todos, toggleTodo, deleteTodo, deleteAll, editTodo, trashVisible, trash, toggleTrashVisible, orderItems, emptyTrash }) {
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
      <div>
        {todos.length > 0 && <button className="ui button red" onClick={deleteAll}>Deletar Tudo</button>}
        <div className="ui red button" onClick={() => toggleTrashVisible()}>
          <i className="trash icon"></i> {trashVisible ? "Esconder Lixeira" : "Lixeira"} - {trash.length}
        </div>
        {trashVisible && <div className="ui red button" onClick={() => emptyTrash()}>
          <i className="trash icon"></i> Esvaziar Lixeira
        </div>}
        <button className="ui button" onClick={() => orderItems()}>
          <i className="filter icon"></i>
          Ordenar Tarefas
        </button>
      </div>
      {trashVisible && <Trashbin trash={trash} />}
    </ul>
  );
}
