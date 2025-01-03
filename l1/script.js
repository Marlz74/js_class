// if (5>8){
//     console.log("5 is greater than 8");
// }else{
//     console.log("5 is not greater than 8");
// }   

// switch (8) {
//     case 8:
//         console.log('value is 8');  
//         break;
//     case 5:
//         console.log('value is 5');  
//         break

//     default:
//         console.log('value is not 3 or 5'); 
//         break;
// }

// key = value

let associativeArray={
    "name":"marlz",
    "age":23,   
}
// console.log(associativeArray['name']);




// the first offset/ index = 0, find the value in the offset 7 in the array above

let jsonData={
    name:'sd',
    age: 23,
    address: 'kathmandu'    
}

let users = [
    {
        id:1,
        name:'marlz',
        age: 23,    
    },
    {
        id:2,
        name:'kd',
        age: 24,
    },
    {
        id:3,
        name:'smith',
        age: 27,
    },
    {
        id:3,
        name:'smith',
        age: 27,
    }
]


// console.log(arr.length);

// console.log(arr[arr.length-1]);

// for(let i=0; i<arr.length;i++){
//     // console.log(i)
//     // console.log(arr[i]);

//     if(arr[i]==4){
//         console.log(arr[i]);
//         return; // ends the loop 
//     }
//     console.log(arr[i]);
// }

// offset is another word for index

// arr.forEach((value,offset) => {
//     console.log(offset+ ' - '+ value);
// });

// ARRAY MEHTODS (MANIPULATING ARRAYS AND OBJECTS)
let arr=[1,2,3,4,5,6,7,8,9,10,'jd','kd','dkdkdk']; // array , object
// push, pop, shift, unshift, splice, slice, map, filter, reduce, find, findIndex, indexOf, lastIndexOf, includes, concat, join, reverse, sort, every, some, forEach, keys, values, entries, from, isArray, of  

arr.push(11); // adds a value at the end of the array

arr.pop(); // removes the last value of the array

// console.log(arr)

// let arr1=arr.shift(); // removes the first value of the array  

// arr.unshift([900000,70000]); // adds a value at the beginning of the array

// arr.splice(2,5,'b','c'); // removes the value at the offset 2

// let arr1=arr.slice(0,8); // returns the values from offset 2 to 5    
// let newArr=[];
// arr.map((value,offset) => {
//     newArr.push(value*2)
// })

// console.log(newArr)

let data=arr.filter(value=>value==2); // returns the value that is equal to 2



// console.log(kdData)


// let marlzData= users.filter(user=>user.name=='marlz');  
// console.log(marlzData)
// console.log(arr);

// console.log(arr1)

// let findData=users.find(user=>user.id==3); // returns the first value that is equal to 2
// console.log(findData);

let findIndexData=users.findIndex(user=>user.id==3); // returns the index of the first value that is equal to 2 

console.log(users[findIndexData])

console.log(arr.includes(4000)); // returns the last index of the value 4

let arr3=arr.join(' ')
// console.log(arr)
// console.log(arr1);

console.log(arr.reverse());

console.log(typeof arr3);