/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let chunkedArr = []
    for(let i = 0; i < array.length; i+= size){
        let chunk = array.slice(i, i+ size)
        chunkedArr.push(chunk)
    }

    return chunkedArr

}


module.exports = chunkArray