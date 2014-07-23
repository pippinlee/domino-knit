// jquery for interactive

$('#rowNum').focus();

// Use the keyup method to update automatically
$('#rowNum').keyup(function() {
  // Save the current textbox value
  var finalRowVal = $('textarea').val();
  // console.log(finalRowVal);

  // This is the first half of the calculation. We take the user's input and do basic arithmatic 
  // to find how many stiches will be needed to finish the piece
  var totalStich = 0;
  var stichCount = finalRowVal;
  var finalStichCount = stichCount;
  while (stichCount > 0) {
    totalStich += (stichCount*2);
    // console.log(totalStich);
    stichCount -= 2;
  }

  // Let's get back the original stich count value that we saved above in the variable finalRowVal
  var finalStichCount = finalRowVal;

  // Uncomment the below line for more detail behind the calculations
  // console.log('the final amount of stiches when the amount of rows is ' + finalStichCount + ' will be ' + totalStich);


  var i = finalRowVal;
  var answer = 0;
  var currentRow = 1;
  var halfStich = totalStich/2;

  // This represents the second half of the equation. We take the previous calculation of total stiches
  // and use it to find the midpoint stich
  while (answer < halfStich) {
    // We need to multiple each each by 2, because it will be repeated twice
     answer += i*2;
     // To stop the loop going if the total amount of stiches has been passed we can check if we've already
     // reached the total amount of stiches theat we previously found
     if (answer > halfStich) {
        break;
     }

     // console.log('you are on currentRow: ' + currentRow);
     // We can now calculate the row value where the midpoint exists
     currentRow += 2;

     // To go through all knitted rows, we decrease by two
     i -= 2;

     // Uncomment the below lines below to get more detail
     // console.log('the number of stitches on this line is ' + i);
     // console.log('the total number of stiches is: ' + answer);

     // Let's grab the values we calculated and give them to the user on the page
     $('#answerStich').text(totalStich);
     $('#stichNum').text(totalStich/2);
     $('#rowAnswer').text(currentRow+1);
  }

});