export const testCases = [
    "()",               // 0. pass
    "()[]{}",           // 1. pass
    "(]",               // 2. fail
    "((({{{}}}))}",     // 3. fail
    "{{{{}}}}",         // 4. pass
    "{{[((({}])))]}}",  // 5. fail
    "("                 // 6. fail
];