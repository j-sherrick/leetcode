# 20. Valid Parentheses

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
### Example 1:
```
Input: s = "()"
Output: true
```
### Example 2:
```
Input: s = "()[]{}"
Output: true
```
### Example 3:
```
Input: s = "(]"
Output: false
```

## Constraints:

* 1 <= s.length <= 104
* s consists of parentheses only '()[]{}'.

## Topics

## Solution

I passed the basic test cases but failed the main submission because I failed to account for the edge case where strings only contain opening brackets. This
was because the function returns false when there is a closing bracket out of place, but returns true in all other cases. This was easily accounted for by including a check for an empty stack along with the return condition.

## What Did I Learn?

- My approach added overhead because I was performing an O(n) search using `indexOf()` with each iteration of the loop.
- Whereas the `isValidFast()` solution peformed direct comparison to specific characters.
- Separate `peek` variable was unnecessary