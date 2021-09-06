import { useState } from "react";
import Expenses from "./components/Expenses";
import Newexpense from "./components/NewExpense/NewExpense";
const INI_DATA = [{
  id: 'e1',
  date: new Date('08-12-2019'),
  title: "Chai",
  amount: 100
}, {
  id: 'e2',
  date: new Date('09-13-2019'),
  title: "Pizza",
  amount: 400
}, {
  id: 'e3',
  date: new Date('5-16-2020'),
  title: "Cake",
  amount: 600
}, {
  id: 'e4',
  date: new Date('6-16-2020'),
  title: "soda",
  amount: 100
}, {
  id: 'e5',
  date: new Date('7-16-2020'),
  title: "lassun",
  amount: 60
}, {
  id: 'e6',
  date: new Date('8-16-2020'),
  title: "sans",
  amount: 70
}]
const App = () => {
  const [data, setData] = useState(INI_DATA)
  const saveExpenseDataHandlerAPP = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    }
    setData(prevState => {
      return [
        ...prevState,
        expenseData
      ]
    })
  }
  return <div>
    <Newexpense data={data} onSaveExpenseDataAPP={saveExpenseDataHandlerAPP} />
    <Expenses data={data} />
  </div>;
};

export default App;
