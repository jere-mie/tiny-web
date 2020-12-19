function run(){
    let input = document.getElementById('time-in');
    let output = document.getElementById('output');

    let times = input.value.split(':')
    times[0] = parseInt(times[0]);
    times[1] = parseInt(times[1]);
    let ttime = times[1];
    let text = "ON";
    let increment = 30;

    let p = document.createElement("p");
    if(times[1]==0){
        ttime = "00";
    }else{
        ttime = times[1]
    }
    p.innerText = `${times[0]}:${ttime} ${text}`;
    output.appendChild(p);

    for(let i=0; i<25; i++){
        p = document.createElement("p");
        if(i%2==0){
            text = "OFF"
            increment = 30;
        }else{
            text = "ON"
            increment = 20;
        }
        times[1]+=increment;
        if(times[1]>=60){
            times[1]-=60;
            times[0]++;
        }
        if(times[0]>12){
            times[0]-=12;
        }
        if(times[1]==0){
            ttime = "00";
        }else{
            ttime = times[1]
        }
        p.innerText = `${times[0]}:${ttime} ${text}`;
        output.appendChild(p);
    }

    console.log(times);
}