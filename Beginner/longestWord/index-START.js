/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    var result = text.split(' ').reduce((longWord, currentWord) => {
        if (currentWord.length > longWord.length) {
            return currentWord
        } else {
            return longWord
        }
    })
    return result
}

module.exports = longestWord