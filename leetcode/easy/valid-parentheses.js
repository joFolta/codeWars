/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const needsClosing = [];
  s.split("").map((char) => {
    if (char == "(" || char == "{" || char == "[") {
      needsClosing.push(char);
    } else if (
      (needsClosing[needsClosing.length - 1] == "(" && char == ")") ||
      (needsClosing[needsClosing.length - 1] == "{" && char == "}") ||
      (needsClosing[needsClosing.length - 1] == "[" && char == "]")
    ) {
      needsClosing.pop();
    } else if (char == ")" || char == "}" || char == "]") {
      needsClosing.push("invalid closing bracket");
    }
  });
  return !needsClosing.length;
};
