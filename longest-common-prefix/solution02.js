var testCases = [
    ["flower","flow","flight"],
    ["dog","racecar","car"],
    ["doggo","dogged","doglegged", "dog"]
];

var failedCase = ["cir","car"];

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((a, b) => {
        var prefix = '';
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) prefix += a[i];
            else break;
        }
        return prefix;
    });
}

var failureOfAMan = longestCommonPrefix(failedCase);
console.log(failureOfAMan);