/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const map = new Map(); // map of a course and which courses is it prereq of

  // get the map
  for (const pair of prerequisites) {
    const course = pair[0];
    const prereq = pair[1];
    map.set(prereq, [...(map.get(prereq) || []), course]);
  }

  // console.log(map)

  let visited = new Set();
  let output = true;

  // dfs visit nodes and detect cycle with the help of visited
  const dfs = (curr) => {
    // console.log(curr, visited)
    if (visited.has(curr)) {
      output = false;
      return;
    }

    visited.add(curr);

    const courses = map.get(curr);
    if (courses) {
      for (const course of courses) {
        dfs(course);
      }
    }
    visited.delete(curr);
    map.set(curr, []);
  };

  for (const [key, val] of map) {
    dfs(key);
    // visited = new Set()
  }

  return output;
};
