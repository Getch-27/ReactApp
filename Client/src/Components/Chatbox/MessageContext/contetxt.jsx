import React from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';


function MessageContext(props){

    return(
         <div>
           <ReadMoreIcon />
          <p>{props.contaxt}</p>

         </div>
       
    )
}


export default  MessageContext;