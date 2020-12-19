/*
https://www.codewars.com/kata/58e93b4706db4d24ee000096

7 kyu
How many days are we represented in a foreign country ?

How many days are we represented in a foreign country?

My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

Example:

daysRepresented ([[10,17],[200,207]])
Returns 16 because there are two trips of 8 days, which add up to 16.

Happy coding and rank this kata if you wish ;-)
*/

// NOT working for overlapping trips/days
function daysRepresented(trips) {
  return trips.reduce((accumulator, trip) => accumulator + trip[1] - trip[0] + 1, 0)
}
// NOT working for overlapping trips/days
function daysRepresented(trips) {
  const reducer = (accumulator, trip) => accumulator + trip[1] - trip[0] + 1
  return trips.reduce(reducer, 0)
}

function daysRepresented(trips) {
  const uniqueNums = new Set()
  
  const reducer = (accumulator, trip) => { const days = trip[1] - trip[0] + 1
    let overlap = 0
    for (let i=0; i<days; i++) {
      let preLength = uniqueNums.size
      uniqueNums.add(trip[0] + i)
      if (preLength === uniqueNums.size) {
        overlap++
      } 
    }
    const nonOverlapDays = days - overlap
    return accumulator + nonOverlapDays
  }
  return trips.reduce(reducer, 0)
}

function daysRepresented(trips) {
  const set = new Set()
  trips.map(([start, end]) => {
    for(let i=start; i<=end; i++) {
      set.add(i)
    }
  })
  return set.size
}




function daysRepresented(trips) {
  const mySet = new Set();
  trips.map(trip => {
    for(let i=trip[0]; i<=trip[1]; i++){
      mySet.add(i)
    }
  })
  return mySet.size
}