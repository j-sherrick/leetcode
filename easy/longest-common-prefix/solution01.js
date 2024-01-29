var testCases = [
    ["flower","flow","flight"],
    ["dog","racecar","car"],
    ["doggo","dogged","doglegged", "dog"]
];

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var commonPrefix = '';
    var currentChar = '';
    var hasCommonChar = true;
    var isInBounds = true;

    for (var charIndex = 0; charIndex < strs[0].length && isInBounds; charIndex++) {

        currentChar = strs[0][charIndex];

        for (var i = 1; i < strs.length && isInBounds && hasCommonChar; i++) {
            if (strs[i].length > charIndex) {
                hasCommonChar = (strs[i][charIndex] === currentChar)
            }
            else {
                isInBounds = false;
            }
        }

        if (hasCommonChar && isInBounds) commonPrefix += currentChar;
    }
    return commonPrefix;
};

var prefixReducer = function(a, b) {
    let prefix = ''
    for (var i = 0; i < a.length && i < b.length; i++) {
        if (a[i] === b[i]) prefix += a[i];
    }
    return prefix;
}

for (let testCase of testCases) {
    testCase = testCase.reduce(prefixReducer);
    console.log(testCase);
}