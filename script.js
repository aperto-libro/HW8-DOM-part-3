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

const time = document.querySelector('p');
const button = document.querySelector('button');
let isFullFormat = true;

button.addEventListener('click', function () {
  isFullFormat = !isFullFormat;
});

setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  time.innerText = isFullFormat
    ? `${hours} : ${minutes} : ${seconds}`
    : `${hours} : ${minutes}`;
}, 1000);
