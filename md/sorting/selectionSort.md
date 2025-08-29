# Selection Sort

## Algorithm

Selection sort repeatedly finds the minimum element from the unsorted portion and places it at the beginning.

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
```

## How It Works

1. Find minimum element in unsorted portion
2. Swap with first element of unsorted portion
3. Move boundary between sorted and unsorted portions
4. Repeat until array is sorted

**Example**: `[10, 5, 12, 1, 3]` → `[1, 3, 5, 10, 12]`

## Time Complexity

- **Best Case**: O(n²) - Always performs same comparisons
- **Average Case**: O(n²) - Consistent performance
- **Worst Case**: O(n²) - Same as best case

## Space Complexity

- **O(1)** - In-place sorting, constant extra space
