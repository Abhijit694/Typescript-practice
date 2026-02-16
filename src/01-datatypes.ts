// Primitives
let userName: string = "Krishna"
let age: number = 27
let isAdmin: boolean = true

// Arrays       -> In ts we can only create arrays containing elements of same datatype
let numbers: number[] = [12,53,24,62,46]
let names: string[] = ["Krishna","Radha"]


// Tuples
let person: [string,number] = ["Krishna",92]


// Enum (When we want only specifc values)
enum color{
    red,
    orange,
    green
}
let trafficLight: color = color.green


// Any (avoid when possible)    -> when we dont know what will be the type of the variable
let randomValue: any = 27
// randomValue.toLowerCase()       // compiles fine, but crashes at run time
// randomValue.push("oops")       // compiles fine, but crashes at run time if it is not an array


// Unknown (safer than any)     -> when we dont know what will be the type of the variable
// It works as any datatype but it is a safer version
let userInput: unknown;
userInput = 5
userInput = "text"
// userInput.toLowerCase()         // ERROR: object of type "unknown"
if(typeof userInput === "string"){
    userInput.toLowerCase()        // Works TS now knows it's a string.
}


// Null
let nullValue: null = null


// Undefined
let undefinedValue: undefined = undefined