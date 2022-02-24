export const getImage = (location, set) => {
  const sliced = location.split("/");
  import(`../Assets/${sliced[2]}/${sliced[3]}`).then((img) => {set = img.default
  console.log(set)});
};
