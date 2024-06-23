#include <stdio.h>

int lengthOfLongestSubstring(char* s) {
    unsigned short hashArr['z' + 1];
    size_t longestSubstring = 0;
    size_t thisSubstring = 0;
    size_t i = 0;
    hashArr[s[i]] = 1;
    size_t sLength = sizeof(s) / sizeof(s[0]);
    for (size_t k = 1; k < sLength; k++) {
      if (hashArr[s[k]]) {
        if (thisSubstring > longestSubstring)
          longestSubstring = thisSubstring;
        while(i < k) {
          hashArr[s[i++]] = 0;
        }
        thisSubstring = 0;
      }
      else {
        
      }
    }
}