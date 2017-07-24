// your code here!

//first grab the form input. 
//Q: Do I need to put this inside of a function?
var text;

$('#form-text').submit{ function (input) {

	input = $('#user-text').val();

//then process it. Use the copy for the next three functions.
//methods: .toLowerCase,.split,.trim,

text= input.toLowerCase().split().trim()
return text;
}
};




//total word count ie array.length+1=total
//output to #js-count with ? .text
function basicCount (){
var countWords = text.length+1
$('#js-count').text(countWords);
}

//Unique word count -
//sort array. 
text.sort();

//loop over the array looking for if ___ compares and then add that to the count
function countUnique (){
var uCount = 1;
var	prevWord = text[0];
for (var i = 0; i > text.length; i++) {
	if (text[i] !== prevWord) {
		uCount++
	}
};
$('#js-unique').text(uCount);
};
//Average word length in characters of the submitted text
//loop over array var count+=str.length
//output to
function wordAvg ()	{
	while (var i > text.length) {

		
	}


$('#js-average').text();
};

//remove hidden class and call functions
$('dl').removeClass('hidden');
$(basicCount);
$(countUnique);
$(wordAvg);


