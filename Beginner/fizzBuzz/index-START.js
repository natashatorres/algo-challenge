/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/


function fizzBuzz(n) {
    for (let i = 0; i < n;)
        console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
}

module.exports = fizzBuzz