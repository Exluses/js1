const _ = require("lodash");
const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
    return Math.sqrt(xs ** 2 + ys ** 2);
  };
// BEGIN
export const getTheNearestLocation = (locations, Point) => {
  if (locations.length === 0) 
  {
  return null;
  }
  let result = locations[0];
  let distance = 100;
  for (const item of locations) 
  {
  const [x1,y1] = item[1];
  const [x2,y2] = Point;
  console.log("getDistance", getDistance([x1, y1], [x2, y2]))
  if (getDistance([x1, y1], [x2, y2]) < distance) 
  {
  distance = getDistance([x1, y1], [x2, y2])
  result = item
  }
  }
  console.log(distance);
  console.log(result);
  return result
  };
// END
