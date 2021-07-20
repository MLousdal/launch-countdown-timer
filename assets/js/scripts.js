const countDownDate = new Date("Aug 3, 2021 12:00:00").getTime();
const cards = document.querySelectorAll(".time");

const docDays = document.querySelector("#days");
const docHours = document.querySelector("#hours");
const docMins = document.querySelector("#minutes");
const docSecs = document.querySelector("#seconds");

const arrDays = [];
const arrHours = [];
const arrMinutes = [];
const arrSeconds = [];

  // ----- Animations -----

const animationDaysElm = docDays;
let animationKeyframesDays = new KeyframeEffect(
  animationDaysElm, 
  [
    {transform: "rotateX(0deg)"},
    {transform: "rotateX(360deg)", offset: 1}
  ],
    { duration: 800, iterations: 1, easing: "linear"}
);
let animationDays = new Animation(animationKeyframesDays);

const animationHoursElm = docHours;
let animationKeyframesHours = new KeyframeEffect(
  animationHoursElm, 
  [
    {transform: "rotateX(0deg)"},
    {transform: "rotateX(360deg)", offset: 1}
  ],
    { duration: 800, iterations: 1, easing: "linear"}
);
let animationHours = new Animation(animationKeyframesHours);

const animationMinsElm = docMins;
let animationKeyframesMins = new KeyframeEffect(
  animationMinsElm, 
  [
    {transform: "rotateX(0deg)"},
    {transform: "rotateX(360deg)", offset: 1}
  ],
    { duration: 800, iterations: 1, easing: "linear"}
);
let animationMins = new Animation(animationKeyframesMins);

const animationSecsElm = docSecs;
let animationKeyframes = new KeyframeEffect(
  animationSecsElm, 
  [
    {transform: "rotateX(0deg)"},
    {transform: "rotateX(360deg)", offset: 1}
  ],
    { duration: 800, iterations: 1, easing: "linear"}
);
let animationSecs = new Animation(animationKeyframes);

let countDownTimer = setInterval(function() {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  // Calculation for times
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  // Play animations

  if (arrDays.indexOf(days) == -1 && arrSeconds.length > 0) {
    animationDays.play();
  };
  if (arrHours.indexOf(hours) == -1 && arrSeconds.length > 0) {
    animationHours.play();
  };
  if (arrMinutes.indexOf(minutes) == -1 && arrSeconds.length > 0) {
    animationMins.play();
  };
  if (arrSeconds.indexOf(seconds) == -1) {
    animationSecs.play();
  };

  docDays.innerHTML = days;
  docHours.innerHTML = hours;
  docMins.innerHTML = minutes;
  docSecs.innerHTML = seconds;

  arrDays.push(days);
  arrHours.push(hours);
  arrMinutes.push(minutes);
  arrSeconds.push(seconds);

  // Reset array to avoid unessesary cashe, CAN'T be more than 60 else seconds get skipped
  if (arrSeconds.length > 59) {
    arrDays.length = 0;
    arrHours.length = 0;
    arrMinutes.length = 0;
    arrSeconds.length = 0;
  }
  
  console.log(arrMinutes.indexOf(minutes), arrDays.indexOf(seconds), arrSeconds.length)
}, 1000)