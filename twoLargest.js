// Write a fxn that accepts array and returns two largest numbers in an array with largest first.

input = [7, -2, 3, 4, 5, 1, 23, 31, 23]

num1 = input[0]
num2 = input[1]

for (num in input) {
    if (input[num] >= num1 && input[num] >= num2) {
        if (num1 > num2) {
            num2 = input[num];
        } else {
            num1 = input[num];
        }
    } else if (num > num1) {
        num1 = input[num];
    } else if (num > num2) {
        num2 = input[num];
    }
}
twoLargest = [num1, num2]
console.log(twoLargest)