console.log('------------- # 4');

function logNums(a, b) {
  if (a <= b) {
    console.log(a);
    a++;
    if (a > b) {
      return;
    }
    logNums(a, b);
  } else if (a >= b) {
    console.log(a);
    a--;
    if (a < b) {
      return;
    }
    logNums(a, b);
  }
}

logNums(1, 5);
logNums(5, 0);

console.log('------------- # 5');
