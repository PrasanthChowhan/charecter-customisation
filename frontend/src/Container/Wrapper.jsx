import React, { useState } from "react";
import Background from "../Components/Background";
import Rightbottom from "../Components/Rightbottom";
import Showcontent from "../utils/Showcontent.jsx";
import Assets from "../utils/Assets";

function Wrapper() {
  // const [select, setSelect] = useState('background')

  const changeRightBottom = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="alpaca">
      <div className="left">
        <Background className="hide" />
      </div>
      <div className="right">
        
        <div className="right-top">
          <Showcontent Asset={Assets} />
        </div>
        <div className="right-bottom">
          <Rightbottom />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
