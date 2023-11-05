import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './Todos/TodoForm'
import TodoList from './Todos/TodoList'
import TodosActions from './Todos/TodosActions'
import './TodoApp.css'

function TodoApp() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className='TodoApp-container'>

      <div className="TodoApp">
        <TodoForm addTodo={addTodoHandler} />
        {!!todos.length && (
          <TodosActions
            completedTodosExist={!!completedTodosCount}
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
          />
        )}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
        {completedTodosCount > 0 && (
          <h2>{`Completed tasks: ${completedTodosCount}.`}</h2>
        )}
      </div>

    </div>
  )
}

export default TodoApp
