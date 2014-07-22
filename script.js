// jquery for interactive

$('#rowNum').focus();

// Use the keyup method to update automatically
$('#rowNum').keyup(function() {
  var finalRowVal = $('textarea').val();
  // console.log(finalRowVal);

  // Now we have a variable that records the users input to how many stiches they are starting off on their first row
  // This is the first half of the calculation. We take the input and do basic arithmatic to find how many stiches
  // will be needed to finish the piece given a starting value by the user
  var totalStich = 0;
  var stichCount = finalRowVal;
  var finalStichCount = stichCount;
  while (stichCount > 0) {
    totalStich += (stichCount*2);
    // console.log(totalStich);
    stichCount -= 2;
  }

  // Let's save the total stich value so we can use it later
  var finalStichCount = finalRowVal;

  // Uncomment the below line for more detail behind the calculations
  // console.log('the final amount of stiches when the amount of rows is ' + finalStichCount + ' will be ' + totalStich);


  var i = finalRowVal;
  var answer = 0;
  var row = 1;
  var halfStich = totalStich/2;

  // This represents the second half of the equation. We take the previous calculation of total stiches
  // and use it to find the midpoint stich
  while (answer < halfStich) {
     answer += i*2;
     if (answer > halfStich) {
        break;
     }

     // console.log('you are on row: ' + row);
     // We can now calculate the row value where the midpoint exists
     row += 2;

     // Uncomment the below lines below to get more detail
     // console.log('the number of stitches on this line is ' + i);
     // console.log('the total number of stiches is: ' + answer);

     // Let's grab the values we calculated and give them to the user on the page
     $('#answerStich').text(totalStich);
     $('#stichNum').text(totalStich/2);
     $('#rowAnswer').text(row+1);

     // To go through all knitted rows, we decrease by two
     i -= 2;
  }

})