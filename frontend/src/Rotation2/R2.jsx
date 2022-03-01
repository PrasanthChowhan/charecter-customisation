import React, { useState } from "react";
import Assets from "../utils/Assets";
import {
  getImage,
  Btnmaker,
  change,
  Imagemaker,
  customizeImg,
  download
} from "./Allfunctions.js";
import {
  downloadImg,
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

  return (
    <div className="wrap">
      <h1>Alpaca Generator</h1>
      <div className="alpaca">
        <div className="left">
          <canvas>
            <Imagemaker states={states} />
          </canvas>
          <div className="download">
            <button  onClick={download}>
              Download
              <img src={downloadImg} alt="download-icon" />

            </button>
            <button>
              Random <img src={randomImg} alt = 'random image'/>
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
