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
    item.setAttribute("class", "draggable");
    item.setAttribute("draggable", "true");

    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    })

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    })

    item.appendChild(del);
    item.appendChild(rendered);
    result.appendChild(item);
    eqn.value = "";
}        

function delLine(index){
    document.querySelector("#ren"+index).remove();
    document.querySelector("#del"+index).remove();
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