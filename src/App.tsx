import './App.css'
import List from './List'

function App() {
  const Fruits = [
      {id: 1, name: 'Apple', calories: 52},
      {id: 2, name: 'Banana', calories: 89},
      {id: 3, name: 'Cherry', calories: 50},
      {id: 4, name: 'Date', calories: 282},
      {id: 5, name: 'Elderberry', calories: 73},
      {id: 6, name: 'Fig', calories: 107},
  ]

  const Vegetables = [
      {id: 7, name: 'Asparagus', calories: 20},
      {id: 8, name: 'Broccoli', calories: 55},
      {id: 9, name: 'Cabbage', calories: 25},
      {id: 10, name: 'Dill', calories: 43},
      {id: 12, name: 'Eggplant', calories: 25},
      {id: 11, name: 'Fennel', calories: 31},
  ]

  return (
    <>
      <h1>React App</h1>
      <List type = {Fruits} title = {"List of Fruits"}/>
      <List type = {Vegetables} title = {"Trending Vegetables in Africa"}/>

    </>
  )
}

export default App
