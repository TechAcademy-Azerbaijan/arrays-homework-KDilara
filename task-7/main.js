const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,3 5 6 8 9"
  var input_data = input.split(","); // ['5', '3 5 6 8 9']
  var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
  var arr = input_data[1].split(" "); // Daxil edilmiş massiv. Nümunə - ['3', '5', '6', '8', '9']
  let arr2=[];
  const last = arr[arr.length-1];
  let min = 100;
  let arr2 = [];
  for(i=0; i<arr.length; i++){
    if( arr[i]<min){
      min=arr[i]
    }
  }
  temp = arr[arr.indexOf(min)]
 arr[arr.indexOf(min)]=arr[0]
 arr[0] = temp
console.log(arr)
});
