let text = "Hello, World!";
let operations = [
function(text) { return text.toUpperCase(); },
function(text) { return text.replace(/o/g, "0"); },
];
let ranges = [[0, 4], [7, 12]];


function processText(text, ops, ranges) {
    for (range in ranges){
        for (i=0; i<text.length; i++) {
            if (i in range) {
                for (op in ops) {
                    alteredText = op(text);
                }
            }
        }
    }
    return alteredText;
}






console.log(processText(text, operations, ranges));