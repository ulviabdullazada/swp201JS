// const p = document.querySelector("p.text-danger");
// function removeClass(){
//     // const p = document.querySelector("p.text-danger");
//     // p.className += " text-center"
//     p.classList.toggle("text-danger")
// }
// function changeMode(){
//     document.body.classList.toggle("light");
//     document.body.classList.toggle("dark");
// }
function openModal(){
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
    modal.classList.remove("gorsenmesin")
}
function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none")
    modal.classList.add("gorsenmesin")
}
function addTr() {
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML += `<tr><th>1</th><td>${nameInp.value}</td><td>${surnameInp.value}</td><td><button arr-ind='0'>Delete</button></td></tr>`
    nameInp.value = "";
    surnameInp.value = "";
    closeModal();
}
