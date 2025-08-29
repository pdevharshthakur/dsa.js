# Bubble Sort

## Algorithm

Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

## How It Works

1. Compare adjacent elements
2. Swap if they are in wrong order
3. Repeat until no swaps needed

**Example**: `[10, 5, 12, 1, 3]` → `[1, 3, 5, 10, 12]`

## Time Complexity

- **Best Case**: O(n) - Already sorted
- **Average Case**: O(n²) - Random data
- **Worst Case**: O(n²) - Reverse sorted

## Space Complexity

- **O(1)** - In-place sorting, constant extra space
