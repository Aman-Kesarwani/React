import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 94.67, date: new Date(2021,7, 14) },
    { title: "New Tv", amount: 799.46, date: new Date(2021, 6, 13), },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28), },
    { title: "Wooden Desk", amount: 400.67, date: new Date(2021, 5, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items ={expenses}/>
    </div>
  );
}

export default App;
