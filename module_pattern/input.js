//validate the input type whether it's number or not
export function validateInput(input){
    if(typeof input !== "number"){
       throw new Error("Invalid Input, kindly use number..");
    }
    return true
}