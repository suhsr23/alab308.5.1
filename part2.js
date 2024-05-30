// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

let arr1= [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]


let sortedarray = sortbyage(arr1)

console.log(sortedarray);

console.log(sortagelessthan50(arr1));

let mappedArray = maparray(arr1); 

console.log("Mapped array with changed keys and incremented age :", mappedArray); 

let sum = sumofages(arr1); 

console.log("Sum of ages is :", sum); 

let average = averageage(arr1); 

console.log("Average age is :", average);

function sortbyage(arr)
{
    return arr.sort((a,b) => a.age - b.age );
}

function sortagelessthan50(arr)
{
   return arr.filter( (a=>a.age >= 50 ));
}


function maparray(arr)
{
    return arr.map(item =>({id: item.id, 
        name: item.name,
        job: item.occupation, 
        age: (+item.age) + 1 
    }));
}

function sumofages(arr){
    return arr.reduce((sum, item) => sum + (+ item.age),0);
}

function averageage(arr)
{
    let agessum= sumofages(arr);

    return agessum/arr.length;
}


