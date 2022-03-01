import React from "react";

// This component takes the directory and converts them into button

function ShowContent( {Asset } ) {   // curly braces important here don't know why 
  return (
    <div>
      {Object.keys(Asset).map((item) => {
          
        return <button id={item}  > {item}</button>;
      })}
    </div>
  );
}

export default ShowContent;
