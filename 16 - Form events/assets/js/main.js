// function changeDivBg(){
//     const div = document.querySelector('div');
//     const input = document.querySelector('input');
//     div.style.backgroundColor = input.value;
// }
// function onKeyUpFunc(){
//     console.log('keyUp');
// }
// function onKeyDownFunc(){
//     console.log('keyDown');
// }
// function onKeyPressFunc(){
//     console.log('keyPress');
// }
// function focusChangeColor(x)
// {
//     x.style.backgroundColor = 'red';
// }
// function blurChangeColor(x)
// {
//     x.style.backgroundColor = 'yellow';
// }

// const button = document.querySelector('button');
// button.onclick = e=>{
//     e.preventDefault();
//     console.log(e);
// }
// const aHref = document.querySelector('a');
// aHref.onclick = e=>{
//     e.preventDefault();
// }

const input = document.querySelector('input');
function deleteNumber(){
    for (const key in input.value) {
        if (!isNaN(input.value[key])) {
            input.value = input.value.replace(input.value[key],'');
        }
    }
}
input.onkeydown = ev=>{
    if (!(ev.keyCode >= 48 && ev.keyCode  <= 57  || ev.keyCode == 8 )) {
        ev.preventDefault();
    }
}