/**
 * singleton pattern were used to create only one instance of an object
 * It's values are global , it will populate the global varibale
 * It's hard to test , single modification in the value of this variable will result resetting it
 * But it has usecase like we should have single db connection
 */

import { singletonInstance } from "./counter.js";
import { connection } from "./dbConnection.js";

console.log(singletonInstance.getCount())
console.log(singletonInstance.increment())
console.log(singletonInstance.increment())
console.log(singletonInstance.increment())
console.log(singletonInstance.increment())
console.log(singletonInstance.increment())
console.log(singletonInstance.increment())
console.log(singletonInstance.getCount())
console.log(singletonInstance.decrement())
console.log(singletonInstance.decrement())
console.log(singletonInstance.getCount())

// db connection
const connectedDB = connection("mongodb://...");
console.log(connectedDB.connect())
console.log(connectedDB.disconnect())

