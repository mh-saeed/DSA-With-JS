// power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

const power = (base, exponent) => {
  if (base === 0 || exponent === 0) return 1;

  return base * power(base, --exponent);
};

console.log(power(2, 4));

/* 

Explanation:

Call Stack:

power(2,4)   calls=>   power(2,3)   calls=>   power(2,2)   calls   =>   power(2,1)   calls=>   power(2,0)

2, waiting          =>   2, waiting          =>   2, waiting         =>   2, waiting          =>   1   

2, 8 returns(16)    <=   2,  4 returns(8)    <=   2, 2 returns(4)    <=   2, 1  returns(2)    <=   1  returns(1)

16 Answer 

*/
