// let cayQaynadi = false;
// const seherYemeyi = new Promise((resolve, reject)=>{
//     if (cayQaynadi) {
//         resolve('Cay qaynadi')
//     }
//     else{
//         reject('Bir problem...')
//     }
// })
// console.log(seherYemeyi);
// seherYemeyi.then(res=>console.log(res)).catch(err => console.log(err))

const fetched = fetch('https://jsonplaceholder.typicode.com/users')

// fetched.then(res => res.json())

fetched.then(res => res.json())
.then(data => data.filter(d => d.name.includes('le')))
.then(data=>{
    data.forEach(d=>{
        list.innerHTML += '<button id='${d.id}>' + d.name + '</button>'
    })
})
.catch(e=>alert('Problem var'))


// BASKET
// function BasketItem(id,count){
//     this.Id = id;
//     this.Count = count;
// }

// let btns = document.querySelectorAll(".btn");

// btns.forEach(btn=>{
//     btn.addEventListener("click",function(){
//         let dataId = Number(this.parentNode.parentNode.getAttribute("data-id"));
//         console.log(dataId)

//         let basket = localStorage.getItem("basket")
//         if(!basket){
//             basket = []
//         }
//         else{
//             basket = JSON.parse(basket)
//         }
        
//         let basketItem = basket.find(bi=>bi.Id == dataId)

//         if(!basketItem){
//             basketItem = new BasketItem(dataId,1)
//             basket.push(basketItem);
//         }
//         else{
//             basketItem.Count++;
//         }

//         localStorage.setItem("basket",JSON.stringify(basket))

//         let badge = document.querySelector(".badge")

//         badge.innerHTML = basket.length

//     })
// })