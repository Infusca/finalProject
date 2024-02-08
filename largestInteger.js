function largestInt(arr) {
    var largestNum;
    var num;
    if (arr.length == 0) {
        return (0);
    } else {
        for (i=0; i<arr.length; i++){
            let cur = arr[i];
            let next = arr[i+1];

            if (next >= cur) {
                num = next;
            } else if (cur > next) {
                num = cur;
            }

            if (largestNum == null || largestNum == 'undefined') {
                largestNum = num;
            } else if (largestNum < num) {
                largestNum = num;
            }
        }

        return (largestNum);
    }
}

array1 = [1,20,3,4,5]
array2 = [1,22,3500,-4,500]
array3 = [-10,-22,-38,-42,-5]
array4 = [10,-220,-38,0,-5]
array5 = [0,0,0,0,0]
array6 = [1,0,-3,6,2]
array7 = [3,3,3,3,3]
array8 = [-8,66,0,9,-9]

console.log(largestInt(array1))
console.log(largestInt(array2))
console.log(largestInt(array3))
console.log(largestInt(array4))
console.log(largestInt(array5))
console.log(largestInt(array6))
console.log(largestInt(array7))
console.log(largestInt(array8))