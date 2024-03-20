import { cases } from "./tests";

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix01 = (strs) => {
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


/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix02 = (strs) => {
    return strs.reduce((a, b) => {
        var prefix = '';
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) prefix += a[i];
            else break;
        }
        return prefix;
    });
}

let longestCommonPrefix03 = (strs) => {
    for (let testCase of strs) {
        testCase = testCase.reduce((a, b) => {
            let prefix = ''
            for (var i = 0; i < a.length && i < b.length; i++) {
                if (a[i] === b[i]) prefix += a[i];
            }
            return prefix;
        });
        console.log(testCase);
    }
}