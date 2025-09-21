let arr = [1,2,3,4,5]

let copy = arr[0]

//  Left rotation by 1 in array elements

 for(let i=0; i<arr.length-1; i++) {
    arr[i] = arr[i+1]
 }

 arr[arr.length-1] = copy;

console.log(arr);

// Right rotation by 1 in array elements

