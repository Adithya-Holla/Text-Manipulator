import React,{useState} from "react"
import '../App.css';
function Textbox(props){
    
    const [text,setText]=useState("");
    const Upper=()=>{
        setText(text.toUpperCase());
    }
    const Lower=()=>{
        setText(text.toLowerCase());
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    return(
        <>
        <div className="container1">
        <h1 id="heading">{props.value}</h1>
        <textarea id="textbox" onChange={handleOnChange} value={text} placeholder="Enter the text here"></textarea>
        <button className="btn" onClick={Upper}>UpperCase</button>
        <button className="btn" onClick={Lower}>LowerCase</button>
        </div>
        <div className="container2">
            <h1 id="summary" style={{marginLeft:"855px"}}>Text stats</h1>
            <p id="count" style={{marginLeft:"830px"}}>Words={text.split(" ").filter(word => word !== "").length} and Characters={text.length}</p>
        </div>
        </>
    );
}

export default Textbox;