//Consider teh following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

//Problem is to create an array from this object that contains only 2 elements: Barney's name and number

// so like this ['Barney', 2 ]

//My Solution
for(const [key, value] of Object.entries(flintstones)){
    if(key === 'Barney' && value === 2){
        let ourArray = [key, value];
        return ourArray

    }
}