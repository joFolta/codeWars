/*
https://www.codewars.com/kata/588fe9eaadbbfb44b70001fc

7 kyu
Zalgo text reader

Zalgo text is text that leaks into our plane of existence from a corrupted dimension of Unicode. For example:


H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓

Complete the function that converts a string of Zalgo text into a string interpretable by our mortal eyes. For example, the string above would be converted into:

Have a great day!
The converted string should only feature ASCII characters.
*/

// https://stackoverflow.com/a/20856346
function readZalgo(zalgotext) {
  // ^ inside [] means "not"
  // replacing with empty string
  return zalgotext.replace(/[^\x00-\x7F]/g, "")
}

function readZalgo(zalgotext) {
  return zalgotext.replace(/[^A-Za-z0-9.,!? ]/g, "")
}