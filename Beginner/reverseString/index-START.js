/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    let array = [];
    for (let i=0; i<text.length; i++){
        array.unshift(text[i])
    }
    return array.join('');
}



module.exports = reverseString