let nums = [6,91,3,-56,3,0,22,-3];
let stds = [
    {name:"Emil",age:20}, 
    {name:"Ruslan", isMarried:false}, 
    {name:"Elvin",age:22, surname:"Ibragimov"}
];



for (const elem of stds) {
    for (const key in elem) {
        console.log(key + " : "+elem[key]);
    }
}









// console.log(Array.from("Salam xanim"))
// console.log("Salam xaam. Tanis olmaq olarmi?".split(" "))

// console.log(stds.reverse().find(s=>s.name.startsWith("E")));
// console.log(stds.indexOf({name:"Emil", age:20}));

// console.log(nums.some(n=> n > 0));
// console.log(nums.reduce((total, val)=> total +val)/nums.length);
// console.log(nums.filter(n => n > 0).map(n=>n*2).reduce((t, v)=>t+v));

// let names = ["Emil", "Elvin","Sevinc","Eli","Ruslan","Tural", "Veli", "Mehemmedeli"]
// console.log(names.filter(n=>n.toLowerCase().includes("eli")));
// console.log(stds.filter(s=>s.name.startsWith("E")));
// let count = 0;
// for (let i = 0; i < names.length; i++) {
//     // const element = ;
//     if (names[i].toLowerCase().includes("Eli")) {
//         count++;
//     }
// }
// console.log(count);

// console.log(stds.map(val => val.name.toLowerCase().slice(1,3)));

// function map(arr, callBackFn){
//     for (let index = 0; index < array.length; index++) {
//         callBackFn(arr[index], index, arr)        
//     }
// }

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);    
// }

// nums.forEach((val, ind) => console.log(val+ " - " + ind));

//1. value
//2. index
//3. array

// function write2Console(val) {
//     console.log(val);
// }
// function (x){
//     console.log(x);
// }


