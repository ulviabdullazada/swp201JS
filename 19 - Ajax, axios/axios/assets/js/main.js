let row = document.querySelector(".row");

axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
    for (let i = 0; i < response.data.length; i++) {
        row.innerHTML += 
        `
        <div class="card col-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${response.data[i].title}</h5>
                <p class="card-text">${response.data[i].body}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }
})