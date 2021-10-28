const disableInput = () => {
  document.querySelectorAll(".choice-player").forEach((input) => {
    input.setAttribute("disabled", "disabled");
  });
};

const hideversus = () => (document.getElementById("vs").style.display = "none");

const showResult = (result) => {
  console.log(`the result is: ${result}`)
  const resultInfo = {
    draw: ["Draw!", "draw"],
    player: ["Player 1 win!", "win-player"],
    com: ["Com win!", "win-com"],
  };

  console.log(resultInfo[result][0]);
  hideversus();
  document.getElementById(resultInfo[result][1]).style.display = "block";
  disableInput();
};

const rpsCalc = (playerM, comM) => {
  if(playerM === "gunting" && comM === "com-gunting") {
    console.log("draw")
    showResult('draw')
  } else if (playerM === "gunting" && comM === "com-batu"){
    console.log("Com wins")
    showResult('com')
  } else if (playerM === "gunting" && comM === "com-kertas"){
    console.log("Player wins")
    showResult('player')
  } else if (playerM === "batu" && comM === "com-batu") {
    console.log("draw")
    showResult('draw')
  } else if (playerM === "batu" && comM === "com-gunting"){
    console.log("Player wins")
    showResult('player')
  } else if (playerM === "batu" && comM === "com-kertas"){
    console.log("Com wins")
    showResult('com')
  } else if (playerM === "kertas" && comM === "com-kertas") {
    console.log("draw")
    showResult('draw')
  } else if (playerM === "kertas" && comM === "com-batu"){
    console.log("Player wins")
    showResult('player')
  } else if (playerM === "kertas" && comM === "com-gunting"){
    console.log("Com wins")
    showResult('com')
  }
}

const getChoice = (choice) => {
  
  const PLAYER_CHOICE = ["gunting", "batu", "kertas"];
  const COM_CHOICE = ["com-gunting", "com-batu", "com-kertas"];
  const random = Math.floor(Math.random() * COM_CHOICE.length);

  const pFinalChoice = PLAYER_CHOICE[choice];//1
  const cFinalChoice = COM_CHOICE[random];//2

  console.log(`You choose ${pFinalChoice}`)
  console.log(`Com choose ${cFinalChoice}`)

  document.getElementById(PLAYER_CHOICE[choice]).classList.add("chosen");
  document.getElementById(COM_CHOICE[random]).classList.add("chosen");
  document.querySelectorAll(".choice-player").forEach((choice) => {
    choice.classList.remove("choice-hover");
    choice.style.cursor = "default";
  });
  rpsCalc(pFinalChoice, cFinalChoice) ;
};

const refreshGame = () => {
  console.log("Refreshed");

  document.querySelectorAll(".choice-player").forEach((input) => {
    input.removeAttribute("disabled");
  });

  document.getElementById("vs").style.display = "block";
  document.getElementById("draw").style.display = "none";
  document.getElementById("win-player").style.display = "none";
  document.getElementById("win-com").style.display = "none";

  document.querySelectorAll(".choice-player").forEach((choice) => {
    choice.classList.add("choice-hover");
    choice.style.cursor = "pointer";
  });

  document.querySelectorAll(".figure").forEach((figure) => {
    figure.classList.remove("chosen");
  });
};
