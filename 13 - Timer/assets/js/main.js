const sec = document.getElementById("second");
const clock = document.getElementById("hour");
const min = document.getElementById("minute");
let timer = 0;
let minute = 0;
let hour = 0;
function Timer(){
    timer++;
    if(timer==10){
        timer=0;
        minute ++
    }
    else if(minute == 5){
        minute =0;
        hour++
    }
    sec.innerText = timer;
    min.innerHTML = minute;
    clock.innerText = hour;
}
const a= setInterval(Timer,1000);
function clearInt(){
    clearInterval(a)
}
function startInt(){
    setInterval (Timer,1000)
}






// SET TIMEOUT
// setTimeout(() => {
//     alert("Salam SWP201");
// }, 3000);


// const a = setTimeout(TestAlert, 3000);

// function TestAlert() {
//     alert("Salam SWP201");
// }

// clearTimeout(a);


// SET INTERVAL

// setInterval(() => {
//     console.log("salam")
// }, 1000);

// const b = setInterval(ConsoleTest, 1000);

// function ConsoleTest(){
//     console.log("salam");
// }

// function clearInt(){
//     clearInterval(b);
// }

// function continueInt(){
//     setInterval(ConsoleTest, 1000);
// }


// const clock = document.getElementById("clock");

// setInterval(() => {
//     let a = new Date();
//     clock.innerText = a;
// }, 1000)


