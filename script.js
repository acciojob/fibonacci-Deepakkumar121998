function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;
  let current = 0;

  for (let i = 2; i <= num; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
}

// Test cases
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
