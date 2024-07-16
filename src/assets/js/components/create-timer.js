function createTimer(target, value = '00:00') {
  const targetElement = target;
  targetElement.textContent = value;
  let sec = 0;
  let seconds;
  let min = 0;
  let minutes;
  if (value) {
    console.log('s', value.slice(0, 2), 'm', value.slice(-2));
    sec = parseFloat(value.slice(-2));
    min = parseFloat(value.slice(0, 2));
  }
  const timer = setInterval(() => {
    sec += 1;
    if (sec === 60) {
      sec = 0;
      min += 1;
    }
    if (sec < 10) {
      seconds = `0${sec}`;
    } else {
      seconds = sec;
    }
    if (min < 10) {
      minutes = `0${min}`;
    } else {
      minutes = min;
    }
    targetElement.textContent = `${minutes}:${seconds}`;
  }, 1000);
  return timer;
}

export default createTimer;
