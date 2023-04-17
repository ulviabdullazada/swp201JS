// var ages = [19,21,19,20,21,100,11];
// console.log();
// var cem = 0;
// console.log(ages.length);
// for(var i = 0; i<ages.length;i++){
//     cem += ages[i];
// }
// console.log(cem);

// var arr = [null,true, false, true, 123, "Salam", undefined]
// console.log(arr);


// // console.log(person.name + " " + person.surname + " " +person.age);

// for (let i = 0; i < people.length; i++) {
//     if (people[i].name == "Tural") {
//         console.log(i);
//     }
// }

// var person = {
//     name : "Ruslan",
//     surname : "Vahabov",
//     age: "19"
// }
// var people = 
// [
//     person,
//     {
//         name:"Saxib",
//         surname:"Asad",
//         age:16
//     },
//     {
//         name:"Tural",
//         surname:"Kalbaliyev",
//         age:19
//     },
//     {
//         name:"Leyla",
//         surname:"Huseynova",
//         age:21
//     }
// ];
// var result = "";
// for(var i = 0; i < people.length; i++){
//     result +=`
//     <tr>
//         <td>${i+1}</td>
//         <td>${people[i].name}</td>
//         <td>${people[i].surname}</td>
//         <td>${people[i].age}</td>
//     </tr>`
// }
// tbody.innerHTML = result;
// console.log(result);
// tbody.innerHTML += `<tr>
// <td>${i+1}</td>
// <td>${people[i].name}</td>
// <td>${people[i].surname}</td>
// <td>${people[i].age}</td>
// </tr>`;

var swp201 = [
    {
        name: "Sako",
        surname: "Asad",
        img: "1.jfif",
        status: "Gozlugum rayban yolumdan cekil hayvan"
    },
    {
        name: "Nuruw",
        surname: "Ibra",
        img: "2.jpg",
        status: "Bir ara yoktum dediler oldu simdi her kes bilsin kral geri dondu"
    },
    {
        name: "Tural",
        surname: "Kalbaliyev",
        img: "3.jfif",
        status: "Off errrkek yhaaa"
    }
];
var result = "";

for (let i = 0; i < swp201.length; i++) {
    result += `<div style="height:100%;" class="col-md-4">
    <div class="card">
        <div class="card-header">
            ${swp201[i].name} ${swp201[i].surname}
        </div>
        <div class="card-body">
            <img class="w-100" src="./assets/imgs/${swp201[i].img}" alt="">
            <p>${swp201[i].status}</p>
        </div>
    </div>
</div>`;
}

// swp201.forEach((item)=>{
//     result += `<div style="height:100%;" class="col-md-4">
//     <div class="card">
//         <div class="card-header">
//             ${item.name} ${item.surname}
//         </div>
//         <div class="card-body">
//             <img class="w-100" src="./assets/imgs/${item.img}" alt="">
//             <p>${item.status}</p>
//         </div>
//     </div>
// </div>`;
// })
area.innerHTML = result;