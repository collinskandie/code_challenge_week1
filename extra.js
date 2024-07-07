class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  // Method to calculate volume
  volume() {
    const pi = Math.PI;
    return (pi * this.radius * this.radius * this.height).toFixed(4);
  }
}

// Example usage:
const cylinder = new Cylinder(3, 5); // Radius = 3, Height = 5
console.log("Volume of Cylinder:", cylinder.volume()); // Output: Volume of Cylinder: 141.3717
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

// Examples:
console.log("Steps(2):");
steps(2);
console.log("\nSteps(3):");
steps(3);
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
const inputArray = [5, 6, 1, 3, 4, 2];
const sortedArray = bubbleSort(inputArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]
