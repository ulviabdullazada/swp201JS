let row = document.querySelector(".row");

// axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
//     for (let i = 0; i < response.data.length; i++) {
//         row.innerHTML += 
//         `
//         <div class="card col-4" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="card-title">${response.data[i].title}</h5>
//                 <p class="card-text">${response.data[i].body}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         `
//     }
// })


fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    data.forEach(el => {
        row.innerHTML += 
            `
            <div class="card col-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text"></p>
                    <a href="#" id="${el.id}" class="btn btn-primary">Add to basket</a>
                </div>
            </div>
            `
    });
})

let product = {
    id: 0,
    count:0
}
let arrStr = localStorage.getItem("products");


if(arrStr !== null){
    let arr = JSON.parse(localStorage.getItem("products"))
    arr.push(product)
    JSON.stringify(localStorage.setItem("products",arr))
}
else{
    localStorage.setItem("products","[]")
}
