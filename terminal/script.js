const termIn = document.querySelector("#termIn");
const termOut = document.querySelector("#termOut");
const termStart = document.querySelector("#termStart");

const history = [];
const commands = [];
const filesFolders = [];

function addCommand(commandName, callBack) {
  commands.push({ name: commandName, run: callBack });
}

function parseInput(inStr) {
  actualCommand = inStr.split(" ")[0];
  theRest = inStr.slice(actualCommand.length + 1);
  returnObj = { command: actualCommand, optional: theRest };
  return returnObj;
}

let currHistoryIndex = 0;

termIn.addEventListener("keyup", (event) => {
  if (event.key == "ArrowUp"){
    currHistoryIndex += 1;
    if(currHistoryIndex > history.length){
      currHistoryIndex = history.length;
    }
    termIn.value = history[history.length-currHistoryIndex];
  }
  if (event.key == "ArrowDown"){
    currHistoryIndex -= 1;
    if(currHistoryIndex == 0){
      termIn.value = '';
    }else if(currHistoryIndex < 0){
      currHistoryIndex = 0;
    }else{
      termIn.value = history[history.length-currHistoryIndex];
    }
  };
  if (event.key !== "Enter") return;

  currHistoryIndex = 0;
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
  window.scrollTo(0, document.body.scrollHeight);
  termIn.value = "";
  event.preventDefault();
});

let focusInput = () => {
  termIn.focus();
};

Mousetrap.bind('ctrl+l', (e) => {
  termOut.innerHTML = '';
  return false;
});