// const h1 = document.createElement("h1");
// h1.innerText = "Salam";

// // h1.append(document.createTextNode("Salam"));
// // console.log(h1);
// // console.log("<h1>Salam</h1>");
// document.body.prepend(h1);

// let h1 = `<h1>Salam</h1>`;
// document.body.innerHTML += h1;

// let std = {
//     name : "Nurlan",
//     surname : "Ibrag"
// }
// std.name


// let p = document.getElementsByTagName("span");
// console.log(p[0].innerText);

// let yazi = document.getElementsByClassName("yazi");
// console.log(yazi);

// let kamil = document.getElementsByName("Kamil");
// console.log(kamil);

// const el = document.getElementById("test");
// console.log(el.innerText);
// el.innerText = "Eflatun";
// console.log(el.innerText);

// let test = document.querySelectorAll("html body .yazi");
// console.log(test);

const inp = document.querySelector("input");
const ul = document.getElementById("list");
const btn = document.getElementById("btn");
const deleteBtn = document.getElementById("deleteBtn");
let stdns = [];
// console.log(inp.value);
// addBtn();
// includes();
btn.onclick = e=>{
    e.preventDefault();
    if (inp.value.trim() != '') {
        if(stdns.includes(inp.value.trim()) === false){
            stdns.push(inp.value.trim());
            inp.value = "";
            fillList();
        }

        else{
            alert("Bu adda istifadeci var!");
        }
    }
    else{
        alert("Nese daxil et");
    }
}
deleteBtn.onclick = e=>{
    e.preventDefault();
    deleteList()
    fillList()
}

function fillList() {
    ul.innerHTML = stdns.reduce((total, val)=> total + `<li class="list-group-item">${val}</li>`,'');
}
function deleteList(){
    stdns.pop()
} 