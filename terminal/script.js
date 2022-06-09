let termIn = document.querySelector("#termIn");
let termOut = document.querySelector("#termOut");
let termStart = document.querySelector("#termStart");

let commands = [];
function addCommand(commandName, callBack) {
  commands.push({ name: commandName, run: callBack });
}

addCommand("ping", (opt) => {
  return "pong";
});
addCommand("deez", (opt) => {
  return "nuts";
});
addCommand("clear", (opt) => {
  termOut.innerHTML = "";
  return "";
});
addCommand("cls", (opt) => {
  termOut.innerHTML = "";
  return "";
});
addCommand("echo", (opt) => {
  return opt;
});
addCommand("mozzarella", (opt) => {
  return '<img src="./img/mozz.gif" />';
});
addCommand("cd", (opt) => {
  switch (opt) {
    case "":
    case ".":
      return "";
    case "website":
      window.open("https://jeremie.bornais.ca");
      return "";
    case "email":
      window.open("mailto:jeremie@bornais.ca");
      return "";
    case "linkedin":
      window.open("https://ca.linkedin.com/in/jeremie-bornais");
      return "";
    case "/":
    case "~":
    case "..":
      return `cd: permission denied: ${opt}`;
    default:
      return `-bash: cd: ${opt}: No such file or directory`;
  }
});
addCommand("ls", (opt) => {
  return lsTxt; // found in html.js
});

addCommand("help", (opt) => {
  return helpTableTxt; // found in html.js
});

function parseInput(inStr) {
  actualCommand = inStr.split(" ")[0];
  theRest = inStr.slice(actualCommand.length + 1);
  returnObj = { command: actualCommand, optional: theRest };
  return returnObj;
}

termIn.addEventListener("keyup", (event) => {
  if (event.key !== "Enter") return;

  let input = termIn.value;
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
