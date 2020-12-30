function maxCharacter(str){
  const sortedChars = str.split('').sort()
  let repeatingChar = ''
  let repeatingCharCount = 0
  let nextRepeatingChar = ''
  let nextRepeatingCharCount = 0
  let lastChar = ''
  for(let i=0;i<sortedChars.length;i++){
    if(sortedChars[i] == lastChar){
      if(sortedChars[i] == repeatingChar){
        
      }
      repeatingChar = sortedChars[i]
      repeatingCharCount++
    }
    lastChar = sortedChars[i]
  }
}

maxCharacter('javascript')