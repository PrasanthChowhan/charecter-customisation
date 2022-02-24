import React, { useState, useEffect } from "react";
import Assets from "../utils/Assets.js";
import { getImage } from "../utils/getImage.js";

function Background() {
  const img = null
  // console.log(Object.keys(Assets.backgrounds));

  return (
    <>
      {Object.keys(Assets.backgrounds).map((item) => {
        {
          console.log(Assets.backgrounds[item]);
          
         
          
        }

        <figure>
          <img src={img} alt="" />
        </figure>;
      })}
    </>
  );
}

export default Background;
