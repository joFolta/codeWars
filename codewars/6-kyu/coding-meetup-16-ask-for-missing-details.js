/* 
https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details

6 kyu
Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.
*/

function askForMissingDetails(list) {
  return list.map(dev => {
    const keys = Object.keys(dev)
    keys.forEach(key => {
      if(!dev[key]) {
        dev.question = `Hi, could you please provide your ${key}.`
      }
    })
    return dev
  })
  .filter(dev => dev.question)
}

function askForMissingDetails(list) {
  return list.map(dev => {
      for (const key in dev) {
        if (!dev[key]) {
          dev.question = `Hi, could you please provide your ${key}.`
        }
      }
      return dev
    })
    .filter(dev => dev.question)
}

// only one iteration through list (no map needed)
// this works b.c. only 1 null property is possible
// only return mutated devs to the filter that meet the condition
function askForMissingDetails(list) {
  return list.filter(dev => {
      for (const key in dev) {
        if (!dev[key]) {
          dev.question = `Hi, could you please provide your ${key}.`
          return dev
        }
      }
    })
}