let termIn = document.querySelector("#termIn");
let termOut = document.querySelector("#termOut");
let termStart = document.querySelector("#termStart");

let history = [];
let commands = [];
function addCommand(commandName, callBack) {
  commands.push({ name: commandName, run: callBack });
}

function parseInput(inStr) {
  actualCommand = inStr.split(" ")[0];
  theRest = inStr.slice(actualCommand.length + 1);
  returnObj = { command: actualCommand, optional: theRest };
  return returnObj;
}

termIn.addEventListener("keyup", (event) => {
  if (event.key !== "Enter") return;

  let input = termIn.value;
  history.push(input);
  console.log(input);
  let out = document.createElement("span");
  out.innerText = `${input}`;
  termOut.appendChild(termStart.cloneNode(true));
  termOut.appendChild(out);
  termOut.appendChild(document.createElement("br"));

  // run the func
  cmdOut = "";

  for (let i = 0; i <= commands.length; i++) {
    let inCmd = parseInput(input).command;
    let inOptional = parseInput(input).optional;
    if (i == commands.length) {
      cmdOut = `-bash: ${inCmd}: command not found`;
      break;
    }
    if (commands[i].name == inCmd) {
      cmdOut = commands[i].run(inOptional);
      break;
    }
  }

  let cmdOutElem = document.createElement("span");
  cmdOutElem.innerHTML = cmdOut;
  termOut.appendChild(cmdOutElem);
  if (cmdOut) termOut.appendChild(document.createElement("br"));

  termIn.value = "";
  event.preventDefault();
});

let focusInput = () => {
  termIn.focus();
};
