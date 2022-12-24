function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(--num);
}
console.log(factorial(5));
// console.log(5*4*3*2*1);
