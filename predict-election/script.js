const predict = function(){
    let text = document.getElementById('name').value;
    let num = parseInt(text, 36)%101;
    alert(`${text} has a ${num}% chance of winning in an election`);
}

const predict2 = function(){
    let text = document.getElementById('name1').value;
    let text2 = document.getElementById('name2').value;
    let num = parseInt(text, 36)%101;
    let num2 = parseInt(text2, 36)%101;
    if(num>num2){
        alert(`${text} will win the election`);        
    }else if(num2>num){
        alert(`${text2} will win the election`);        
    }else{
        alert('There will be a tie this election.....')
    }
}