/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  /**
   * Using union find algorithm
   */

  // init parents and set to self
  const par = [];
  for (let i = 0; i < isConnected.length; i++) {
    par.push(i);
  }
  // console.log('parent', par)

  // init ranks and set to 1
  const rank = new Array(isConnected.length).fill(1);
  // console.log('rank', rank)

  // find, returns the root of the tree where node is part of
  const find = (node) => {
    let res = node;
    // keep going up the tree till you reach the root
    // if res and its parent are the same then it is the root
    while (res != par[res]) {
      res = par[res];
    }
    return res;
  };

  // union, returns 0 for no union and 1 for succesful union
  const union = (n1, n2) => {
    // find roots
    const p1 = find(n1);
    const p2 = find(n2);

    // if same parents
    if (p1 === p2) return 0;

    // rank is used to keep the height of tree minimum
    if (rank[p1] > rank[p2]) {
      par[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      par[p1] = p2;
      rank[p2] += rank[p1];
    }
    return 1;
  };

  let output = isConnected.length;
  for (let node = 0; node < isConnected.length; node++) {
    for (let otherNode = 0; otherNode < isConnected[node].length; otherNode++) {
      if (isConnected[node][otherNode] === 1) {
        output -= union(node, otherNode);
      }
    }
  }

  return output;
};
