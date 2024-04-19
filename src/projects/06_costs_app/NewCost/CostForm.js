import { useState } from 'react'
import './CostForm.css'

const CostForm = (props) => {

  const [inputName, setInputName] = useState('')
  const [inputSum, setInputSum] = useState('')
  const [inputDate, setInputDate] = useState('')


  const nameChangeHandler = (event) => {
    setInputName(event.target.value)
  }

  const sumChangeHandler = (event) => {
    setInputSum(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const costData = {
      description: inputName,
      amount: inputSum,
      date: new Date(inputDate)
    }

    props.onSaveCostData(costData)

    setInputName('')
    setInputSum('')
    setInputDate('')
  }


  return <form onSubmit={submitHandler}>

    <div className="new-cost__controls">
      <div className="new-cost__control">
        <label>Название</label>
        <input type="text" value={inputName} onChange={nameChangeHandler} />
      </div>

      <div className="new-cost__control">
        <label>Сумма</label>
        <input type="number" min='0.01' step='0.01' value={inputSum} onChange={sumChangeHandler} />
      </div>

      <div className="new-cost__control">
        <label>Дата</label>
        <input type="date" min='2020-01-01' max='2025-12-31' value={inputDate} onChange={dateChangeHandler} />
      </div>

      <div className="new-cost__actions">
        <button type="submit">Добавить Расход</button>
        <button type='button' onClick={props.onCancel}>Отмена</button>
      </div>
    </div>
  </form >
}


export default CostForm