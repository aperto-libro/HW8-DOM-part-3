console.log('------------- # 4');

function logNums(a, b) {
  if (a < b) {
    console.log(a);
    a++;
    logNums(a, b);
  } else if (a > b) {
    console.log(a);
    a--;
    logNums(a, b);
  } else {
    console.log(a);
    return;
  }
}

logNums(1, 5);
logNums(4, 0);

console.log('------------- # 5');

const time = document.querySelector('p');
let isFullFormat = true;

let currentTime = function () {
  let now = new Date();
  let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
  return isFullFormat ? `${hours} : ${minutes} : ${seconds}` : `${hours} : ${minutes}`;
};

time.addEventListener('click', function () {
  isFullFormat = !isFullFormat;
});

setInterval(() => {
  time.innerText = currentTime();
}, 250);
