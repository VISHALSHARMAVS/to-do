import './App.css';
import React from 'react';

function App() {

const [inputText , setInputText] = React.useState("");

function handleChange(e){
  const newValue = e.target.value
setInputText(newValue)
}

  return (
    <div className="container">
     <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange}/>
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;