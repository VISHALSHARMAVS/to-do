import "./App.css";
import React from "react";
import TodoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });


    setInputText("");
  }
 

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => 
           <TodoItem 
           text = {todoItem}
           />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

