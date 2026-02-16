// Interface
interface User{
    readonly id: number,    // readonly property this cannot be updated
    name: string,
    age: number,
    email?: string      // optional property
}

// Object type annotation
let user1: {name: string,age: number} = {
    name: "Krishna",
    age: 27
}

let user2: User = {
    id: 1,
    name: "Krishna1",
    age: 27
}
// user2.id = 2        // this will give error because it is readonly


// Interface with methods
interface Product{
    name: string,
    price: number,
    getDiscount(percent: number):number
}

let laptop: Product = {
    name: "Hp 14",
    price: 50000,
    getDiscount(percentage: number): number{
        return this.price * (percentage / 100)
    }
}




