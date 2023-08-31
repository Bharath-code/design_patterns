import { subtract,sum,multiply,divide } from "./math.js";
import { validateInput } from "./input.js";

const a = 10;
const b = 5;
if(validateInput(a)&&validateInput(b)){
    console.log(sum(a, b));
    console.log(subtract(a, b));
    console.log(multiply(a, b));
    console.log(divide(a, b));
}


