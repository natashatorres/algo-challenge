/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
  let str = text.toLowerCase()
  return str === str.split('').reverse().join('')
}


//is it case sensitive, its safe to assume we'd always get a string// do this without using built in js methods
//manipulate strings with objects



module.exports = palindromeChecker;