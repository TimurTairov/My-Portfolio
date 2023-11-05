import { useState } from "react"
import Costs from "./Costs/Costs"
import NewCost from "./NewCost/NewCost"
import INITIAL_COSTS from "../../data/initialCosts"
import './CostApp.css'

const CostsApp = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div className="app-container">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div >
  );
}

export default CostsApp;
