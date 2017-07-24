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
$('#js-count').text();


//Unique word count -
//sort array. loop over the array looking for if ___ compares
//output to
text.sort();
$('#js-unique').text();

//Average word length in characters of the submitted text
//loop over array var count+=str.length
//output to
$('#js-average').text();

//remove hidden class

$('dl').removeClass('hidden');


