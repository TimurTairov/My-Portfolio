import './MyCard.css'

const MyCard = (props) => {
  const classes = 'card ' + props.className
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default MyCard