import React, { useState } from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';


function MessageContext(props){

    const[displayContext , setDisplayContext] =useState("none")
  function HandleClick(){
    displayContext === "none" ? setDisplayContext("block") : setDisplayContext("none")
  }
  return (
    <div>
      <ReadMoreIcon onClick={HandleClick} />
      <p style={{ display: displayContext  }}>
        {props.msgContext}
      </p>
    </div>
  );
}


export default  MessageContext;