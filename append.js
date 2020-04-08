$("p").html("Adding a hyperlink");

// for loop
var $paragraphs = $('p');
for (var i = 0; i < paragraphs.length; i++){
	var element = $paragraphs[i];
	var $paragraphs = $(element);
	$paragraphs.html( $paragraphs.html() + "https://youtu.be/eeTnog5RRQo");
}

//each
$paragraphs.each(function(index, element) {
	var $paragraphs = $(element);
	$paragraphs.html( $paragraphs.html() + "https://youtu.be/eeTnog5RRQo");
});

