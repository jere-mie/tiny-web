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
            out += `<span>&nbsp;${i+1}&nbsp;&nbsp;&nbsp;${history[i]}</span>`
        }else{
            out += `<span>${i+1}&nbsp;&nbsp;&nbsp;${history[i]}</span>`
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

addCommand('mkdir', (opt) => {
  if(!opt.trim()){
    return `mkdir: missing operand`;
  }
  for(const elem of filesFolders){
    if(elem.name == opt.trim()){
      return `mkdir: cannot create directory '${opt.trim()}': File exists`;
    }
  }
  return `mkdir: cannot create directory '${opt.trim()}': Permission denied`
});

addCommand('rmdir', (opt) => {
  if(!opt.trim()){
    return `rmdir: missing operand`;
  }
  for(const elem of filesFolders){
    if(elem.name == opt.trim()){
      if(elem.type == 'folder'){
        return `rmdir: failed to remove '${opt.trim()}': Permission denied`;
      }else{
        return `rmdir: failed to remove '${opt.trim()}': Not a directory`;
      }
    }
  }
  return `rmdir: failed to remove '${opt.trim()}': No such file or directory`
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

addCommand("cat", (opt)=>{
  out = ``;
  if(!opt.trim()){
    return `<img src="https://media4.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"></img>`
  }else{
    for(const elem of filesFolders){
      if (elem.name == opt.trim()){
        if(elem.type == 'file'){
          return elem.content.trim().replaceAll('\n', '<br/>');
        }else{
          return `cat - ${opt.trim()}: Is a directory`
        }
      }
    }
    return `cat - ${opt.trim()}: No such file or directory`
  }
})

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

addCommand("edit", (opt) =>{
  if(!opt){return '';}
  if(opt.trim() == 'readme.txt'){
    return `edit: cannot edit file '${opt.trim()}': Permission denied`
  }
  for(let i=0; i<filesFolders.length; i++){
    if(filesFolders[i].name == opt.trim()){
      if(filesFolders[i].type == 'folder'){
        return `edit - ${opt.trim()}: Is a directory`
      }else{
        let content = prompt(`Please enter the contents of ${opt.trim()}`, filesFolders[i].content);
        if(!content || content == ''){
          return '';
        }
        filesFolders[i].content = content;
        return '';
      }
    }
  }
  let content = prompt(`Please enter the contents of ${opt.trim()}`);
  if(!content || content == ''){
    return '';
  }
  filesFolders.push({
    name:opt.trim(),
    type:"file",
    content:content
  });
  return '';
})

addCommand('touch', (opt) => {
  if(!opt.trim()){return 'touch: missing file operand'}
  for(const elem of filesFolders){
    if(opt.trim() == elem.name){
      return '';
    }
  }
  filesFolders.push({
    name:opt.trim(),
    type:"file",
    content:''
  });
  return '';
})

addCommand('exit', (opt) => {
  document.getElementById('html').innerHTML = '';
  document.getElementById('html').setAttribute(`style`, `background-color:black;`);
  return '';
})

addCommand('pwd', (opt) => {
  return '/home/jeremie';
})

addCommand("nano", (opt) => {
  document.getElementById('terminal').setAttribute('class', 'hidden');
  document.getElementById('editor').setAttribute('class', '');
  document.getElementById('editortextarea').focus();
  return `edited "${opt}"`;
});
