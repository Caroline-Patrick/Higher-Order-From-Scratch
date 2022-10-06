// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

let listOfNumbers = [1, 2, 3, 4, 5]; 


let modArr =[]
const mapper = (arr) => {
    for (let i = 0; i < arr.length; i++) {
       let element = arr[i];
       element = arr[i] *2;
       modArr.push(element)
        
    }
}

console.log(modArr)

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.



// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
