import Button from '../UI/Button'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'
import { useState } from 'react';
const Newexpense = (props) => {
  const [toggle, setToggle] = useState(false)
  const buttonToggler=()=>{
    setToggle(prevState=>!prevState)
  }
  const saveExpenseDataHandlerNEWEXPENSE = (userEnteredData) => {
    const expense = {
      ...userEnteredData
    }
    props.onSaveExpenseDataAPP(expense)
  }
  if(toggle) {
    return (
      <div className='new-expense'>
        <NewExpenseForm onSaveExpenseDataNEWEXPENSE={saveExpenseDataHandlerNEWEXPENSE} onClose={buttonToggler} />
      </div>)
  }
  return( <div className='new-expense__add'><Button onClick={buttonToggler}>Add</Button></div>)
}
export default Newexpense