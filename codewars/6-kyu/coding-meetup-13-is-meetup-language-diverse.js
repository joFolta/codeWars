/* 
https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse

6 kyu
Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.
*/

function isLanguageDiverse(list) {
  const langs = ['Python', 'Ruby', 'JavaScript']
  const counts = langs.map(lang => {
    const compares = list.map(dev => dev.language === lang)
    return compares.filter(Boolean).length
  })
  const max = Math.max(...counts)
  const min = Math.min(...counts)
  return !(max / min > 2)
}

function isLanguageDiverse(list) {
  const langs = ['Python', 'Ruby', 'JavaScript']
  const pCount = list.filter(dev => dev.language === langs[0]).length
  const rCount = list.filter(dev => dev.language === langs[1]).length
  const jCount = list.filter(dev => dev.language === langs[2]).length
  const max = Math.max(pCount, rCount, jCount)
  const min = Math.min(pCount, rCount, jCount)
  return !(max / min > 2)
}

function isLanguageDiverse(list) {
  const langs = ['Python', 'Ruby', 'JavaScript']
  function getCount(lang) {
    return list.filter(dev => dev.language === lang).length
  }
  const counts = []
  langs.forEach(lang => {
    counts.push(getCount(lang))
  })
  const max = Math.max(...counts)
  const min = Math.min(...counts)
  return !(max / min > 2)
}