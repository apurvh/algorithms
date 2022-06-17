/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const queue = []; // track cooldown tasks [tasks left, cooldown end time]
  let heap = []; // stores count of tasks as we process them
  const taskCount = {};

  // heapify helper -- TODO implement in-place heapify
  const heapify = (heap) => {
    heap.sort((a, b) => b - a);
    return heap;
  };

  // tasks counter
  for (const task of tasks) {
    taskCount[task] = (taskCount[task] || 0) + 1;
  }
  // make heap out of tasks
  heap = [...Object.values(taskCount)];

  // heapify heap
  heapify(heap);

  // while we have tasks in heap or in queue,
  // keep executing them
  let time = 0;

  while (heap.length > 0 || queue.length > 0) {
    time++;

    // if heap has tasks left
    if (heap.length > 0) {
      // execute the top task
      const taskOfTypeLeft = heap.shift() - 1;
      // push the task in queue for cooldown period
      if (taskOfTypeLeft > 0) queue.push([taskOfTypeLeft, time + n]);
    }

    // if queue has tasks left and
    // top task if due
    if (queue.length > 0) {
      if (queue[0][1] === time) {
        // re-add the task in heap
        const task = queue.shift()[0];
        heap.push(task);
        heapify(heap);
      }
    }
    // console.log(time, heap, queue)
  }
  return time;
};
