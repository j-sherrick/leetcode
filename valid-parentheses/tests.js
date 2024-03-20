export const testCases = [
    "()",               // 0. pass
    "()[]{}",           // 1. pass
    "(]",               // 2. fail
    "((({{{}}}))}",     // 3. fail
    "{{{{}}}}",         // 4. pass
    "{{[((({}])))]}}",  // 5. fail
    "(",                // 6. fail
    "(]",               // 7. fail - FAILED LEETCODE
    "(((((((",          // 8. fail - EDGE CASE - ALL OPENING CHARACTERS
    "["                 // 9. fail - EDGE CASE - ONE SINGLE OPENING CHARACTER
];