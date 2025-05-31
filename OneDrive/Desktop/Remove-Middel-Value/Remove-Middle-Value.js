function RemoveMiddelValue(arr){    // function its name RemoveMiddleValue
    let arr2 = [];   // Empty Array
    let middelIndex = Math.floor(arr.length / 2);   // Middel index length for array
    for(let i = 0 ; i < arr.length ; i++){   // for loop to read array
        if(i !== middelIndex){  // if statment -- if i not equal Middel index
            arr2.push(arr[i]);  // Store in arr2
        }
    }
    return arr2;    // Return Final Result
}

let arr = [1,2,3,4,5]; // Orignal Array 

console.log("Orginal array : " + arr);   // print Orginal Array  ..

console.log("Remove Middel Value : " + RemoveMiddelValue(arr)); //   print Array withoud Middel Value .. 