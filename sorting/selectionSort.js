function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap them minIndex and i in arr
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

function main() {
  const arr = [10, 5, 12, 1, 3]; // An example array to sort
  console.log('Original array:', arr);
  console.log('Sorted array:', selectionSort(arr));
}

main();
