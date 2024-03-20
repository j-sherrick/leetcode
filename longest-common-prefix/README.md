# 14. Longest Common Prefix

## Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


## Related Topics

- (String)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]
- (Trie)[https://www.toptal.com/java/the-trie-a-neglected-data-structure]


## Examples

Example 1:
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:
```
Input: strs = ["dog","racecar","car"]
Output: ""
```
Explanation: There is no common prefix among the input strings.
 

## Input Constraints

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.