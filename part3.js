let arr1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

console.log("Before incrementAge:");
arr1.forEach(obj => {
    console.log(obj);
    incrementAge(obj);
});

console.log("After incrementAge:", arr1);

console.log("Before incrementAgeWithCopy:", arr1);

let arr2 = arr1.map(obj => incrementAgeWithCopy(obj));

console.log("After incrementAgeWithCopy (original):", arr1);

console.log("After incrementAgeWithCopy (copy):", arr2);

function incrementAge(obj) {
    if (!obj.age)
    obj.age = 0;
    obj.age++;
    obj.updated_at = new Date();
}

function incrementAgeWithCopy(obj) {
    let copy = Object.assign({}, obj); 
    if (!copy.age) copy.age = 0;
    copy.age++;
    copy.updated_at = new Date(); 
    return copy;
}

