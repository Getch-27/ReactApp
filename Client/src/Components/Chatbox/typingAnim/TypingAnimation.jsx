import React from "react";
import "./typing.css";  // Importing the associated style for the component


function TypingAnimation(){

    return(
        <div className="newtons-cradle">
             {/* Four dots representing a Newton's Cradle animation */}
         <div className="newtons-cradle__dot"></div>
         <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
         <div className="newtons-cradle__dot"></div>
        </div>

    )
}
export default TypingAnimation;