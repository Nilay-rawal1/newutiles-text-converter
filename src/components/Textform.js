import React, {useState}from 'react'

export default function textform(props) {
  return(
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-4" >
           
            <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-secondary">Convert to Uppercase</button>
    </div>
  )
}
