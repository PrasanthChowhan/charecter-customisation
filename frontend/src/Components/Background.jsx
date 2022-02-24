import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import imgData from "../utils/Assets.js";
// import { getImage } from "../utils/getImage.js";
import myimage from "../Assets/backgrounds/blue50.png";
function Background() {
  import('../Assets/backgrounds/green60.png').then((data) =>{
    console.log(data.default)
  })
  const [img, setImg] = useState(null);
  useEffect(() => {
    setImg('../Assets/backgrounds/blue50.png')
    console.log(myimage)
  
    
  }, [])
  
  return (
    <>
      <img src={myimage} alt="img not working" />
    </>
  );
}

export default Background;
