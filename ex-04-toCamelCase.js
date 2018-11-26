
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */



 // ++ YOUR CODE HERE

function toCamelCase(text){

	var arrayText = text.split(" ");

	// Con este ciclo se pasan todos los elementos del arrayText a minusculas
	for (i=0; i<arrayText.length; i++){

			arrayText[i] = arrayText[i].toLowerCase();	
	}
		// console.log(arrayText);

	//  En este ciclo i=1 porque solo se quiere modificar la primera letra apartir del segundo elemento.
	for (i=1; i<arrayText.length; i++){
			// Con esta linea de codigo apartir del segundo elemento, la primera letra es mayuscula
			arrayText[i] = arrayText[i].charAt(0).toUpperCase() + arrayText[i].slice(1);
	}
		// console.log(arrayText);
		return arrayText.join("");
		// console.log(arrayText.join(""));
}









// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: toCamelCase', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert( toCamelCase("fetch records") === 'fetchRecords' )
console.assert( toCamelCase("create table row") === 'createTableRow' )
console.assert( toCamelCase("convert to HTML") === 'convertToHtml' )
console.assert( toCamelCase("get user account ID") === 'getUserAccountId' )


/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
