import React from "react";

function TodoItem(props) {
  const [checkBtn, setCheckBtn] = React.useState(true);

  function handleCheck() {
    setCheckBtn((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleCheck} onDoubleClick={()=>{
      props.delete(props.id);
    }}>
      <li
        className="list"
        style={{ textDecoration: checkBtn ? "none" : "line-through" }}
      >
        {props.text}
        <i
          className="fa fa-square-check"
          style={{ color: checkBtn ? "green" : "darkgray" }}
        ></i>{" "}
        <i className="fa-solid fa-trash" onClick={()=>{
          props.delete(props.id)
        }}></i>
      </li>
    </div>
  );
}
export default TodoItem;
