
const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(person,{
    get: (target,props) => {
        console.log(`the value of ${props} is ${target[props]}`);
        //return target[props]; -> this functionality is done by Reflect.get()
        return Reflect.get(target,props);
    },
    set: (target,props,value) => {
        console.log(`changed ${props} from ${target[props]} to ${value}`);
        //this functionality is done by Reflect.set()
        /*target[props] = value;
        return true;*/
        return Reflect.set(target,props,value);
    },
});

personProxy.name
personProxy.age += 1