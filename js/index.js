const selectBody = document.body;
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let dontPressStartTwice = false;
let timerId;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const indexGenerator = function (min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};
function selectColor() {
  const index = indexGenerator(0, colors.length - 1);
  selectBody.setAttribute('style', `background-color:${colors[index]}`);
}

let startTimer = function () {
  if (!dontPressStartTwice) {
    timerId = setInterval(selectColor, 1000);
  }
  dontPressStartTwice = true;
};
let stopTimer = function () {
  clearInterval(timerId);

  dontPressStartTwice = false;
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
