const container = document.getElementById('result');

container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if(afterElement == null){
        console.log('get naenaed');
        container.appendChild(draggable);
    }else{
        console.log('hello');
        container.insertBefore(draggable, afterElement);
    }
})

var i = 0;
function run(){
    let eqn = document.querySelector("#eqn"); 
    let result = document.querySelector("#result");

    let item = document.createElement("div");
    let unrendered = document.createElement("p");
    let rendered = document.createElement("div");
    let del = document.createElement("button");
    let ed = document.createElement("button");

    if(eqn.value==""){
        return;
    }
    i++;

    unrendered.setAttribute("id", "unren"+i);
    unrendered.setAttribute("class", "hidden");
    unrendered.innerText = eqn.value;


    rendered.setAttribute("id", "ren"+i);
    del.setAttribute("class", "bbtn bbtn-cloud");
    del.setAttribute("onclick", `delLine(${i})`);
    del.setAttribute("id", `del${i}`);
    del.innerText = "X";
    ed.setAttribute("class", "bbtn bbtn-amber");
    ed.setAttribute("onclick", `callEdit(${i})`);
    ed.setAttribute("id", `ed${i}`);
    ed.innerText = "E";
    katex.render(eqn.value, rendered, {
        throwOnError: false
    });
    item.setAttribute("class", "draggable");
    item.setAttribute("draggable", "true");

    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    })

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    })

    item.appendChild(del);
    item.appendChild(ed);
    item.appendChild(rendered);
    item.appendChild(unrendered);
    result.appendChild(item);
    eqn.value = "";
}        

function delLine(index){
    document.querySelector("#ren"+index).remove();
    document.querySelector("#unren"+index).remove();
    document.querySelector("#del"+index).remove();
    document.querySelector("#ed"+index).remove();
}

function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if(offset < 0 && offset>closest.offset){
            return {offset: offset, element: child};
        }else{
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;
}

function callEdit(index){
    let newForm = document.getElementById('newForm');
    let editForm = document.getElementById('editForm');
    let lineId = document.getElementById('lineId');
    let editEqn = document.getElementById('editEqn');

    let text = document.getElementById('unren'+index).innerText;
    editEqn.value = text;
    newForm.classList.add("hidden");
    editForm.classList.remove("hidden");
    lineId.value = index;
}

function edit(){
    let editEqn = document.getElementById('editEqn');
    let newForm = document.getElementById('newForm');
    let editForm = document.getElementById('editForm');
    let lineId = document.getElementById('lineId').value;
    let line = document.getElementById('ren'+lineId);
    let unren = document.getElementById('unren'+lineId);
    unren.innerHTML = editEqn.value;    
    katex.render(editEqn.value, line, {
        throwOnError: false
    });
    editEqn.value = "";
    newForm.classList.remove("hidden");
    editForm.classList.add("hidden");
}