var i = 0;
function run(){
    let eqn = document.querySelector("#eqn"); 
    let result = document.querySelector("#result");
    let item = document.createElement("div");
    let rendered = document.createElement("div");
    let del = document.createElement("button");
    if(eqn.value==""){
        return;
    }
    i++;
    rendered.setAttribute("id", "ren"+i);
    del.setAttribute("class", "bbtn bbtn-cloud");
    del.setAttribute("onclick", `delLine(${i})`);
    del.setAttribute("id", `del${i}`);
    del.innerText = "X";

    katex.render(eqn.value, rendered, {
        throwOnError: false
    });
    item.appendChild(del);
    item.appendChild(rendered);
    result.appendChild(item);
    eqn.value = "";
}        

function delLine(index){
    document.querySelector("#ren"+index).remove();
    document.querySelector("#del"+index).remove();
}