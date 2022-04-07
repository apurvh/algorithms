class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const A = new Node("A");

const B = new Node("B");
const C = new Node("C");

const D = new Node("D");
const E = new Node("E");
const F = new Node("F");


A.left = B
A.right = C

B.left = D
B.right = E

C.right = F


const stack = [A];
const values = [];


while (stack.length != 0){
    // console.log("iteration started..");
    const current = stack.pop();
    // console.log("current:",current.value);

    if(current)values.push(current);

    if(current.right)stack.push(current.right);
    if(current.left)stack.push(current.left);
}

console.log("dps using iterative method")
for(value of values){
    console.log(value.value);
}

// writing with recursion

const valuesRecursion = []

function dpsRecursion(node){
    // console.log("node:",node.value)
    if(node) valuesRecursion.push(node);
    if(node.left) dpsRecursion(node.left);
    if(node.right) dpsRecursion(node.right);
}

dpsRecursion(A);

console.log("dps using recursive method")
for(value of valuesRecursion){
    console.log(value.value);
}

