// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

let ar1=[10,20,30,40];
// let ar2=["1","222","33333","444","55","6"];
let ar2=["aa","bbbb","ccc","dddddd","qwertyuiop","6"];

let sum=0;
let avg=0;
sumofarray(ar1);
averageofarray(ar1);

console.log("Array of Strings is " +ar2 + " and the Longest String is " +longeststring(ar2) );

longerthan(ar2, 3);

printallnumbers(10);

function sumofarray(arr)
{

for(let i=0; i< ar1.length; i++)
{
    sum+= ar1[i];
}

console.log("Sum of items in array is: "+sum);
}

function averageofarray(arr)
{
    avg= sum/ar1.length;

    console.log("average of items in array is: " +avg);
}

function longeststring(arr)
{
let longest="";

for(let i=0;i< arr.length;i++)
{
    if(arr[i].length > longest.length)
    {
        longest=arr[i];
    }
}
return longest;

}

function longerthan(arr,n)
{
    let longerstring=[];
    for(let i=0;i<arr.length ;i++)
    {
        if (arr[i].length>n)
        {
            longerstring.push(arr[i]);
        }
    }
    console.log("Strings longer than " +n+ "in the given array are " +longerstring);
}

function printallnumbers(n)
{
    if(n>=1)
    {
        printallnumbers(n-1);
        console.log(n);
    }
    else console.log(n);
}