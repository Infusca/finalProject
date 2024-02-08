// Count # of words in array with # of letters in second arrays

let strings = ['house', 'car', 'street', 'a', 'the', 'man', 'cherry', 'spike', 'gray', '', '', 'do', 'space']
let numbers = [5, 3, 0, 8]

function countWords(arr1, arr2) {
    numWords = 0;
    for (word in strings) {
        countLetters = 0;
        console.log(strings[word])

        for (i=0; i<strings[word].length; i++) {
            countLetters ++;
        }
        
        for (j=0; j<numbers.length; j++) {
            if (countLetters == numbers[j]){
                numWords++;
            }
        }
    } 
    
    return numWords;
}

console.log(countWords(strings, numbers))