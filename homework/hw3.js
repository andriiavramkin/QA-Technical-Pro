const result = 'number' + 3 + 3
//the result variable isnisialized as String now. And adding 3 and 3 will simple Concatenate the numbers to our string value.
console.log(result)   // returns: number33


const result = null + 3
// null = 0, 0 + 3 = 3
console.log(result) // returns: 3

const result = 5 && "qwerty"
//the latest value will be returned.
console.log(result) // returns: qwerty


const result = +'40' + +'2' + "hillel";
//унариний плюс + converts '40' and '2' into a number. summ 40+2=42. The following step will concatinate 42 with 'hillel'
console.log(result) // returns: 42hillel


const result = '10' - 5 === 6;
// '10' brought to a number. Minus 5, equeals 5. And compares it to 6. % is not 6. So results is False.
console.log(result) // returns: false


const result = true + false
// true is 1  and false is 0. 1+0=1.
console.log(result) // returns: 1


const result = '4px' - 3
//Bringing to a number has failed. Meaning '4px' can be only a String. Minus from String is not possible.
console.log(result) //returns: NaN


const result = '4' - 3
//Bringing to a number has succeeded. Meaning '4px' equals 4. 4 -3 =1
console.log(result) //returns:  1


const result = '6' + 3 ** 0;
//Провоасоціативна операція. 3**0=1. конкатинація 6+1=61.
console.log(result) //returns: 61


const result = 12 / '6'
//'6' is brought to a number. the rest are Math operations. 
console.log(result) //returns:  2


const result = '10' + (5 === 6);
//Провоасоціативна операція. As a result we have '10' + false. Means concate values.
console.log(result) //returns:  10false


const result = null == ''
//Провоасоціативна операція. comparing null == '' gives False then Result = false.
console.log(result) //returns: false


const result = 3 ** (9 / 3);
//Провоасоціативна операція. 0/3=3. then 3**3 = 3*3*3 = 27.
console.log(result) //returns:  27


const result = !!'false' == !!'true'
//  !! converts String to boolean meaning that we compare (true == true)
console.log(result) //returns:  true


const result = 0 || '0' && 1
//0 || '0' -> false || true -> true ('0'); '0' && 1  ->  true && true -> returns last true value.
console.log(result) //returns: 1


const result = (+null == false) < 1;
//+null -> 0; 0==false -> true; true -> 1; 1<1 -> false.
console.log(result) //returns:  false


const result = false && true || true
// second true will be selected. because At && teh last True is returned. And in || the first true will be returned.
console.log(result) //returns:  true


const result = false && (false || true);
//false || true -> true; false && true -> false. returns first falsy value.
console.log(result) //returns:  false


const result = (+null == false) < 1 ** 5;
//+null -> 0; 0==false -> true; true -> 1; 1**5 -> 1; 1<1 -> false.
console.log(result) //returns: false