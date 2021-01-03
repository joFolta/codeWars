/*
https://www.codewars.com/kata/589f8bb8423ac3576a00000b

7 kyu
A Letter from Your Niece

Your sweet 4 year old niece has sent you a letter, however she is a little bit of an odd ball, so it needs a bit of decoding. You see she seems to love dinosars and often throws "trex" and "raptor" in mid sentence when she gets excited, and is convinced all vowels should be replaced by numbers (a=0, e=1, i=2, o=3, u=4).

Your challenge is to figure out what she is trying to say and fix her grammar- HINT - All sentences begin with a capital le
*/

function nonsense(str) {
  const vowelMap = {
    0:'a',
    1:'e',
    2:'i',
    3:'o',
    4:'u'
  }
  
  str = str.toLowerCase()
  const arr = str.split('')

  for (const key in vowelMap) {
    for (let i=0; i<arr.length; i++) {
      if (arr[i] == key) {
        arr[i] = vowelMap[key]
      }
    }
  }
  
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == 'i' && arr[i+1] == ' ') {
      arr[i] = 'I'
    }
  }
  // NOTE: strings are immutable; so this doesnt work ... str[0] = str[0].toUpperCase()
  arr[0] = arr[0].toUpperCase()
  if (arr[arr.length-1] != '.') arr.push('.')
  const joined = arr.join('');
  const deRaptored = joined.replace(/raptor/g,'')
  const deTRexed = deRaptored.replace(/trex/g,'')
  return deTRexed
}






function nonsense(str) {
  const vowelMap = {
    0:'a',
    1:'e',
    2:'i',
    3:'o',
    4:'u'
  }
  
  str = str.toLowerCase()
  return str.split('')
    .map(char => vowelMap[char] || char)
    .join('')
    .replace(/^.|i /g, x => x.toUpperCase())
    .replace(/raptor|trex/g,'')
    + (str.slice(-1) == '.' ? '' : '.')
}