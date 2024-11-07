import React,{useState} from "react";
import "../App.css"

function DarkMode(){
    
    const [mode,setMode]=useState({bg:"white",color:"black"});
    const [modeTxt,setModeTxt]=useState("Light Mode")
    const bgChange=()=>{
        if(mode.bg==="white"){
            setModeTxt("Dark Mode");
            setMode({bg:"black",color:"white"});
            document.body.style.backgroundColor="black";
            document.body.style.color="white";
            document.querySelector("#mode").style.backgroundColor="black";
            document.querySelector("#mode").style.color="white";
            document.querySelector("#mode").style.border="1px solid white";
            

        }
        else
        {
            setModeTxt("Light Mode");
            setMode({bg:"white",color:"black"});
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
            document.querySelector("#mode").style.backgroundColor="white";
            document.querySelector("#mode").style.color="black";
            document.querySelector("#mode").style.border="1px solid black";
            
        }
    }
    return(
        
        <button id="mode" onClick={bgChange}>{modeTxt}</button>
    );
}

export default DarkMode;