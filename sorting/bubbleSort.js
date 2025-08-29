// This function sorts in ascending order
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Swap the two elements in the array
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function main() {
  const arr = [10, 5, 12, 1, 3]; // An example array to sort
  console.log('Original array:', arr);
  console.log('Sorted array:', bubbleSort(arr));
}

main();
