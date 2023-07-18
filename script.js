function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let prev1 = 0;
    let prev2 = 1;
    let fibNum;

    for (let i = 2; i <= num; i++) {
      fibNum = prev1 + prev2;
      prev1 = prev2;
      prev2 = fibNum;
    }

    return fibNum;
  }
}
