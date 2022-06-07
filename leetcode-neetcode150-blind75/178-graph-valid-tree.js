export class Solution {
  /**
   * @param n: An integer
   * @param edges: a list of undirected edges
   * @return: true if it's a valid tree, or false
   */
  validTree(n, edges) {
    // create adjacency list from edges
    // as graph is undirected, we need to create adjancency list for both nodes
    const adj = new Map();
    for (const [n1, n2] of edges) {
      adj.set(n1, [...(adj.get(n1) || []), n2]);
      adj.set(n2, [...(adj.get(n2) || []), n1]);
    }

    const visited = new Set();

    // dfs visit nodes and detect cycle with the help of visited
    // [!!] following code is untested
    const dfs = (curr) => {
      if (adj.get(curr)) {
        for (const n of adj.get(curr)) {
          if (visited.has(n)) {
            return false;
          }
          visited.add(n);
          dfs(n);
        }
      }
    };

    // visited.size = n checks for connected components
    // if n is not equal to visited.size, then there is a cycle
    return (visited.size = n && dfs(0));
  }
}
