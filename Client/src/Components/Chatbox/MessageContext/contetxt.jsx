import React, { useState } from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';


function MessageContext(props){

  // State variable to manage the display context of the message
  const[displayContext , setDisplayContext] =useState("none")
  // Function to handle the click event
  function HandleClick(){
    // Toggles the display context between "none" and "block"
    displayContext === "none" ? setDisplayContext("block") : setDisplayContext("none")
  }
  return (
    <div>
      {/* Renders a ReadMoreIcon component with an onClick event */}
      <ReadMoreIcon onClick={HandleClick} />
      {/* Renders a paragraph element with the display context based on the state */}
      <p style={{ display: displayContext  }}>
        {props.msgContext}
      </p>
    </div>
  );
}


export default  MessageContext;