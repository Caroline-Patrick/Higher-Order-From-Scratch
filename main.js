const burger = ['veggie burger', 'pork burger', 'beef burger', 'chicken burger']

 let newArr = [];

const addOn = (array) => {
  for (var i = 0; i < array.length; i ++){
    
    let element = array[i]
    element = "bacon " + element;
    newArr.push(element)
    
  }
  return newArr
}

// let finalA = addOn(burger);

// console.log(finalA)

// const burger = ['veggie burger', 'pork burger', 'beef burger', 'chicken burger']

//   const addOns = burger.map((type) => {
//     return `bacon-${type}`;
//   });

// console.log(addOns)