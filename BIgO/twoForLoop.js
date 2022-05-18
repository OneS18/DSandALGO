//Log all pairs of array

const boxes = ["a", "b", "c", "d", "e", "f"];

const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

logAllPairsOfArray(boxes); // O(n*2) - quadratic time
