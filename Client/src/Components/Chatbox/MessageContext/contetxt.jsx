import React, { useState } from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ReactMarkdown from "react-markdown";

import "./Context.css";

function MessageContext(props) {
  // Define a state variable to track whether to display the context
  const [displayContext, setDisplayContext] = useState(false);
  // Define a state variable to track whether to display the context
  function handleClick() {
    setDisplayContext(!displayContext);
  }

  return (
    <div>
      {/* Context toggle button */}
      <div className="ContectButton" onClick={handleClick}>
        <h3>Show Context</h3>
        <ReadMoreIcon fontSize="large" />
      </div>
       {/* Display the context if displayContext is true */}
      {displayContext && (
        <div>
         {/* Render context content using ReactMarkdown */}
          <ReactMarkdown children={props.msgContext}></ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default MessageContext;
