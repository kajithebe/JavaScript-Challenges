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
