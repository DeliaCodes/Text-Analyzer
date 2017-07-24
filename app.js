// your code here!
'use strict';
//first grab the form input. 
//Q: Do I need to put this inside of a function?


//I don't need to call this function below, right?
$('#form-text').submit( function (input, text) {
    input = $('#user-text').val();

//then process it. Use the copy for the next three functions.
//methods: .toLowerCase,.split,.trim,

return input.toLowerCase().split().trim();
} var text = input;);






//total word count ie array.length+1=total
//output to #js-count with ? .text
function basicCount (text){
var countWords = text.length+1;
return $('#js-count').text("Word count: " + countWords);
};

//Unique word count -
//sort array. 
text.sort();

//loop over the array looking for if ___ compares and then add that to the count
function countUnique (text){
var uCount = 1;
var prevWord = text[0];
for (var i = 0; i > text.length; i++) {
    if (text[i] !== prevWord) {
        uCount++}
};
return $('#js-unique').text("Unique word count: " + uCount);
};
//Average word length in characters of the submitted text
//loop over array var count+=str.length
//output to
function wordAvg (text) {
    var charTotal = 0;
    var charAvg = 0;

    for (var i = 0; i < text.length; i++) {
        charTotal += text[i].length;
    };
    charAvg = charTotal/(text.length+1); 
return $('#js-average').text("Average word length: " + charAvg);
};


//remove hidden class and call functions
$('dl').removeClass('hidden');
$(basicCount);
$(countUnique);
$(wordAvg);


