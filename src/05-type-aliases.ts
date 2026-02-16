// Type alias
type Point = {
    x: number,
    y: number
}

let point: Point = { x: 10,y: 20}

// Type alias for primitives
type ID = string | number

let userId: ID = "Krishna"
let productId: ID = 345



// --------------------- type alias vs Interface --------------------

// Interfaces can be extended, type aliases cannot
interface Animal {
    name: string
}

interface Dog extends Animal{
    breed: string
}

let myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
}

// Interfaces can be declared multiple times and will merge
interface Lion{
    name: string
}
interface Lion{
    age: number
}

let lion1: Lion = {
    age: 3,
    name: "Buddy"
}

// Use interfaces for object shapes
// type aliases for unions/intersections
interface User{
    name: string,
    age: number
}
type UserID = string | number
