/*
https://www.codewars.com/kata/55c45be3b2079eccff00010f

6 kyu
Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// time complexity: O(n) - linear time - as input size grows, the sequential (non-nested) loops will take longer
// space complexity: O(n) - linear space - as input sie grows, the memory usage will increase linearly
function order(words) {
  if (words.length === 0) {
    return "";
  }

  const orderedWords = [];

  const sortedWords = words
    .split(" ")
    .map((word) => {
      return [word.match(/\d/)[0], word];
    })
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .forEach((indexWord) => {
      orderedWords.push(indexWord[1]);
    });

  return orderedWords.join(" ");
}

// better
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
