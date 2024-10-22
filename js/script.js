const mySwitchContainer = document.getElementById("switch-container");
const myLampImg = document.getElementById("lamp-img");
const mySwitchBtnId = document.getElementById("switch-btn");
let mySwitchContainerClass = mySwitchContainer.classList;
let mySwitchBtnClass = mySwitchBtnId.classList;

let toggleSwitch = false;

mySwitchBtnId.addEventListener("click", () => {
  if (!toggleSwitch) {
    myLampImg.src = "./img/yellow_lamp.png";
    myLampImg.alt = "lamp on";
    mySwitchBtnId.textContent = "Spegni";
    mySwitchBtnClass.replace("btn-outline-light", "btn-outline-dark");
    mySwitchContainerClass.replace("bg-dark", "bg-white");
    toggleSwitch = true;
  } else {
    myLampImg.src = "./img/white_lamp.png";
    myLampImg.alt = "lamp off";
    mySwitchBtnId.textContent = "Accendi";
    mySwitchBtnClass.replace("btn-outline-dark", "btn-outline-light");
    mySwitchContainerClass.replace("bg-white", "bg-dark");
    toggleSwitch = false;
  }
});
