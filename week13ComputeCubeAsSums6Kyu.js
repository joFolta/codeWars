// Mathematically:
// cube = n ** 3
// sum = a1 + a2 + a3 + ..... + an
// sum == cube
// a2 == a1 + 2, a3 == a2 + 2, .......
//
// For example:
//
// findSummands(3) = [7,9,11] // because 7 + 9 + 11 = 27, the cube of 3. Note that there are only n = 3 elements in the array.
// Write function findSummands(n) which will return an array of n consecutive odd numbers with the sum equal to the cube of n (n*n*n).
//
// PUZZLES ARITHMETIC MATHEMATICS ALGORITHMS NUMBERS

//MY SOLUTION


function findSummands(n){
  let nCube = n*n*n
  let result = []
  let odd = 0
  for(let i=1; i<nCube; i+=2){
    odd = i
    for(let j=1; j<n; j++){
      odd += 2
    }
    if(odd + odd-2 + odd-2-2 === nCube){
      result.push(i)
      for(let k=1; k<n; k++){
        i += 2
        result.push(i)
      }
      return result
    }
  }
  return [1,2,3,4,5]
}


function findSummands(n){
  let nCube = n*n*n
  console.log("nCube",nCube);
  let result = []
  let odd = 0
  for(let i=1; i<nCube; i+=2){
    odd = i
    console.log(odd,"odd = i");
    for(let j=1; j<n; j++){
      odd += 2
      console.log("new odd",odd);
    }
    if(odd + odd-2 + odd-2-2 === nCube){
      console.log("odd + odd-2 + odd-2-2", odd + odd-2 + odd-2-2);
      result.push(i)
      for(let k=1; k<n; k++){
        i += 2
        result.push(i)
      }
      return result
    }
  }
}

findSummands(3)

// PARTIAL SOLUTION
//(assumes 3 elements in array; only works for n=3)
//(improved answer needs to work for any N with N elements in array)
function findSummands(n){
  let nCube = n*n*n
  let result = []
  for(let i=1; i<nCube; i+=2){
    if(i+ i+2+ i+4 === nCube){
      result.push(i)
      result.push(i+2)
      result.push(i+4)
      return result
    }
  }
}

//MY TESTS
findSummands(3)
//[7, 9, 11]
findSummands(9)
// [229, 231, 233, 235, 237, 239, 241, 243, 245]
findSummands(15)
// [1099, 1101, 1103, 1105, 1107, 1109, 1111, 1113, 1115, 1117, 1119, 1121, 1123, 1125, 1127]

//SAMPLE TESTS
// Test.assertEquals(findSummands(1).length, 1, 'Incorrect length for n = 1');
// Test.assertEquals(findSummands(1).reduce((a,c)=>a+c,0), 1, 'Incorrect sum for n = 1');
//
// Test.assertEquals(findSummands(3).length, 3, 'Incorrect length for n = 1');
// Test.assertEquals(findSummands(3).reduce((a,c)=>a+c,0), 27, 'Incorrect sum for n = 1');
// Test.expect(findSummands(3).every((a)=>a%2 == 1), 'all summands have to be odd');
//
// write your own tests here ...
