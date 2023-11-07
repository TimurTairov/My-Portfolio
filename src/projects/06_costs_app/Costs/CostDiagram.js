import Diagram from "../Diagram/Diagram"

const CostDiagram = (props) => {

  const diagramDataSets = [

    // { labal: 'Jan', value: 0 },
    // { labal: 'Feb', value: 0 },
    // { labal: 'Mar', value: 0 },
    // { labal: 'Apr', value: 0 },
    // { labal: 'May', value: 0 },
    // { labal: 'Jun', value: 0 },
    // { labal: 'Jul', value: 0 },
    // { labal: 'Aug', value: 0 },
    // { labal: 'Sep', value: 0 },
    // { labal: 'Okt', value: 0 },
    // { labal: 'Nov', value: 0 },
    // { labal: 'Dec', value: 0 },

    { labal: '1', value: 0 },
    { labal: '2', value: 0 },
    { labal: '3', value: 0 },
    { labal: '4', value: 0 },
    { labal: '5', value: 0 },
    { labal: '6', value: 0 },
    { labal: '7', value: 0 },
    { labal: '8', value: 0 },
    { labal: '9', value: 0 },
    { labal: '10', value: 0 },
    { labal: '11', value: 0 },
    { labal: '12', value: 0 },
  ]

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth()
    diagramDataSets[costMonth].value += cost.amount
  }

  console.log(diagramDataSets)

  return <Diagram dataSets={diagramDataSets} />
}

export default CostDiagram