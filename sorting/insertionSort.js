function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i]; // Here curr is the value at the ith position
    let prev = i - 1; // Here prev is index of value i-1 not the element at that index
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr; // Insert at the correct position
  }
  return arr;
}

function main() {
  const arr = [10, 5, 12, 1, 3]; // An example array to sort
  console.log('Original array:', arr);
  console.log('Sorted array:', insertionSort(arr));
}

main();
