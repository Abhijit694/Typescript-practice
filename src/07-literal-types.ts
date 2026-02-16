// String literal types
let direction: "north" | "south" | "east" | "west"      // here the direction is not a type but a variable which only can take the values which are defined and also it is not union so it's type cannot be assigned to any other variable
direction = "north"


// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6
diceRoll = 6


// Combining with other types
type SuccessResponse = {
    status: "success",
    data: any
}

type ErrorResponse ={
    status: "error",
    message: string
}

type ApiResponse = SuccessResponse | ErrorResponse