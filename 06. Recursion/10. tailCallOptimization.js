/* 
 A tail call is a function call that appears at the tail of another function, such that after the call finishes, there’s nothing left to do.
*/

function doA(a) {
  return a;
}
function doB(b) {
  return doA(b + 1); //tail call
}
function foo() {
  return 20 + doB(10); //not tail call
}
foo(); // 31
