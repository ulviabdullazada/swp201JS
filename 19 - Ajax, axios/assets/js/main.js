// $.ajax({
//     method:'GET',
//     url: 'https://jsonplaceholder.typicode.com/users',
//     success: function(res){
//         res.forEach(el=>{
//             $('ul').append(`<li class="collection-item">${el.name}</li>`)
//         })
//     },
//     error: function(err){
//         console.log(err);
//     }
// })
for (let i = 1; i < 13; i++) {
    $.ajax({
        method:'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/'+i,
        success: function(res){
            console.log(res);
            $('.row').append(
                `<div class="col-2 text-center p-1">
                    <div class="p-1">
                        <img class="w-100" src="${res.sprites.other["official-artwork"].front_default}"> 
                        <p>${res.name}</p>
                        <br>    
                        <a href='details.html?id=${res.id}' class="btn waves-effect cyan darken-3">Details<a>
                    </div>
                </div>`
            )
        },
        error: function(err){
            console.log(err);
        }
    })
}
