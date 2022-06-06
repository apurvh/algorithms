/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0;

  // make a copy of grid, (not required)
  const map = [...grid];
  // console.log(map)

  if (map.length < 1) return result;

  // submerge the land at this location(lat, long) and
  // land surrounding the location recursively
  const sinkLand = (lat, long) => {
    //  console.log('sinking: ' +lat+'-'+long)
    map[lat][long] = 0;
    if (lat + 1 < map.length)
      if (map[lat + 1][long] === '1') sinkLand(lat + 1, long);
    if (lat - 1 >= 0) if (map[lat - 1][long] === '1') sinkLand(lat - 1, long);
    if (long + 1 < map[0].length)
      if (map[lat][long + 1] === '1') sinkLand(lat, long + 1);
    if (long - 1 >= 0) if (map[lat][long - 1] === '1') sinkLand(lat, long - 1);
  };

  // go over the map, if island detected, add it to the count and
  // sink everything surrounding that island
  for (let lat = 0; lat < map.length; lat++) {
    for (let long = 0; long < map[lat].length; long++) {
      if (map[lat][long] === '1') {
        sinkLand(lat, long);
        result++;
        // console.log('island found: '+result)
      }
    }
  }

  return result;
};
