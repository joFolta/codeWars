/* 
https://www.codewars.com/kata/56541980fa08ab47a0000040/javascript

7 kyu
Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"

*/

function printerError(s) {
  let errors = 0;
  const regex = /[a-m]/;
  for(let i = 0; i < s.length; i++) {
    if(!regex.test(s[i])) {
      errors++;
    }
  }
  return `${errors}/${s.length}`
}

function printerError(s) {
  let alloweds = "abcdefghijklm";
  alloweds = alloweds.split("");
  let errors = 0;
  let match;
  for (let i = 0; i < s.length; i++) {
    match = false;
    for (let j = 0; j < alloweds.length; j++) {
      if (s[i] === alloweds[j]) {
        match = true;
      }
    }
    if(!match) {
      errors++;
    }
  }
  return `${errors}/${s.length}`
}