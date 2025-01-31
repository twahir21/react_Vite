import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    // const changeName = () =>{
    //     setCount("twahir"); // or pass it from above function for strings
    // }

    // const changeStatus = (status) => {
    //     setCount(!status) for changing state of status for boolean
    // }
  return (
    <div className="Counter">
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default Counter