/* Using the code below as a starting point, 
write a while loop that logs the elements of 
array at each index, and terminates after logging the 
last element of the array */
            //0 1 2 3
let array = [1, 2, 3, 4];
let index = 0;

// while(index <= 4){
//     console.log(index);
//     index++
// }

//Solution
while(index < array.length){
    console.log(array[index]);
    index++
}