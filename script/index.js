const timerBlock = document.querySelector('.special__number');
let time = 90;

let screenWidth = window.innerWidth;


function getScreenWidth() {
  screenWidth = window.innerWidth;
}

function handleScreenWidth() {
  window.addEventListener("resize", getScreenWidth);
}

setTimeout(handleScreenWidth, 10000);


function timerFunc() {
  let seconds = time;
  if (time <= 0) {
      clearInterval(timer);
      timerBlock.innerHTML = '00';
  } else {
      let strTimer = (seconds < 10 ? `0${seconds}` : `${seconds}`);
      timerBlock.innerHTML = strTimer;
  }
  --time;
}

function getHeight() {
  if (screenWidth > 1999) {
    return 679;
  } else if (screenWidth > 1439 && screenWidth < 2000) {
    return 596;
  } else if (screenWidth > 1279 && screenWidth < 1440) {
    return 828;
  } else if (screenWidth > 1023 && screenWidth < 1280) {
    return 858;
  } else if (screenWidth > 743 && screenWidth < 1024) {
    return 758;
  } else if (screenWidth > 427 && screenWidth < 744) {
    return 980;
  } else if (screenWidth > 319 && screenWidth < 428) {
    return 1060;
  }
}

function checkHeight() {
  if (this.window.pageYOffset >= getHeight()) {
    timer = setInterval(timerFunc, 1000),
    window.removeEventListener('scroll', checkHeight);
  }
}

window.addEventListener('scroll', checkHeight);
