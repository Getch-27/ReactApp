import React, { useState } from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ReactMarkdown from "react-markdown";

import "./Context.css";

function MessageContext(props) {
  const [displayContext, setDisplayContext] = useState(false);

  function handleClick() {
    setDisplayContext(!displayContext);
  }

  return (
    <div>
      <div className="ContectButton" onClick={handleClick}>
        <h3>Show Context</h3>
        <ReadMoreIcon fontSize="large" />
      </div>
      {displayContext && (
        <div>
          <ReactMarkdown children={props.msgContext}></ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default MessageContext;
