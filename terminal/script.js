let termIn = document.querySelector("#termIn");
let termOut = document.querySelector("#termOut");
let termStart = document.querySelector("#termStart");

let history = [];
let commands = [];
function addCommand(commandName, callBack) {
  commands.push({ name: commandName, run: callBack });
}

let mozz = (opt) => {
  if (opt) {
    return `<img src="./img/mozz.gif" style="width:${opt.trim()}px;"/>`;
  }
  return '<img src="./img/mozz.gif" />';
};

addCommand("ping", (opt) => {
  return "pong";
});
addCommand("whoami", (opt) => {
  return "jeremie";
});
addCommand("who", (opt) => {
  return "";
});
addCommand("history", (opt) => {
    let out = '';
    for(let i=0; i<history.length; i++){
        if(i<9){
            out += `<span style="color:black;">_</span><span>${i+1}<span style="color:black;">__</span>${history[i]}</span>`
        }else{
            out += `<span>${i+1}<span style="color:black;">__</span>${history[i]}</span>`
        }
        if(i<history.length - 1)
            out+="<br/>";
    }
    return out;
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
  return mozz(opt);
});
addCommand("mozz", (opt) => {
  return mozz(opt);
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
