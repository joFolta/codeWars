/*
https://www.codewars.com/kata/571d42206414b103dc0006a1

8 kyu
Filling an array(part 1)

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
*/

const arr = N => {
  const array = []
  for (let i=0; i<N; i++) {
    array.push(i)
  }
  return array
};

// attempted recursive soln; in progress
const array = []
const arr = N => {
  console.log(N)
  if (N < 1 || typeof N != 'number') {
    console.log(true, array)
    return array
  } else {
    array.unshift(N - 1)
    console.log('array', array)
    arr(N - 1)
  }
}