import ExpenseItem from './ExpenseItem'
const ExpenseList=(props)=>{
    let items = props.filteredData.map((item) =>
    <ExpenseItem
      date={item.date}
      title={item.title}
      amount={item.amount}
      key={item.id}
    />
    );
    if(props.filteredData.length===0)
    items=<h3>No Expenses</h3>
    return(
        <div>{items}</div>
    )
}
export default ExpenseList