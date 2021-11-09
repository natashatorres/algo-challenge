/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


function capSentence(text) {
  let lowerCaseArr = text.toLowerCase().split(' ')
  result = []
  lowerCaseArr.forEach(word => result.push(word[0].toUpperCase() + word.slice(1)))
  return result.join(' ')
}



module.exports = capSentence