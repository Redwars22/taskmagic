import { useEffect, useState } from 'react'
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';
import { fetchStorage, updateStorage } from './modules/storage';
import Header from './components/Header';
import { app } from './settings';
import './style/ui.css'

function App() {
  const [todos, setTodos] = useState(() => fetchStorage());
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    updateStorage(todos)
  }, [todos]);

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

  function deleteAll(){
    const shouldDelete = confirm("Você tem certeza de que deseja deletar todas as tarefas?");

    if(shouldDelete){
      setTodos(()=>[]);
      updateStorage([]);
    }
  }

  return (
    <>
      <Header toggleFormVisible={toggleFormVisible} {...app} />
      {formVisible && <TodoForm onSubmit={addTodo} />}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        deleteAll={deleteAll}
      />
      <footer>
        <span>Criado com <i className="icon heart"></i> por AndrewNation.</span>
      </footer>
    </>
  )
}

export default App
