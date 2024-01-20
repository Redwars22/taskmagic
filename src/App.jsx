import { useEffect, useState } from 'react'
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';
import { fetchStorage, updateStorage, fetchTrash, updateTrash } from './modules/storage';
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
    updateTrash(trash);
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
    setTrash((currentTodos) => {
      return currentTodos.filter((todo) => todo.id == id)
    })

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
      setTrash((currtodos) => [
        ...currtodos,
        ...todos
      ])
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
        trash={trash}
        trashVisible={trashVisible}
        orderItems={orderItems}
        toggleTrashVisible={toggleTrashVisible}
      />
      <footer>
        <span>Criado com <i className="icon heart"></i> por AndrewNation.</span>
      </footer>
    </>
  )
}

export default App
