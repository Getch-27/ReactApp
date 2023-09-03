import React from "react";

import "./ContextButton.css"

function ContextButton(props){
  function handleClick(){
     props.onSlide(props.id); 
     
  }

    return(
        <button className="contextButton" onClick={handleClick}> Read Context</button>
    )
}


export default ContextButton;