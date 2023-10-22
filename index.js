function func(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return func(n - 1) + func(n - 2);
  }
}

console.log(func(0));
console.log(func(1));
console.log(func(16));
