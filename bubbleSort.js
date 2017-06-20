var pry = require('pryjs');

function bubbleSort(array){
  var swap = true;

  do {
    swap = false;
    for (var i=0; i < array.length-1; i++){
      if (array[i] > array[i+1]){
        var bubble = array[i];
        array[i] = array[i+1];
        array[i + 1] = bubble;
        swap = true;
      }
    }
  }
  while (swap);
}

var myArray = ["d", "b", "c", "a"];
var myLongerArray = [89, 34, 5, 12, 6, 8, 3, 1, 900, 17, 44, 78, 234];
bubbleSort(myArray);
console.log(myArray);
bubbleSort(myLongerArray);
console.log(myLongerArray);
