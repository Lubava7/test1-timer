const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

function formatZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const getFormattedTime = (n) => {
  let hh = Math.floor(n / 3600);
  let mm = Math.floor((n - hh * 3600) / 60);
  let ss = n - hh * 3600 - mm * 60;

  hh = formatZero(hh);
  mm = formatZero(mm);
  ss = formatZero(ss);

  return `${hh}:${mm}:${ss}`;
};
const createTimerAnimator = () => {
  return (seconds) => {
    let n = seconds;
    let timerId = setInterval(() => {
      const formattedTime = getFormattedTime(n);
      timerEl.innerText = formattedTime;
      n = n - 1;
      if (n === 0) {
        clearInterval(timerId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const string = e.target.value;
  inputEl.value = string.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
  timerEl.innerText = formatTime(seconds);
});
