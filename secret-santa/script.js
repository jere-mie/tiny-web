// check to make sure no 2 elements are the same
function checkarrays(a,b){
    for(let i=0; i<a.length; i++){
        if(a[i]==b[i]){
            return true;
        }
    }
    return false;
}

function generate(){
    let input = document.getElementById("names_input");
    let output = document.getElementById("names_output");
    let names = input.value.split('\n');
    let newNames = names.map((x) => x);//creating shallow copy of names
    let result = "";//string we give to textarea
    console.log(names);
    console.log(newNames);
    while(checkarrays(names, newNames)){
        newNames.sort((a,b)=>0.5 - Math.random());
    }
    // we do this again
    for(let i=0; i<newNames.length; i++){
        result+=newNames[i];
        result+="\n";
    }
    output.value = result;    
}