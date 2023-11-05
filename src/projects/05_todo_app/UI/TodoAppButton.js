import styles from './TodoAppButton.module.css'

function TodoAppButton(props) {
  const { children, title, disabled = false } = props
  // console.log(props)
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  )
}

export default TodoAppButton
