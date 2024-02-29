function sum(){
    let result = 0;
    // console.log(arguments)
    let argsArray = Array.from(arguments)
    argsArray.forEach((el)=>{
        result += el;
    });
    return result
}

function sum_2(...nums){
    let result = 0;
    nums.forEach((el)=>{
        result += el;
    });
    return result
}

Function.prototype.myBind = function(context, ...bindArgs){
    let that = this
    return (...callArgs)=>{that.apply(context, bindArgs.concat(callArgs))

    }
}

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }

//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");

//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true

//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true

//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true

//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true

//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true


function curriedSum(numArgs){
    let numbers = [];
    return function _curriedSum(num){
        numbers.push(num);
        if(numbers.length === numArgs){
            let result = 0;
            numbers.forEach((el)=>{
                result += el;
            })
            return result
        }else{
            return _curriedSum
        }
    }
}

const a = curriedSum(4)
console.log(a(5)(30)(20)(1))

Function.prototype.curry= function(numArgs){
    let argsList = []
    let that = this
    return function _curriedFunction(arg){
        argsList.push(arg)
        if(argsList.length === numArgs){
            return that(...argsList)
        }else{
            return _curriedFunction
        }
    }
}
