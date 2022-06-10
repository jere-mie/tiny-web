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

// one function defined so we can use it for "mozzarella" and "mozz"
let mozz = (opt) => {
  if (opt) {
    return `<img src="./img/mozz.gif" style="width:${opt.trim()}px;"/>`;
  }
  return '<img src="./img/mozz.gif" />';
};

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
  out = `<span class="links">`;
  end = `</span>`;
  
  filesFolders.sort( (a, b) => {return a.name > b.name ? 1: -1} );

  for(const elem of filesFolders){
    if(elem.type == 'folder'){
      out += `<a href="${elem.content}" target="__blank">${elem.name}</a>`
    }else if(elem.type == 'file'){
      out+= `<span class="file">${elem.name}</span>`
    }
  }

  return out + end;
});

addCommand("help", (opt) => {
  return helpTableTxt; // found in html.js
});

