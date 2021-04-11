/* 
https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse

6 kyu
Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.
*/

function isAgeDiverse(list) {
  if (list.some(({age}) => 12<age && age<20)) {
    if (list.some(({ age }) => 19 < age && age < 30)) {
      if (list.some(({ age }) => 29 < age && age < 40)) {
        if (list.some(({ age }) => 39 < age && age < 50)) {
          if (list.some(({ age }) => 49 < age && age < 60)) {
            if (list.some(({ age }) => 59 < age && age < 70)) {
              if (list.some(({ age }) => 69 < age && age < 80)) {
                if (list.some(({ age }) => 79 < age && age < 90)) {
                  if (list.some(({ age }) => 89 < age && age < 100)) {
                    if (list.some(({ age }) => 100 <= age)) {
                      return true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  return false
}