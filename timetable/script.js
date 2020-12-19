function run(){
    let input = document.getElementById('time-in');
    let output = document.getElementById('output');
    let timeon = document.getElementById('on-time');
    let timeoff = document.getElementById('off-time');
    let times = input.value.split(':')
    times[0] = parseInt(times[0]);
    times[1] = parseInt(times[1]);
    let ttime = times[1];
    let text = "ON";
    let increment = 30;
    output.innerHTML = "";
    let p = document.createElement("p");
    ttime = times[1].toString().padStart(2, "0");
    p.innerText = `${times[0]}:${ttime} ${text}`;
    output.appendChild(p);

    for(let i=0; i<25; i++){
        p = document.createElement("p");
        if(i%2==0){
            text = "OFF"
            increment = parseInt(timeon.value);
        }else{
            text = "ON"
            increment = parseInt(timeoff.value);
        }
        times[1]+=increment;
        while(times[1]>=60){
            times[1]-=60;
            times[0]++;
        }
        while(times[0]>12){
            times[0]-=12;
        }
        ttime = times[1].toString().padStart(2, "0");
        p.innerText = `${times[0]}:${ttime} ${text}`;
        output.appendChild(p);
    }

    console.log(times);
}