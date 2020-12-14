/*
https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

6 kyu
Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

function solution(string) {
    const sliceIndices = [];
    string.split('').forEach((char,i) => {
      if(char.toUpperCase() === char) {
      sliceIndices.push(i);
    }});
    const results = [];
    for (let i=0; i<sliceIndices.length; i++) {
      if (i===0) {
        results.push(string.slice(i,sliceIndices[i]));
      } else {
        results.push(string.slice(sliceIndices[i-1], sliceIndices[i]));
      };
      if (i === sliceIndices.length - 1) {
        results.push(string.slice(sliceIndices[i]));
      };
    };
    return results.length ? results.join(' ') : string;
};
