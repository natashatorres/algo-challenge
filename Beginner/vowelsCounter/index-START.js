/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

let vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
    let count = 0
    
    for(let i = 0; i < text.length; i++){
        if(vowels.includes(text[i])){
            count++
        }
    }
    return count
}



module.exports = vowelsCounter;
