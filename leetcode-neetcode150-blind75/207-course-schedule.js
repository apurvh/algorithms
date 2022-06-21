/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // create adjacency map
  const map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    // 0 - crs, 1 - pre
    const crs = prerequisites[i][0];
    const pre = prerequisites[i][1];
    map.set(crs, [...(map.get(crs) || []), pre]);
  }

  // dfs to detect cycle in the graph
  const visited = new Set();
  const hasCycleDFS = (curr) => {
    if (visited.has(curr)) return true;
    visited.add(curr);
    const children = map.get(curr);
    if (children) {
      for (let i = 0; i < children.length; i++) {
        // return true if we detect cycle
        if (hasCycleDFS(children[i])) return true;
      }
    }
    visited.delete(curr);
    // remove already visisted node
    map.delete(curr);
  };
  for (const [course, req] of map) {
    // console.log(course)
    if (hasCycleDFS(course)) return false;
  }
  return true;
};
