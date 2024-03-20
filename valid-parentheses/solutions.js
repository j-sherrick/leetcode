import { testCases } from "./tests.js";

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const parens = '()[]{}';

    let stack = [];
    let i = 0;
    for (const ch of s) {
        if ((parens.indexOf(ch) % 2) === 0) {
            stack.push(ch);
            i++;
        }
        else {
            let peek = stack[i - 1];
            if (parens.indexOf(peek) === (parens.indexOf(ch) - 1)) {
                stack.pop();
                i--;
            }
            else {
                console.log('false');
                return;
            }
        }
    }
    console.log('true');
};

testCases.forEach(test => {
    isValid(test);
})