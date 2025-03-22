import React, { useState } from 'react'
//imported useState hook from react
//useState is a hook that lets you add state to functional components
//useState returns an array with 2 values
//1. The current state
//2. A function that lets you update the state
//useState is a named export from 'react'
//useState is a hook that lets you add state to your component



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleReClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");

    }

     const handleExtraSpace=() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
     }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    

    const [text, setText] = useState('');

    const countWords = (text) => {
        return text.split(/\s+/).filter((element) => element.length !== 0).length;
    }
    ///\s+/ is a regular expression that matches one or more spaces
    //filter((element) => element.length !== 0) is used to filter out empty strings
    //length property is used to count the number of words
    //split(/\s+/) is used to split the text into an array of words



    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    // text is the current state value   
    // setText is the function that lets you update the state
    // useState('Enter text here') is the initial value of the state
    // 'Enter text here' is the initial value of the state
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#212520'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#212517' : 'white',color : props.mode === 'dark' ? 'white' : '#212520'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0}onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-secondary mx-3 my-1" disabled={text.length===0}onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-warning mx-3 my-1" disabled={text.length===0}onClick={handleCopy}>Copy To Clipboard</button>
            <button className="btn btn-danger mx-3 my-1" disabled={text.length===0}onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-success mx-3 my-1" disabled={text.length===0}onClick={handleReClick}>Clear Text</button>
            
        </div>
       <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#212520'}}>
            <h2>Your text summary</h2>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{0.008 * countWords(text)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter text in the above box to preview" }</p>
        </div>
        </>
    )
}

// textarea contains one value which is text
// text is a variable that belongs to the state
// i can change the value of text by using setText function
// whenever user try to change textarea value, handleOnChange function will be called
// handleOnChange function will change the value of text
// setText(event.target.value); will change the value of text

//why we have handleOnChange function?
//because we need to change the value of text whenever user try to change the value of textarea
//handleOnChange function will change the value of text
//setText(event.target.value); will change the value of text
