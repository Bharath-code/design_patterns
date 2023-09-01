/**
 * Challenge
Add the following validation to the user object:

The username property has to be a string that only contains of letters, and is at least 3 characters long
The email property has to be a valid email address.
The age property has to be a number, and has to be at least 18
When a property is retrieved, change the output to ${new Date()} | The value of ${property}} is ${target[property]}. For example if we get user.name, it needs to log 2022-05-31T15:29:15.303Z | The value of name is John

 */


import { isAllLetters,isValidEmail } from "./validator.js";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy =  new Proxy(user, {
        get: (target,props) => {
            console.log(
              `${new Date()} | The value of ${props} is ${Reflect.get(
                target,
                props
              )}`
            );
             
        },
        set: (target,props,value) => {
            if(props === 'username'){
                if(!isAllLetters(value)){
                    throw new Error('should contain only letters in username');
                }
                if(value.length < 3){
                    throw new Error('username should have length atleast 3');
                }
            }
            if(props === 'email'){
                if(!isValidEmail(value)){
                    throw new Error('Your email should be valid')
                }
            }
            if(props === 'age'){
                if(typeof value !== 'number'){
                    throw new Error('Age should be a number')
                }
                if(value < 18){
                    throw new Error('Age should be atleast 18')
                }
            }
            console.log(`congrats your ${value} has  set to ${props}`)
            return Reflect.set(target,props,value)
        }
});

console.log(userProxy.age = '19')
console.log(userProxy.email)