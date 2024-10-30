const arr = [15, 13, 6, 1, 5, 10];
function largestElement() {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    console.log("index", i, arr[i]);
    if (arr[i] > maxElement) {
      console.log(i, arr[i], { maxElement });
      maxElement = arr[i];
      console.log("maxElement", maxElement);
    }
  }
  console.log("maxElement", maxElement);
}
largestElement();
