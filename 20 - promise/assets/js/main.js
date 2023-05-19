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
        list.innerHTML += '<li>' + d.name + '</li>'
    })
})
.catch(e=>alert('Problem var'))

