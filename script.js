function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

// Test the function with an example
const n = 6; // Replace this with any positive integer
const result = fibonacci(n);
console.log(result);
