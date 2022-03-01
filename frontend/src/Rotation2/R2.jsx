import React, { useState } from "react";
import Assets from "../utils/Assets";

import {
  downloadImg,
  Btnmaker,
  change,
  Imagemaker,
  customizeImg,
  getImage,
} from "./Allfunctions.js";
import {
  downloadIcon,
  randomImg,
  backgroundImg,
  accessoriesImg,
  earsImg,
  eyesImg,
  mouthImg,
  hairImg,
  neckImg,
  legImg,
  noseImg,
} from "./Allimports.js";

function R2() {
  const [selection, setSelection] = useState("backgrounds");

  const states = {
    backgrounds: useState(backgroundImg),
    ears: useState(earsImg),
    hair: useState(hairImg),
    neck: useState(neckImg),
    leg: useState(legImg),
    nose: useState(noseImg),
    accessories: useState(accessoriesImg),
    mouth: useState(mouthImg),
    eyes: useState(eyesImg),
  };
  var run = 0;
  const random = (states, Assets) => {
    const firstDir = Object.keys(Assets);
    var randomDict = {};
    for (var i = 0; i <= firstDir.length-1; i++) {
      const secondDir = Object.keys(Assets?.[firstDir[i]]);
      const addAt = Math.floor(Math.random() * (secondDir.length));
      // console.log(secondDir.length,'length of second dr')
      const secondDirLen = secondDir.length
      for (var j = 0; j <= secondDirLen-1; j++) {
        console.log(secondDirLen, j,'len')

        console.log(Assets[firstDir[i]][secondDir[j]]);
        if (j == addAt) {
          randomDict[firstDir[i]] = Assets[firstDir[i]][secondDir[j]];
          break;
        }
      }
    }
    Object.keys(randomDict).map((item) => {
      getImage(randomDict[item], states[item][1]);
    });
    setTimeout(() => {
      if (run < 3) {
        random(states, Assets);
        run++;
      }
    }, 300);
  };

  return (
    <div className="wrap">
      <h3>know how to do</h3>
      <h1>Alpaca Generator</h1>
      <div className="alpaca">
        <div className="left">
          <div className="alpacaArt">
            <Imagemaker states={states} />
          </div>
          <div className="actions">
            <button onClick={() => downloadImg()}>
              Download
              <img src={downloadIcon} alt="download-icon" />
            </button>

            <button onClick={() => random(states, Assets)}>
              Random <img src={randomImg} alt="random image" />
            </button>
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <h3>Accessorise the Alpaca</h3>
            <Btnmaker location={Assets} func={change(setSelection, "id")} />
          </div>
          <div className="right-bottom">
            <h3>Styles</h3>
            <Btnmaker
              location={Assets[selection]}
              func={customizeImg(states)}
              giveClass={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default R2;
