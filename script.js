// jquery for interactive

$('#rowNum').focus();

// Use the keyup method to update automatically
$('#rowNum').keyup(function() {
  // Save the current textbox value
  var finalRowVal = $('textarea').val();
  // console.log(finalRowVal);

  // This is the first half of the calculation. We take the user's input and do basic arithmatic 
  // to find how many stitches will be needed to finish the piece
  var totalStitch = 0;
  var stitchCount = finalRowVal;
  var finalStitchCount = stitchCount;
  while (stitchCount > 0) {
    totalStitch += (stitchCount*2);
    // console.log(totalStitch);
    stitchCount -= 2;
  }

  // Let's get back the original stitch count value that we saved above in the variable finalRowVal
  var finalStitchCount = finalRowVal;

  // Uncomment the below line for more detail behind the calculations
  // console.log('the final amount of stitches when the amount of rows is ' + finalStitchCount + ' will be ' + totalStitch);


  var i = finalRowVal;
  var answer = 0;
  var currentRow = 1;
  var halfStitch = totalStitch/2;

  // This represents the second half of the equation. We take the previous calculation of total stitches
  // and use it to find the midpoint stitch
  while (answer < halfStitch) {
    // We need to multiple each each by 2, because it will be repeated twice
     answer += i*2;
     // To stop the loop going if the total amount of stitches has been passed we can check if we've already
     // reached the total amount of stitches theat we previously found
     if (answer > halfStitch) {
        break;
     }

     // console.log('you are on currentRow: ' + currentRow);
     // We can now calculate the row value where the midpoint exists
     currentRow += 2;

     // To go through all knitted rows, we decrease by two
     i -= 2;

     // Uncomment the below lines below to get more detail
     // console.log('the number of stitches on this line is ' + i);
     // console.log('the total number of stitches is: ' + answer);

     // Let's grab the values we calculated and give them to the user on the page
     $('#answerStitch').text(totalStitch);
     $('#stitchNum').text(totalStitch/2);
     $('#rowAnswer').text(currentRow+1);
  }

});