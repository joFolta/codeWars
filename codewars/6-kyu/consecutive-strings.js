/*
https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

6 kyu
Consecutive strings

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return '';
  };
  // filter b4 map to prevent undefined elements
  const combos = strarr.filter((str, i) => i + k <= n).map((str, i) => {
      let comboVal = str;
      for (let j = 1; j < k; j++) {
        comboVal += strarr[i + j];
      };
      return [comboVal, i];
  });
  // sort descending
  combos.sort((a, b) => b[0].length - a[0].length);
  // if equal length, choose earliest combo
  let earliestTuple = combos[0];
  for (let c=0; c<combos.length; c++) {
    if (combos[c][0].length === earliestTuple[0].length && combos[c][1] < earliestTuple[1]) {
      earliestTuple = combos[c]
    };
  };
  return earliestTuple[0];
};

// clean answer from another user
function longestConsec(strarr, k) {
  if (k <= 0) {return ''}
  
  let max = ''
  
  for (let i=0; i<strarr.length-k+1; i++) {
    const str = strarr.slice(i,i+k).join('')
    if (max.length < str.length) {max = str}
  }
  return max
}