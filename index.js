var drumBtn = document.getElementsByClassName("drum");

// Declaring Function

playDrum = (key) => {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("sounds/tom-2.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-2.mp3");
      tom4.play();
      break;

    default:
      break;
  }
};

drumAnimation = (key) => {
  let button = document.querySelector("." + key);
  button.classList.toggle("pressed");
  setTimeout(() => {
    button.classList.toggle("pressed");
  }, 100);
};

// Mouse event
for (let i = 0; i < drumBtn.length; i++) {
  drumBtn[i].addEventListener("click", () => {
    var mouseElement = drumBtn[i].innerHTML;
    playDrum(mouseElement);
    drumAnimation(mouseElement);
  });
}

// KeyBoard Event
document.addEventListener("keydown", (event) => {
  playDrum(event.key);
  drumAnimation(event.key);
});

let animal = new Audio("sounds/crash.mp3");
animal.play();
