/*
User Stories:

"sum" function: As a user, I want to have a function I can send an array to, that finds the sum of all element, and logs it in the console.

'median" functionAs a user, I want to have a function I can send an array to, that finds the arithmetic median of all element, and logs it in the console.

As a user, I want to have a function I can send an array to, that finds the arithmetic mean of all element, and logs it in the console.

None of the functions should return any values, or modify the original arrays.
*/

function sum(array) {
    var sum = 0.0;
    for (i=0 ; i<array.length ; i++) { //loop through array tallying elements 
        sum += array[i];
    }
    console.log(sum);
}

function mean(array){
    var sum = 0.0;
    for (i=0 ; i<array.length ; i++) { //loop through array tallying elements 
        sum += array[i];
    }
    console.log( sum / array.length );
}

function median(array) {
	var sorted = array.slice(); //clone array by value
	sorted.sort(function(a,b){return a-b}); //sort this temporary array only
	var median = (sorted[Math.floor((sorted.length - 1)/2)] + sorted[Math.floor(sorted.length / 2)]) / 2; //find middle element and average the two middle elements if number of elements is even
	console.log(median); 
}

