const countDownDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000; // In 14 days from now

const docDays = document.querySelector("#days");
const docHours = document.querySelector("#hours");
const docMins = document.querySelector("#minutes");
const docSecs = document.querySelector("#seconds");


// arrays for checking if cards should flip
const arrDays = [];
const arrHours = [];
const arrMinutes = [];
const arrSeconds = [];

// ----- Animations -----
// I'm creating 4 identical keyframesets, this might not be the most effecient 

const animationDaysElm = docDays.parentElement;
let animationKeyframesDays = new KeyframeEffect(
  animationDaysElm, 
  [
    {transform: "rotateX(0deg)", opacity: 0},
    {offset: 0.5, opacity: 0.8},
    {transform: "rotateX(180deg)", offset: 1, opacity: 0}
  ],
    {direction: "normal", duration: 900, iterations: 1, easing: "linear", pseudoElement: "::after"}
);
let animationDays = new Animation(animationKeyframesDays);

const animationHoursElm = docHours.parentElement;
let animationKeyframesHours = new KeyframeEffect(
  animationHoursElm, 
  [
    {transform: "rotateX(0deg)", opacity: 0},
    {offset: 0.5, opacity: 0.8},
    {transform: "rotateX(180deg)", offset: 1, opacity: 0}
  ],
    {direction: "normal", duration: 900, iterations: 1, easing: "linear", pseudoElement: "::after"}
);
let animationHours = new Animation(animationKeyframesHours);

const animationMinsElm = docMins.parentElement;
let animationKeyframesMins = new KeyframeEffect(
  animationMinsElm, 
  [
    {transform: "rotateX(0deg)", opacity: 0},
    {offset: 0.5, opacity: 0.8},
    {transform: "rotateX(180deg)", offset: 1, opacity: 0}
  ],
    {direction: "normal", duration: 900, iterations: 1, easing: "linear", pseudoElement: "::after"}
);
let animationMins = new Animation(animationKeyframesMins);

const animationSecsElm = docSecs.parentElement;
let animationKeyframes = new KeyframeEffect(
  animationSecsElm, 
  [
    {transform: "rotateX(0deg)", opacity: 0},
    {offset: 0.5, opacity: 0.8},
    {transform: "rotateX(180deg)", offset: 1, opacity: 0}
  ],
    {direction: "normal", duration: 900, iterations: 1, easing: "linear", pseudoElement: "::after"}
);
let animationSecs = new Animation(animationKeyframes);

// Function runs every 1000ms 

let countDownTimer = setInterval(function() {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  // Calculation for times
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  // Play animations if the value isn't in the array, and the array is longer than 1 values

  if (arrDays.indexOf(days) == -1 && arrSeconds.length > 0) {
    animationDays.play();
  };
  if (arrHours.indexOf(hours) == -1 && arrSeconds.length > 0) {
    animationHours.play();
  };
  if (arrMinutes.indexOf(minutes) == -1 && arrSeconds.length > 0) {
    animationMins.play();
  };
  
 // Write the time in the DOM 
  docDays.innerHTML = days;
  docHours.innerHTML = hours;
  docMins.innerHTML = minutes;
  animationSecs.play();
  docSecs.innerHTML = seconds;

  // Set a custom attribute for the flip
  docDays.parentElement.setAttribute("data-time", days);
  docHours.parentElement.setAttribute("data-time", hours);
  docMins.parentElement.setAttribute("data-time", minutes);
  docSecs.parentElement.setAttribute("data-time", seconds);

  // Update the arrays 
  arrDays.push(days);
  arrHours.push(hours);
  arrMinutes.push(minutes);
  arrSeconds.push(seconds);

  // Reset arrays to avoid skipping numbers, CAN'T be more than 60 else seconds get skipped
  if (arrSeconds.length > 59) {
    arrDays.length = 0;
    arrHours.length = 0;
    arrMinutes.length = 0;
    arrSeconds.length = 0;
  }
}, 1000)