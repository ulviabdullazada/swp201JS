const div = document.querySelector(".task");
let px = 100;
div.onclick = () => {
    px += 100;
    div.style.width = px + "px";
    div.style.height = px + "px";
}