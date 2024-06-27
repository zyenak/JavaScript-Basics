// FOR-OF Loop
// Used with iterable objects (arrays, strings, maps, sets, etc.) to iterate over values
console.log(" Testing for ...of loop");
let arr = ['a', 'b', 'c'];

for (let value of arr) {
    console.log(value);
}

// FOR-IN Loop
// Used with objects to iterate over keys
console.log(" Testing for ...in loop");
let obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}

// Using Map to convert array of objects
const people = [
    {id: 1, name: "A"},
    {id: 2, name: "B"}
];
console.log("Array of People: ");
console.log(people);

const names = people.map(person => person.name);
console.log("Modified: ", names);