const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,2 4 7 12 9"
  var input_data = input.split(","); // ['5', '2 4 7 12 9']
  var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
  var arr = input_data[1].split(" "); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
  let max = 0;

  for (i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max);
  console.log(arr.indexOf(max) + 1);
});
