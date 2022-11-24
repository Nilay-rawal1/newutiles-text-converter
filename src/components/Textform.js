import React, { useState } from 'react'
 
export default function Textform(props) {

    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handlelowClick =()=>{
        console.log("Uppercase was clicked" + text)
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleclear =()=>{
        console.log("Uppercase was clicked" + text)
        let newText=("");
        setText(newText)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox"); text.select(); navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
        
  /*  const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
*/
    const handleOnChange =(event)=>{
        console.log("on change")
        setText(event.target.value);
    }
    
    const [text, setText] = useState("")

  return(
    <>
    <div className='container my-2'>
        <h1 >{props.heading}</h1>
        <div className="mb-4" >
           
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handlelowClick}>Convert to lowercase</button>
        
        <button type="submit" onClick={handleclear} className="btn btn-success mx-1"> clear text</button>
        <button type="submit" onClick={handleCopy} className="btn btn-success mx-1"> Copy text</button>
        <button type="submit" onClick={handleExtraSpaces} className="btn btn-success mx-1"> Remove extra spaces</button>

    </div>
    <div className="container my-4">
        <h2>Your text summary</h2>
        <p className='text-secondary'>{text.split(" ").length} words and {text.length}characters</p>
        <p className='text-secondary'>{0.008*text.split(" ").length} Mintues read </p>
        <h2 >Preview</h2>
        <p className='text-secondary'>{text}</p>
    </div>
    </>
  )
}
