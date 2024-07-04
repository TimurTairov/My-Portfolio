import './CostItem.css'
import CostDate from './CostDate'
import MyCard from '../UI/MyCard'

const CostItem = (props) => {

  return (
    <li>
      <MyCard className='cost-item'>
        <CostDate date={props.date} />
        <div className='cost-item__description'>
          <h2>{props.description}</h2>
          <div className='cost-item__price'>${props.amount}</div>
        </div>
      </MyCard>
    </li>
  )
}
export default CostItem