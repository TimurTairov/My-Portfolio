import Todo from './Todo'
import style from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h2>The task list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}
export default TodoList
