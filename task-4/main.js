const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,3 5 6 8 9"
  var input_data = input.split(","); // ['5', '3 5 6 8 9']
  var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
  var arr = input_data[1].split(" "); // Daxil edilmiş massiv. Nümunə - ['3', '5', '6', '8', '9']
  let max;
let arr2=[]
  for(i=1; i<arr.length; i++){
  if(arr[i]>arr[i-1] ){
    max=arr[i];
     arr2.push(max)
  }else{
    arr2.push(arr[i-1])
  }

  }
  for(i=1; i<arr2.length; i++){ 
  if(arr2[i] == arr2[i-1])
  arr2.splice(i,1)
  }
console.log(arr2)
});
