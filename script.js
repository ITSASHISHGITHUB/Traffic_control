
let currentState = "red";
let redTimer, greenTimer, yellowTimer;

function changeState(newState) {

  document.getElementById("red-button").disabled = true;
  document.getElementById("yellow-button").disabled = true;
  document.getElementById("green-button").disabled = true;
  clearTimeout(redTimer);
  clearTimeout(yellowTimer);
  clearTimeout(greenTimer);


  document.getElementById("red-light").style.backgroundColor = newState === "red" ? newState : "black";
  document.getElementById("yellow-light").style.backgroundColor = newState === "yellow" ? newState : "black";
  document.getElementById("green-light").style.backgroundColor = newState === "green" ? newState : "black";
  if (newState === "green") {
    greenTimer = setTimeout(() => {
      changeState("yellow");
    }, 15000);
  } else if (newState === "yellow") {
    yellowTimer = setTimeout(() => {
      changeState("red");
    }, 5000);
  } else if (newState === "red") {
    redTimer = setTimeout(() => {
      changeState("green");
    }, 20000);
  }

  document.getElementById("red-button").disabled = newState === "red" ? true : false;
  document.getElementById("yellow-button").disabled = newState === "yellow" ? true : false;
  document.getElementById("green-button").disabled = newState === "green" ? true : false;
}document.getElementById("red-button").addEventListener("click", () => {
  changeState("red");
});

document.getElementById("yellow-button").addEventListener("click", () => {
  changeState("yellow");
});

document.getElementById("green-button").addEventListener("click", () => {
  changeState("green");
});
