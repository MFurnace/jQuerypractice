
//Exercise - Capitalise every element
//Write a short function to capitalise every element of the array.
//You must use the Array#map function and the String#uppercase function.
//Exercise - Styling
//1. Use jQuery to select the body element
//2. Use the .css() function to style the body. Give it a red background and blue text.
 <script>
		var myToppings = ["cheese", "sauce", "pineapples", "garlic", "peppers"];
		function uppercase(str)
		{
		var array1 = str.split('');
		var newarray1 = [];

		for(var x = 0; x <array1.length; x++){
		newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
		}
		return newarray1.join('');	
}
		console.log (uppercase("cheese, pineapples, garlic and peppers"));
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
  			integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
  			crossorigin="anonymous"></script>

  		$(document).ready(function(){
			$("h2").css("color", "red");
});