import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpenseList from './ExpenseList';
// Wrapper component
import Card from './UI/Card'
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState(new Date().getFullYear().toString())
  const [filterMonth, setFilterMonth] = useState(new Date().getMonth().toString())

  const filterChangeHandlerYear = (year) => {
    setFilterYear(year)
  }
  const filterChangeHandlerMonth = (month) => {
    setFilterMonth(month)
  }
  let filteredData = props.data.filter(item => item.date.getFullYear().toString() === filterYear && item.date.getMonth().toString() === filterMonth)
  if (filterMonth === "All") {
    filteredData = props.data.filter(item => item.date.getFullYear().toString() === filterYear)
  }
  return (
    <div>
      <ExpensesFilter selectedYear={filterYear} selectedMonth={filterMonth} onChangeFilterYear={filterChangeHandlerYear} onChangeFilterMonth={filterChangeHandlerMonth} />
      <Card className="expenses">

        <ExpenseChart expenses={filteredData} />
        <ExpenseList filteredData={filteredData} />
      </Card>
    </div>
  )
}
export default Expenses