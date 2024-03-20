function sortArray() {
  let inputArray = document.getElementById("inputArray").value;
  let array = inputArray.split(" ").map(Number);
  let cost = insertionSort(array);
  alert("Total cost: " + cost + " руб");
}

let Access = 0;
let Rearrangement = 0;
let Comparison = 0;

function insertionSort(arr) {
  let len = arr.length;
  let cost = 0;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      Access += 4; 
      Rearrangement += 2; 
      Comparison += 2; 
    }
    arr[j + 1] = key;
    Access += 2;
    Rearrangement += 2; 
  }
  console.log("Перестановка: " + Rearrangement);
  console.log("Сравнение: " + Comparison);
    console.log("Доступ: " + Access);
    console.log(arr);
  cost = Rearrangement + Comparison + Access;
  return cost;
}
