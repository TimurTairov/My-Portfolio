import DiagramBar from "./DiagramBar"
import './Diagram.css'

const Diagram = (props) => {

  const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

  // console.log(dataSetsValues)
  const maxMonthCosts = Math.max(...dataSetsValues)

  return <div className="diagram">
    {props.dataSets.map(dataSet =>
      <DiagramBar
        key={dataSet.id}
        value={dataSet.value}
        maxValue={maxMonthCosts}
        labal={dataSet.labal}
      />)
    }
  </div>
}

export default Diagram