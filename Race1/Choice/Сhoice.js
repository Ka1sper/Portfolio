function sortArray() {
  let inputArray = document.getElementById("inputArray").value;
  let array = inputArray.trim().split(" ").map(Number);
  let cost = selectionSort(array);
  alert("Total cost: " + cost + " руб");
}

  let Access = 0;
  let Rearrangement = 0;
  let Comparison = 0;

function selectionSort(arr) {
  let len = arr.length;
  let cost = 0;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      Comparison += 2;
      if (arr[j] < arr[min]) {
        min = j;
      }
      Rearrangement += 2; 
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      Access += 4; 
    }
  }
  console.log("Перестановка: " + Rearrangement);
    console.log("Сравнение: " + Comparison);
  console.log("Доступ: " + Access);
   console.log(arr);
  cost = Rearrangement + Comparison + Access
  return cost;
}

