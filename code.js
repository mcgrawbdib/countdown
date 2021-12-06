let currtime = 10;

setTimeout(CountDown, 0000);
setTimeout(CountDown, 1000);
setTimeout(CountDown, 2000);
setTimeout(CountDown, 3000);
setTimeout(CountDown, 4000);
setTimeout(CountDown, 5000);
setTimeout(CountDown, 6000);
setTimeout(CountDown, 7000);
setTimeout(CountDown, 8000);
setTimeout(CountDown, 9000);
setTimeout(CountDown, 10000);



function CountDown(){
    if(currtime == 0){
        document.getElementById("countDown").innerHTML = "Blastoff!";    
    }else if(currtime != 0){
        document.getElementById("countDown").innerHTML = currtime + " seconds";
    }
    currtime -= 1;
}