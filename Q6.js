function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function (...moreArgs) {
          return curried.apply(this, args.concat(moreArgs));
        };
      }
    };
  }
  
  // Test the curry function with an addition function
  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); 
  console.log(curriedAdd(1, 2)(3)); 
  console.log(curriedAdd(1)(2, 3)); 
  console.log(curriedAdd(1, 2, 3));