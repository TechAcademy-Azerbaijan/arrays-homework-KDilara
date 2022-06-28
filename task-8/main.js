const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,3 5 6 8 9"
  var input_data = input.split(","); // ['5', '3 5 6 8 9']
  var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
  var arr = input_data[1].split(" "); // Daxil edilmiş massiv. Nümunə - ['3', '5', '6', '8', '9']
  let max = 0;
  let x;
  let arr2 = [];
  for(i=0; i<arr.length; i++){
    if( arr[i]>max){
      max=arr[i]
    }else if(arr[i]===max){
       x = i
    }
  }
  temp = arr[x]
 arr[x]=arr[arr.length-1]
 arr[arr.length-1] = temp
console.log(arr)
});
