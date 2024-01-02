import React from "react";


function InputArea(props){
   
    const [inputText, setInputText] = React.useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setInputText(newValue);
      }


return <div className="form">
<input type="text" value={inputText} onChange={handleChange} />
<button onClick={()=>{
    props.onClick(inputText)
    setInputText("");

}}>
  <span>Add</span>
</button>
</div>
}
export default InputArea;