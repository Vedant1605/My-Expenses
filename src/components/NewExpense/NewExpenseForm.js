import './NewExpenseForm.css'
import Button from '../UI/Button'
import React, { useState } from 'react';
const Newexpenseform = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    }
    const clearInputHandler = (event) => {

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }
    const submitHandler = (event) => {
        event.preventDefault()
        const userData = {
            id: Math.random(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseDataNEWEXPENSE(userData)
        clearInputHandler()
        props.onClose()
    }
    return (
        <div>
            <h4 className="close" onClick={props.onClose}>&times;</h4>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls" >
                    <div className="new-expense__control">
                        <label className="new-expense__control label" >Title</label>
                        <input onChange={titleChangeHandler} className="new-expense__control input" type="text" value={enteredTitle} />
                    </div>
                    <div className="new-expense__control">
                        <label className="new-expense__control label" >Amount</label>
                        <input onChange={amountChangeHandler} className="new-expense__control input" type="number" min="1" step="1" value={enteredAmount} />
                    </div>
                    <div className="new-expense__control">
                        <label className="new-expense__control label" >Date</label>
                        <input onChange={dateChangeHandler} className="new-expense__control input" type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <Button className="danger" onClick={clearInputHandler} type="button">Clear</Button>
                    <Button className="warning" type="submit">Add</Button>
                </div>
            </form>
        </div>
    )
}
export default Newexpenseform
/*
    NOTES
    ANOTHER WAY OF USING MULTIPLE STATE USING USE STATE
     const [userInput, setUserdInput] = useState({
         enteredTitle: '',
         enteredAmount: '',
         enteredDate:''
     })
        setUserdInput({
             ...userInput,
             enteredTitle:event.target.value
         })
        setUserdInput({
             ...userInput,
             enteredAmount:event.target.value
         })
        fsetUserdInput({
             ...userInput,
             enteredDate:event.target.value
         })
         setUserdInput({
             enteredTitle: '',
             enteredAmount: '',
             enteredDate: ''
        })
    HE BETTER WAY OF STATE UPADTE IF REQUIRE PREVSTATE
         setUserdInput((prevSate)=>{...prevState,
          enteredTitle: '',
          enteredAmount: '',
          enteredDate: ''
     })

*/