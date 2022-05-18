const fish = ["dory", "bruce", "marlin", "nemo"];
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(1000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(large); //O(n) --> Linear Time

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTWoBoxes(boxes) {
  console.log(boxes[0]); //O(1)  CONSTANT TIME
  console.log(boxes[1]); //O(1)  CONSTANT TIME
}

logFirstTWoBoxes(boxes); //O(2) and reamins a flat line
