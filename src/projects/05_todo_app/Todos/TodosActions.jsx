import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import TodoAppButton from '../UI/TodoAppButton'
import styles from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <TodoAppButton
        title="Delete all tasks"
        onClick={resetTodos}
      >
        <RiRefreshLine />
      </TodoAppButton>
      <TodoAppButton
        title="Delete only completed tasks"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </TodoAppButton>
    </div>
  )
}

export default TodosActions
