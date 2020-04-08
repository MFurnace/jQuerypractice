
//Exercise - Capitalise every element
//Write a short function to capitalise every element of the array.
//You must use the Array#map function and the String#uppercase function.

 
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
	