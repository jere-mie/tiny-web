function stoint(str){
    return parseInt(str.toLowerCase(), 36);
}

function lovify(){
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    console.log(name1+', '+name2);
    let n1 = stoint(name1);
    let n2 = stoint(name2);
    let diff = (n1*n2) % 101;
    console.log(n1+', '+n2);
    console.log(diff);
    alert(`${name1} and ${name2} have a ${diff}% chance of a relationship succeeding`)    
}