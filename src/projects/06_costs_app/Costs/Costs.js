import MyCard from '../UI/MyCard'
import CostFilter from './CostFilter'
import { useState } from 'react'
import CostList from './CostList'
import CostDiagram from './CostDiagram'
import './Costs.css'

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear
  })

  return (

    <MyCard className="costs">
      <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </MyCard>

  )
}

export default Costs