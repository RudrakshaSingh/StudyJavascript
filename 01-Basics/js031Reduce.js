/************** Reduce ************************************************************* */
//Calls the specified callback function for all the elements in an array. The return value of the callback function
//is the accumulated result, and is provided as an argument in the next call to the callback function.

/*
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );
*/

//accumulator is a empty value,in first loop accumulator get initial value=0 and second time put the sum of acc +current value(element of array)

/**************************************************************** */

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval; //acc value each iteration
}, 0); //it is initial value of acc

console.log(myTotal);

//arrow function

const myTotal1 = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal1);

/********************************************************************* */

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
