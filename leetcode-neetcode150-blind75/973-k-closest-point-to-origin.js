/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const dist = (point) => {
    if (point) return point[0] ** 2 + point[1] ** 2;
    else return undefined;
  };

  // create a minheap in place
  for (let i = 0; i < points.length; i++) {
    let curr = i;
    let parent = Math.floor((i - 1) / 2);

    // check if curr is smaller than parent, swap
    while (dist(points[curr]) < dist(points[parent])) {
      //swap
      [points[curr], points[parent]] = [points[parent], points[curr]];

      // reset
      curr = parent;
      parent = Math.floor((curr - 1) / 2);
    }
  }
  // console.log(points)

  const distances = [];
  for (const point of points) {
    distances.push(dist(point));
  }
  // console.log(distances)

  // extract k points from minheap in place
  for (let i = 0; i < k; i++) {
    // since we are storing the extracted points at the end of
    // array; we need to be mindful of valid heap
    let sizeOfHeapArr = points.length - i;

    [points[sizeOfHeapArr - 1], points[0]] = [
      points[0],
      points[sizeOfHeapArr - 1],
    ];

    // array size is reduced by one, as the smallest element is extracted
    // and stored in the end of points array
    sizeOfHeapArr = sizeOfHeapArr - 1;

    // find the right place for the new root
    let curr = 0;
    let left = 2 * curr + 1;
    let right = 2 * curr + 2;

    // min val
    let min;
    if (sizeOfHeapArr < 2) min = null;
    else if (sizeOfHeapArr === 2) min = left;
    else {
      min = dist(points[left]) < dist(points[right]) ? left : right;
    }

    while (dist(points[curr]) > dist(points[min])) {
      //swap
      [points[curr], points[min]] = [points[min], points[curr]];

      curr = min;
      left = 2 * curr + 1;
      right = 2 * curr + 2;

      // valid array is points array minus extracted points
      if (left > sizeOfHeapArr - 1) min = null;
      else if (right > sizeOfHeapArr - 1) min = left;
      else {
        min = dist(points[left]) < dist(points[right]) ? left : right;
      }
    }
  }

  // console.log(points)
  return points.slice(points.length - k, points.length);
};
