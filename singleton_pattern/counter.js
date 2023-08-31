let counter = 0
const counterObj = {
    getCount : () => counter,
    increment : () => ++counter,
    decrement: () => --counter
}

const singletonInstance =  Object.freeze(counterObj)

export {singletonInstance}