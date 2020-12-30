/*
https://www.codewars.com/kata/56576f82ab83ee8268000059

7 kyu
Running out of space

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
*/

function spacey(array) {
  return array.map((word,i) => {
    for(let j=i; j>=0; j--) {
      if(j==0) return word
      word = array[j-1] + word
    }
  })
}