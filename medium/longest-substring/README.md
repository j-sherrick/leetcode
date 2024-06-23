# 3. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

The solution for this problem is to use a hash table, and since we know

```C
size_t sLength = sizeof(s) / sizeof(s[0]);
char* lastIndex = (s + sLength - 1); // returns a pointer to the last index in the array
```

Now we can use `s` as the top of our window and create a new pointer `sBottom` to
