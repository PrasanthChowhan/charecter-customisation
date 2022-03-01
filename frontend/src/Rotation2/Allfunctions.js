const download =() =>{
  console.log(document.getElementsByTagName('canvas'))
}


const customizeImg = (states) => (e) => {
  const location = e.target.value;
  const stateof = e.target.className;
  getImage(location, states[stateof][1]);
};

const Imagemaker = ({ states }) => {
  return (
    <>
      <div className="alpacaArt">
        {Object.keys(states).map((image) => {
          return (
            <img
              src={states[image][0]}
              key={image}
              alt={image}
              style={{ position: "absolute" }}
            />
          );
        })}
      </div>
    </>
  );
};
// This function takes the classname of button and adds to usestate
//  it takes two parameters setstate , what = className or id
const change = (set, what) => (event) => {
  set(event.target[what]);
  // console.log(event);
  // console.log(document.getElementsByClassName('right-top').classList.toggle('active'))
  // console.log(document.getElementsByClassName('right-top')[0].childNodes) ;
  const activeEl=  document.getElementsByClassName("active")[0]
  activeEl && activeEl.classList.remove("active");
  document.getElementById(event.target.id).classList.add("active");
};

// get image dynamically imports data
//  using split because don't know why variable was not working
const getImage = (location, set) => {
  const sliced = location.split("/");
  import(`../Assets/${sliced[2]}/${sliced[3]}`).then((img) => {
    set(img.default);
  });
};

const Btnmaker = (props) => {
  return (
    <>
      {Object.keys(props.location).map((key) => (
        <>
          {}
          <button
            onClick={props.func}
            id={key}
            value={props.location[key]}
            // className = {'active'}
            className={props.giveClass && props.location[key].split("/")[2]}
          >
            {key.toLocaleUpperCase()}
          </button>
        </>
      ))}
    </>
  );
};

export { download,change, getImage, Btnmaker, Imagemaker, customizeImg };
