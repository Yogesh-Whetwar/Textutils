import React, { useState } from "react";

export default function TextForm(props) { 

  const [text, setText] = useState("Enter here");
  function handleUpclick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  function handleLoclick() {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const Clear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      props.showAlert("copied to clipboard", "success");
    });
  };
  const handleExtraSpaces = () => { 
    // eslint-disable-next-line 
    let newText = text.split(/[]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed");
  };
  const cap = () => {
    //splitting above string into arr of strings whenever a space is encounterred
    const arr = text.split(" ");
    //looping through each ele of the array and capitalizing the first letter
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //join all the elements of the array back intostring using a blanckspace as a separator
    setText(arr.join(" "));
    //calling the function which is present in app.js to show that it worked
    props.showAlert(
      "First Letter Of All Words Has Been Capitalized",
      "success"
    );
  };
  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          {/* heading does not require props but we are using so that cout concept of props becomes clear */}
          <h1 >
            {props.heading}
          </h1>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control  "
            id="myBox"
            rows="5"
            value={text} 
            //without handlechange we can not write any word inside the textarea
            onChange={handleChange}
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-4" onClick={handleUpclick}>
            Convert to UpperCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoclick}>
            Convert to LowerCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={cap}>
            Capitalize Cases
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Exttra Spaces
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={Clear}>
            CLear Text
          </button>

          <h1>Your text Summary</h1>
          
            <p>
            Words You Write {((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} 
          </p>
          <p>Time Required to read the the words is {0.08*text.split(" ").length} Minutes</p>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
