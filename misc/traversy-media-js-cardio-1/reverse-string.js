/*
https://youtu.be/M2bJBuaOeOQ
*/

function reverseString(str) {
  return str
          .split('')
          .reverse()
          .join('')
}

function reverseString(str) {
  const split = []
  for(let i=0; i<str.length; i++) {
    split.push(str[i])
  }
  
  const reverse = []
  for(let i=0; i<split.length; i++){
    reverse.push(split[split.length -1 -i])
  }
  
  let join = ''
  for(let i=0; i<reverse.length; i++){
    join += reverse[i]
  }
  return join
}

function reverseString(str) {
  let revString = ''
  for(let i=str.length - 1; i>=0; i--) {
    revString += str[i]
  }
  return revString
}

function reverseString(str) {
  let revString = ''
  for(let i=0; i<str.length; i++){
    revString = str[i] + revString
  }
  return revString
}

function reverseString(str) {
  return str.split('').reduce((acc,char) => char + acc, '')
}

reverseString("hello")

