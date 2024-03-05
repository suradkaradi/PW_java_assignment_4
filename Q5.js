function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
  
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
  
  // Test the function with different inputs
  console.log(factorial(0));  
  console.log(factorial(1));  
  console.log(factorial(5));  
  console.log(factorial(7));  
  