function sortArray() {
  let inputArray = document.getElementById("inputArray").value;
  let array = inputArray.trim().split(" ").map(Number);
  let cost = bubbleSort(array);
  alert("Total cost: " + cost + " руб");
}

let Access = 0;
let Rearrangement = 0;
let Comparison = 0;


function bubbleSort(arr) {
  let len = arr.length;
  let cost;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      Access += 2; 
      let arr1 = arr[j];
      let arr2 = arr[j + 1]
      if (arr1 > arr2) {
        let temp = arr1;
        arr1 = arr2;
        arr2 = temp;
        Rearrangement += 2; 
      }
      Comparison += 2; 
    }
  }
    console.log("Перестановка: " + Rearrangement);
    console.log("Сравнение: " + Comparison);
  console.log("Доступ: " + Access);
   console.log(arr);
  cost = Rearrangement + Comparison + Access
  return cost;
}
