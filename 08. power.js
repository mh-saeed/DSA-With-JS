const power = (base, exponent) => {
  if (base === 0 || exponent === 0) return 1;

  return base * power(base, --exponent);
};

console.log(power(2, 4));

/* 

power(2,4) => power(2,3) => power(2,2) => power(2,1) => power(2,0)

2, waiting => 2, waiting => 2, waiting => 2, waiting => 1   

2, 8       <= 2,  4      <= 2, 2       <= 2, 1      <= 1  

16 Answer 

*/
