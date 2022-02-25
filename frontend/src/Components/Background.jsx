import React, { useState, useEffect } from "react";
import Assets from "../utils/Assets.js";
import { getImage } from "../utils/getImage.js";

function Background() {
  const [img, setImg] = useState(null);
  // delete from here

  //

  const changebg = (e) => {
    const location = e.target.id;
    console.log(img);
    getImage(location, (image) => {
      setImg(image);
    });

    console.log(img);
    const background = document.getElementById("bg");
    background.src = img;
  };

  return (
    <>
      <div key={"01"}>
        {Object.keys(Assets.backgrounds).map((item, i) => {
          return (
            <>
              <button onClick={changebg} id={Assets.backgrounds[item]} key={i}>
                {item}
              </button>
            </>
          );
        })}
      </div>
      <img src={img} alt="" id="bg" key={"02"} />
    </>
  );
}

export default Background;
