
import React from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = React.useState([]);
  

  function handleClick(inputText) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    })}
 
  function handleDelete(id){
    setItems((prevValue)=>{
      return prevValue.filter((item,index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea
      
      onClick={handleClick}
      />
      
      <div>
        <ul>
          {items.map((todoItem,index) => 
           <TodoItem 
           key={index}
           id={index}
           text = {todoItem}
           delete = {handleDelete}
           
           />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

