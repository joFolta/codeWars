/* 
https://www.codewars.com/kata/5266876b8f4bf2da9b000362

6 kyu
Who likes it ?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
*/

function likes(names) {
  const l = names.length
  let first = `${names[0]}, ${names[1]} and ${l-2} others`
  if (l === 0) {
    first = 'no one'
  } else if (l === 1) {
    first = names[0]
  } else if (l === 2) {
    first = `${names[0]} and ${names[1]}`
  } else if (l === 3) {
    first = `${names[0]}, ${names[1]} and ${names[2]}`
  }
  const second = l<2 ? 'likes' : 'like'
  return `${first} ${second} this`
}