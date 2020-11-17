/*
https://www.codewars.com/kata/55d1d6d5955ec6365400006d/javascript

7 kyu
Round up to the next multiple of 5

Given an integer as input, can you round it to the next(meaning, "higher") multiple of 5 ?

  Examples :

  input: output:
  0 - > 0
  2 - > 5
  3 - > 5
  12 - > 15
  21 - > 25
  30 - > 30 -
  2 - > 0 -
  5 - > -5
  etc.
Input may be any positive or negative integer(including 0).

You can assume that all inputs are valid integers.

*/

// recursion
function roundToNext5(n) {
  return n % 5 === 0 ? n : 
    roundToNext5(n+1);
};

function roundToNext5(n) {
  if(n % 5 === 0) {
    return n;
  } else {
    return roundToNext5(n + 1);
  };
};

function roundToNext5(n) {
  let incrementableN = n;
  if (incrementableN % 5 === 0) {
    return incrementableN;
  } else {
    while(incrementableN % 5 !== 0) {
      incrementableN++;
    }
    return incrementableN;
  };
};

function roundToNext5(n) {
  let incrementableN = n;
  while (true) {
    if(incrementableN % 5 === 0){
      return incrementableN;
    };
    incrementableN++;
  };
};