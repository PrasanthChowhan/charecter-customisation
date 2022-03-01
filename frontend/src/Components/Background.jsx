import React, { useState, useEffect } from "react";
import Assets from "../utils/Assets.js";
import { getImage } from "../utils/getImage.js";
import { showContent } from "../utils/Showcontent.js";
import Showcontent from "../utils/Showcontent.jsx";

function Background() {
  const [img, setImg] = useState(null);
  const [select, setSelect] = useState('background')
  // delete from here

  //

  const changebg = (e) => {
    const location = e.target.id;
    // console.log(img);
    getImage(location, setImg);
    // console.log(img);
    const background = document.getElementById("bg");
    background.src = img;
  };
  
  return (
    <>
      <div key={"01"} className = 'right'>
        {/* {Object.keys(Assets.backgrounds).map((item, i) => {
          return (
            <>
              <button onClick={changebg} id={Assets.backgrounds[item]} key={i}>
                {item}
              </button>
            </>
          );
        })} */}
        {/* <Showcontent asset = {Object.keys(Assets)}/> */}
      </div>
      <img src={img} alt="" id="bg" key={"02"} />
      {
        // console.log(showContent(Assets.accessories,changebg),'function itself')
      }
    
    </>
  );
}

export default Background;
