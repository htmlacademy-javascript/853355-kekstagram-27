

function getRandomInt(min, max) {
  if (isNaN(min) || isNaN(max)) {
    return 'NaN'
  }

  if (max <= min) {
    let swap = max;
    max = min;
    min = swap;

    console.log('Min and max were swapped. New min = ' + min + ' and new max = ' + max);
  }

  // https://www.w3schools.com/js/js_random.asp
  return Math.floor(Math.random() * (max - min)) + min;
}


function isInputLengthOk (input, maxLength) {
  if (input.length > maxLength) {
    console.log('The input is too long.')
    return false;
  }
  console.log('The input is ok.')
  return true;
}


