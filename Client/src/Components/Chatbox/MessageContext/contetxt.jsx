import React, { useState } from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import "./Context.css"


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
<<<<<<< HEAD
      {/* Renders a ReadMoreIcon component with an onClick event */}
      <ReadMoreIcon onClick={HandleClick} />
      {/* Renders a paragraph element with the display context based on the state */}
=======
      <div className="ContectButton">
         <h3>Show Context</h3>
         <ReadMoreIcon fontSize="large" onClick={HandleClick} />
      </div>
>>>>>>> 623305a3479b6d62105073c7ce971fc29c74159b
      <p style={{ display: displayContext  }}>
        {props.msgContext}
      </p>
    </div>
  );
}


export default  MessageContext;