const answers = [
  "Are you sure?",
  "Are you really sure??",
  "Are you really realy sure???",
  "Think again?",
  "Don't believe in second chances?",
  "Why are you being so cold?",
  "Maybe we can talk about it?",
  "I am not going to ask again!",
  "Ok now this is hurting my feelings!",
  "You are now just being mean!",
  "Why are you doing this to me?",
  "Please give me a chance!",
  "I am begging you to stop!",
  "Ok, Let's just start over..",
];

const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const banner = document.getElementById("banner");
const messageDiv = document.querySelector(".message"); // Select the message div
let i = 0;
let size = 50;
let clicks = 0;

noButton.addEventListener("click", () => {
  const imageSrc = noButton.getAttribute("data-image");
  banner.src = imageSrc;
  banner.style.display = "block";
  clicks++;

  // Increase button height and width gradually to 250px
  const sizes = [40, 50, 30, 35, 45];
  const random = Math.floor(Math.random() * sizes.length);
  size += sizes[random];
  yesButton.style.height = `${size}px`;
  yesButton.style.width = `${size}px`;

  // Change button text
  const total = answers.length;
  if (i < total - 1) {
    noButton.innerHTML = answers[i];
    i++;
  } else if (i === total - 1) {
    alert(answers[i]);
    i = 0;
    noButton.innerHTML = "No";
    yesButton.style.height = "50px";
    yesButton.style.width = "50px";
    size = 50;
  }
});

yesButton.addEventListener("click", () => {
  const yesImageSrc = yesButton.getAttribute("data-image");
  banner.src = yesImageSrc; // Set the banner image source for "Yes" response
  banner.style.display = "block";
  document.querySelector(".buttons").style.display = "none";
  messageDiv.style.display = "block";
});
