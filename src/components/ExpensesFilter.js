import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownYearChangeHandler = (event) => {
    props.onChangeFilterYear(event.target.value)
    console.log(`event.target.value`, event.target.value)
  }
  const dropdownMonthChangeHandler = (event) => {
    props.onChangeFilterMonth(event.target.value)
    console.log(`event.target.value`, event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select defaultValue={props.selectedYear} onChange={dropdownYearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      <div className='expenses-filter__control'>
        <label>Filter by Month</label>
        <select defaultValue={props.selectedMonth} onChange={dropdownMonthChangeHandler}>
          <option value='All'>All</option>
          <option value='0'>Janunary</option>
          <option value='1'>February</option>
          <option value='2'>March</option>
          <option value='3'>April</option>
          <option value='4'>May</option>
          <option value='5'>June</option>
          <option value='6'>July</option>
          <option value='7'>August</option>
          <option value='8'>September</option>
          <option value='9'>October</option>
          <option value='10'>November</option>
          <option value='11'>December</option>
        </select>
      </div>
    </div>
  );

}
export default ExpensesFilter;
