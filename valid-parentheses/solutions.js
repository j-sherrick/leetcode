import { testCases } from "./tests.js";

/**
 * Jason Sherrick
 * 
 * Solution to 'Valid Parentheses' easy LeetCode challenge.
 * 
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const parens = '()[]{}';

    let stack = [];
    let i = 0;
    for (const ch of s) {
        if ((parens.indexOf(ch) % 2) === 0) {
            stack.push(ch);Som
            i++;
        }
        else {
            let peek = stack[i - 1];
            if (parens.indexOf(peek) === (parens.indexOf(ch) - 1)) {
                stack.pop();
                i--;
            }
            else {
                return false;
            }
        }
    }
    return (true && s.length > 1);
};

/**
 * Sample code for top percentile solution (runtime 31ms)
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValidFast = function(s) {

    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '['){
            stack.push(s.charAt(i));
        }
        else if(s.charAt(i) === ')' || s.charAt(i) === '}' || s.charAt(i) === ']'){
            if(stack.length === 0) return false;

            let pop_val = stack.pop()
            if(s.charAt(i) === ')' && pop_val !== '(' ||
               s.charAt(i) === '}' && pop_val !== '{' ||
               s.charAt(i) === ']' && pop_val !== '[' ){
                return false;
            }
        }
    }

    return stack.length === 0;

};

testCases.forEach(test => {
    isValid(test);
})