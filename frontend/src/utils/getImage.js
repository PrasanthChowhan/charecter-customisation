// export const getImage = async (location, set) => {
//   console.log(location);
//   const sliced = location.split("/");
//   const log = await import(`../Assets/${sliced[2]}/${sliced[3]}`).then((img) => {
//     set(img.default);
//     console.log('inside import')
    
//   });
//   console.log('set')
//   console.log(log)
// };


//delete from heree
export const getImage = (location, callback) => {
  console.log(location);
  const sliced = location.split("/");
  const log =  import(`../Assets/${sliced[2]}/${sliced[3]}`).then((img) => {
    callback(img.default)
    console.log(callback)
    console.log('inside import')
    
  });
  console.log('set')
  console.log(log)
};



// 

