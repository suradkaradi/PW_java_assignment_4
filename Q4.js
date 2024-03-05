function calculateTax() {
    // Define tax brackets using closure
    const taxBrackets = [
      { range: 10000, rate: 0.1 },
      { range: 50000, rate: 0.2 },
      { range: 100000, rate: 0.3 },
      { range: Infinity, rate: 0.4 }
    ];
  
    // Return the actual function that calculates tax based on income
    return function(income) {
      let remainingIncome = income;
      let totalTax = 0;
  
      // Calculate tax based on each bracket
      for (const bracket of taxBrackets) {
        if (remainingIncome > 0) {
          const taxableAmount = Math.min(remainingIncome, bracket.range);
          const taxForBracket = taxableAmount * bracket.rate;
          totalTax += taxForBracket;
          remainingIncome -= taxableAmount;
        } else {
          break; // No more income to tax
        }
      }
  
      return totalTax;
    };
  }
  
  // Example usage
  const income1 = 15000;
  const income2 = 60000;
  const income3 = 120000;
  
  const calculateTaxForIncome = calculateTax();
  
  console.log(`Tax for income ₹${income1}: ₹${calculateTaxForIncome(income1)}`);
  console.log(`Tax for income ₹${income2}: ₹${calculateTaxForIncome(income2)}`);
  console.log(`Tax for income ₹${income3}: ₹${calculateTaxForIncome(income3)}`);
  