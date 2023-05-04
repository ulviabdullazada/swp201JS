// const spanEl = document.querySelector("span");
// console.log(spanEl);
// const aEl = document.querySelector("a");
// console.log(aEl.id);

// spanEl.onclick = () => {
//     aEl.href = "https://www.pokemon.com/us/pokedex/bulbasaur";
// }
// console.log(spanEl.getAttribute("asd"));
// spanEl.setAttribute("asd","123")
// spanEl.removeAttribute("asd");
// console.log(spanEl.hasAttribute("asd"));
// function addToList(){
//     const input = document.getElementById('todo');
//     const collection = document.querySelector('.collection');
//     collection.innerHTML += `<li class="collection-item teal lighten-4">${input.value}<i onclick="deleteRow(this)" class="material-icons">delete</i></li>`
// }

// function deleteRow(el){
//     el.parentElement.remove();
// }
//-- forla
// function changeImg(el){
//     const mainImg = el.parentElement.previousElementSibling.children[1];
//     let thisImgSrc = el.getAttribute("src");
//     mainImg.setAttribute("src", thisImgSrc);
// }
// function nextImg(){
//     let activeImg = getActiveImg();
//     changeImg(activeImg.nextElementSibling);
// }
// function prevImg(){
//     let activeImg = getActiveImg();
//     changeImg(activeImg.previousElementSibling);
// }
// function getActiveImg(){
//     const mainImg = document.querySelector('.row-2 img');
//     const imgs = document.querySelectorAll('.row img');
//     for (const img of imgs) {
//         if (mainImg.src == img.src) {
//             return img;
//         }
//     }
// }

//-- forsuz
function changeImg(el){
    const mainImg = el.parentElement.previousElementSibling.children[1];
    let thisImgSrc = el.getAttribute("src");
    mainImg.setAttribute("src", thisImgSrc);
}
const rowDiv = document.querySelector('.row');
const mainImg = document.querySelector('.row-2 img');
function nextImg(){
    let activeImg = document.querySelector('.row img[src="'+mainImg.src+'"]');
    activeImg == rowDiv.lastElementChild ? changeImg(rowDiv.firstElementChild) : changeImg(activeImg.nextElementSibling); 
}

function prevImg(){
    let activeImg = document.querySelector('.row img[src="'+mainImg.src+'"]');
    if (activeImg == rowDiv.firstElementChild) {
        changeImg(rowDiv.lastElementChild);
    }
    else{
        changeImg(activeImg.previousElementSibling);
    }
}