// var s = 0;
// var target = prompt("Ededi daxil edin");
// if (!isNaN(target)) {
//     for(var i = 1; i <= target; i++){
//         s = s + i; 
//     }
//     console.log(s);
// }
// else{
//     console.log("Adam kihsi olar");
// }
// s = 0 + 1 = 1
// s = 1 + 2 = 3
// s = 3 + 3 = 6
// s = 6 + 4 = 10
// s = 10 + 5 = 15

// while(true){
//     console.log("Salam");
// }

// var a = 22;
// while(a > 10)
// {
//     console.log(a);
//     a--;
// }
// var a = 5
// while(a > 6){
//     console.log("Salam");
// }

// do{
//     console.log("Salam");
// }
// while(a > 6)
// var num;
// do{
//     num = prompt("Ededi daxil edin")
// }
// while(isNaN(num))

// alert(num % 2 == 0 ? "Cutdur":"Tekdir")
// var num
// num = prompt("Ededi daxil edin")
// while(isNaN(num)){
//     alert("Eded daxil et");
//     num = prompt("Ededi daxil edin")
// }

// for (let i = 0; i < 40; i++) {
//     if( i % 2 == 1){
//         continue;
//     } 
//     console.log(i)
// }


// var eded = 71;

// var teklik = eded % 10;
// eded = (eded - teklik)/10;
// var eks = teklik*10+eded;
// console.log(eks);



//var num = 2023;
//var eks = 0;
//var teklik = num % 10 = 3; num = (num-teklik) / 10 = 202; eks = eks * 10 + teklik = 3;
//teklik = num % 10 = 2; num = (num - teklik) / 10 = 20; eks = eks * 10 + teklik = 32;
//teklik = num % 10 = 0; num = (num - teklik) / 10 = 2; eks = eks*10+teklik = 320;
//teklik = num % 10 = 2; num = (num - teklik) / 10 = 0; eks = eks *10 + teklik = 3202;

var num = prompt();
var teklik = num % 10;
var eks = teklik;

while(num > 9){
    num = (num - teklik) / 10;
    teklik = num % 10;
    eks = eks * 10 + teklik;
}

console.log(eks);
