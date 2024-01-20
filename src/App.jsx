import { useEffect, useState } from 'react'
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';
import { fetchStorage, updateStorage, fetchTrash } from './modules/storage';
import Header from './components/Header';
import { app } from './settings';
import './style/ui.css'

function App() {
  const [todos, setTodos] = useState(() => fetchStorage());
  const [formVisible, setFormVisible] = useState(false);
  const [trashVisible, setTrashVisible] = useState(false);
  const [trash, setTrash] = useState(() => fetchTrash());

  useEffect(() => {
    updateStorage(todos)
  }, [todos]);

  useEffect(() => {
    setTrash(trash);
  }, [trash])

  function addTodo(title) {
    const todo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        todo
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  function editTodo(id) {
    const text = prompt("Editar título da tarefa");

    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            title: text != "" ? text : todo.title
          }
        }

        return todo
      })
    })
  }

  function toggleFormVisible() {
    setFormVisible(!formVisible);
  }

  function toggleTrashVisible() {
    setTrashVisible(!trashVisible);
  }

  function deleteAll() {
    const shouldDelete = confirm("Você tem certeza de que deseja deletar todas as tarefas?");

    if (shouldDelete) {
      setTodos(() => []);
      updateStorage([]);
    }
  }

  function orderItems() {
    const items = todos.sort(function (a, b) {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    setTodos(() => [...items])
  }

  return (
    <>
      <Header toggleFormVisible={toggleFormVisible} {...app} />
      {formVisible && <TodoForm onSubmit={addTodo} hideForm={toggleFormVisible}/>}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        deleteAll={deleteAll}
      />
      <div>
        <div className="ui labeled button" tabindex="0" onClick={() => toggleTrashVisible()}>
          <div className="ui red button">
            <i className="heart icon"></i> {trashVisible ? "Esconder Lixeira" : "Lixeira"}
          </div>
          <a className="ui basic red left pointing label">
            {trash.length}
          </a>
        </div>
        <button className="ui button" onClick={() => orderItems()}>
          <i className="filter icon"></i>
          Ordenar Tarefas
        </button>
      </div>
      <footer>
        <span>Criado com <i className="icon heart"></i> por AndrewNation.</span>
      </footer>
    </>
  )
}

export default App
