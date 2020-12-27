function reverseInt(int){
  return Number(int.toString().split('').reverse().join(''))
}

function reverseInt(int) {
  return parseInt(int.toString().split('').reverse().join(''))
}

reverseInt(521)