# Blog Notes: Merge Sort

## Pseudocode
ALGORITHM Mergesort(arr)<br>
    DECLARE n <-- arr.length<br>
<br>
    if n > 1<br>
      DECLARE mid <-- n/2<br>
      DECLARE left <-- arr[0...mid]<br>
      DECLARE right <-- arr[mid...n]<br>
      // sort the left side<br>
      Mergesort(left)<br>
      // sort the right side<br>
      Mergesort(right)<br>
      // merge the sorted left and right sides together<br>
      Merge(left, right, arr)<br>
<br>
ALGORITHM Merge(left, right, arr)<br>
    DECLARE i <-- 0<br>
    DECLARE j <-- 0<br>
    DECLARE k <-- 0<br>
<br>
    while i < left.length && j < right.length<br>
        if left[i] <= right[j]<br>
            arr[k] <-- left[i]<br>
            i <-- i + 1<br>
        else<br>
            arr[k] <-- right[j]<br>
            j <-- j + 1<br>
<br>
        k <-- k + 1<br>
<br>
    if i = left.length<br>
       set remaining entries in arr to remaining values in right<br>
    else<br>
       set remaining entries in arr to remaining values in left<br>

## Explanation
The mergeSort algorithm takes an array arr as input. It first calculates the length of the array n.

If the length n is greater than 1, the algorithm proceeds with the sorting process. It divides the array into two halves, left and right, by calculating the middle index.

The mergeSort function is then recursively called on both the left and right halves of the array.

Once the recursion is complete, the algorithm merges the sorted left and right halves back into the original arr array.

The merging process is done by comparing the elements from both halves and placing them in the correct order in the arr array.

Finally, the sorted arr array is returned as the result of the mergeSort algorithm.

## Efficiency
Time: O(log n)
Space: O(n)
