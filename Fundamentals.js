/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4)); // [0, 2]

/*
When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".
*/

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}

console.log(switchItUp(1));

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:
    12 --> "10 + 2"
    45 --> "40 + 5"
    70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/
function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, index, arr) => digit + "0".repeat(arr.length - index - 1))
    .filter((num) => num[0] !== "0")
    .join(" + ");
}

console.log(expandedForm(70304));

/*
Count the number of divisors of a positive integer n.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

console.log(getDivisorsCnt(1200000));

//Given an array of integers, return a new array with each value doubled.
function maps(x) {
  return x.map((num) => num * 2);
}

console.log(maps([1, 2, 3]));

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(string) {
  return string
    .split("")
    .map((char) => (char === char.toUpperCase() ? ` ${char}` : char))
    .join("");
}

console.log(solution("camelCasing"));
