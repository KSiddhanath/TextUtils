import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase Was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
       
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
       
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared all text!","success");
       
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success");
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!","success");
    }


    const[text, setText]=useState('')
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#151f4a'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">            
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#151f4a'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={{backgroundColor: props.mode === 'dark'?'#151f4a':'white', color: props.mode==='dark'?'white':'#151f4a'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length}characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
       
    </>
  )
}
