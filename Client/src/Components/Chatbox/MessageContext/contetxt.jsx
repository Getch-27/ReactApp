import React, { useState } from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import "./Context.css"


function MessageContext(props){

    const[displayContext , setDisplayContext] =useState("none")
  function HandleClick(){
    displayContext === "none" ? setDisplayContext("block") : setDisplayContext("none")
  }
  return (
    <div>
      <div className="ContectButton">
         <h3>Show Context</h3>
         <ReadMoreIcon fontSize="large" onClick={HandleClick} />
      </div>
      <p style={{ display: displayContext  }}>
        {props.msgContext}
      </p>
    </div>
  );
}


export default  MessageContext;