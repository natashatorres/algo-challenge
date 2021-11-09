/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(str)
    {
        let freq = {};
        for (let c of str.split('')) freq[c] = (freq[c] || 0) + 1;
        let max = Math.max(...Object.values(freq));
        let maxrecs = Object.entries(freq).filter(([_, v]) => v === max);
        return maxrecs.length > 1 ? '' : maxrecs[0][0];
    }



module.exports = maxRecurringChar;