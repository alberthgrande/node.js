// console.log(`V8 version: ${process.versions.v8}`);
const v8 = require("v8");

const heapStats = v8.getHeapStatistics();

console.log(
  "Heap size limit: ",
  (heapStats.heap_size_limit / 1024 / 1024).toFixed(2),
  "MB"
);
console.log(
  "Total heap size: ",
  (heapStats.total_heap_size / 1024 / 1024).toFixed(2),
  "MB"
);
console.log(
  "Use heap size: ",
  (heapStats.used_heap_size / 1024 / 1024).toFixed(2),
  "MB"
);
