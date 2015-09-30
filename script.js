// inputValue is the value in the input field
// totalStitch calculates the total amount of stitches to complete the square
// stitchCount helps count down the stitches left
// answer helps us know when we've hit our row limit
// currentRow is the currentRow in the calculation
// halfStitch is the halfway point in the calculation

function valueKeyPress(){
  var inputBox = document.getElementById('rowNum');
  var inputValue = inputBox.value;
  var answerBox = document.getElementById('answerStitch');
  var stitchBox = document.getElementById('stitchNum');
  var rowBox = document.getElementById('rowAnswer');

  var totalStitch = 0;
  var stitchCount = inputValue;

  while (stitchCount > 0) {
    totalStitch += (stitchCount * 2);
    stitchCount -= 2;
  }

  var i = inputValue;
  var answer = 0;
  var currentRow = 1;
  var halfStitch = totalStitch/2;

  while (answer < halfStitch) {
    answer += i*2;
    if (answer > halfStitch) {
      break;
    }
    currentRow += 2;
    i -= 2;

    answerBox.innerHTML = totalStitch;
    stitchBox.innerHTML = totalStitch/2;
    rowBox.innerHTML = currentRow+1;
  }

}