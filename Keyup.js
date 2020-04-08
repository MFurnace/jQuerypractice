//Exercise - Keyup
//1. Create a text input field. Listen for the keyup event. Alert the value of the text box
//whenever keyup occurs.
//2. Get the value of an input field using: $('input').val();
//3. For bonus points, append the value of the text box into a div.
$(document).ready(function(){
	$("input").keydown(function(){
		$("input").css("background-color", "blue");
	});
	$("input").keyup(function(){
		$("input").css("background-color", "green");
	});
	document.getElementById("fname").value;