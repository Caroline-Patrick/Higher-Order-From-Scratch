// .map():

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
    arr[index] = num + 2
}

numbers.forEach(addTwo)
// console.log(numbers)

// .reduce():



// .filter():

numArr = [1, 2, 3, 4]

const filterFunc = (arr) => {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
    return(newArr)
}

filterFunc(numArr)