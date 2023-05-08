const box = document.querySelector('.box');
const area = document.querySelector('.area');
const step = 20;
document.body.addEventListener("keyup",e=>{
    if (e.key == "ArrowRight") {
        goRight();
    }
})
function goRight() {
    let marLeft = box.style.marginLeft ? parseInt(box.style.marginLeft) : 0
    if (marLeft + step <= area.clientWidth - box.clientWidth) {
        box.style.marginLeft = marLeft + step + "px";
    }
    else{
        box.style.marginLeft = area.clientWidth - box.clientWidth + "px"
    }
}